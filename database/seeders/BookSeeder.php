<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            'title' => 'The Lord of the Rings: The Fellowship of the Ring',
            'price' => 100000,
            'stock' => 10,
            'cover_url' => '/images/covers/lotrfellowship.jpg',
        ]);

    }
}