<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Home', [
            'featuredBooks' => Book::latest()->take(4)->get()
                ->map(fn ($book) => $this->enrich($book))
                ->values(),
        ]);
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function catalog(Request $request)
    {
        $query = $request->input('q');

        $books = Book::when($query, fn ($q) => $q->where('title', 'like', "%{$query}%"))->get();

        return Inertia::render('Catalog', [
            'books' => $books->map(fn ($book) => $this->enrich($book))->values(),
            'query' => $query ?? '',
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

private function enrich(Book $book): array
{
    $info = Cache::remember("book-info:{$book->title}", now()->addWeek(), function () use ($book) {
        $response = Http::withOptions(['verify' => false])
            ->withHeaders(['User-Agent' => 'Bookish Bookstore (contact@bookish.test)'])
            ->get('https://openlibrary.org/search.json', [
                'q' => $book->title,
                'limit' => 1,
                'fields' => 'author_name,key',
            ]);

        if (! $response->successful() || empty($response->json('docs'))) {
            return ['author' => 'Unknown Author', 'description' => null];
        }

        $doc = $response->json('docs.0', []);
        $author = $doc['author_name'][0] ?? 'Unknown Author';
        $description = null;

        if (! empty($doc['key'])) {
            $workResponse = Http::withOptions(['verify' => false])
                ->withHeaders(['User-Agent' => 'Bookish Bookstore (contact@bookish.test)'])
                ->get("https://openlibrary.org{$doc['key']}.json");

            if ($workResponse->successful()) {
                $desc = $workResponse->json('description');
                $description = is_array($desc) ? ($desc['value'] ?? null) : $desc;
            }
        }

        return ['author' => $author, 'description' => $description];
    });

    return [
        'id' => $book->id,
        'title' => $book->title,
        'price' => $book->price,
        'stock' => $book->stock,
        'cover_url' => $book->cover_url,
        'author' => $info['author'],
        'description' => $info['description'],
    ];
}
}