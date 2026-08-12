<?php
use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/catalog', [PageController::class, 'catalog'])->name('catalog');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
use App\Http\Controllers\BookSyncController;

Route::get('/internal/sync-books/{secret}', [BookSyncController::class, 'sync']);