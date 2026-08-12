<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = ['title', 'price', 'stock', 'cover_url', 'author', 'description'];
}