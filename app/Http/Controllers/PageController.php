<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
{
    return Inertia::render('Home');
}

    public function about()
    {
        return Inertia::render('About');
    }

    public function catalog(Request $request)
    {
        $query = $request->input('q', 'bestsellers');

        return Inertia::render('Catalog', [
            'books' => $this->fetchBooks($query, 20),
            'query' => $query,
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function submitContact(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string|max:2000',
        ]);

        // TODO: send email or store in DB
        // Mail::to('hello@bookish.com')->send(new ContactMessage($validated));

        return back()->with('success', 'Thanks for reaching out! We\'ll get back to you soon.');
    }

    private function fetchBooks(string $query, int $limit): array
{
    $cacheKey = "books:google:{$query}:{$limit}";

    return Cache::remember($cacheKey, now()->addHours(6), function () use ($query, $limit) {
        $response = Http::get('https://www.googleapis.com/books/v1/volumes', [
            'q' => $query,
            'maxResults' => min($limit, 40),
            'key' => config('services.google_books.key'),
        ]);

        if (! $response->successful()) {
            return [];
        }

        return collect($response->json('items', []))
            ->map(function ($item) {
                $info = $item['volumeInfo'] ?? [];

                return [
                    'title' => $info['title'] ?? 'Untitled',
                    'author' => $info['authors'][0] ?? 'Unknown Author',
                    'year' => isset($info['publishedDate']) ? substr($info['publishedDate'], 0, 4) : null,
                    'genre' => $info['categories'][0] ?? 'General',
                    'cover' => $info['imageLinks']['thumbnail'] ?? null,
                ];
            })
            ->values()
            ->toArray();
    });
    }
}