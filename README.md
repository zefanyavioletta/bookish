# Bookish
A company profile website and product catalogue for a bookstore company, Bookish.

## What this project uses
- **Laravel**
Handles the backend (PHP)
- **React**
Handles the frontend
- **Inertia.js**
Connects Laravel and React (backend & frontend)
- **MySQL**
The database that stores the book title, price, cover image, and stock count
- **Open Library API**
An outside website (openlibrary.org) that we ask for the author name and book description.
- **Tailwind CSS**
Used to style the colors, spacing, fonts, etc.

## Book data
For every book, some info comes from our own database in MySQL, and some comes from an outside source, in this project I am using an API from open library.

The purpose of this is simply to avoid writing each book descriptions one-by-one which can take some time to manage. We only manage the title, price, and stock, which are the things that actually belong to our store.

**From our database (MySQL):**
- Title
- Price
- Stock (how many copies we have)
- Book Cover image

**From Open Library (fetched live):**
- Author name
- Description

The two get combined together in `PageController.php` before being sent to the page.
## Project structure (the important folders)

```
app/Http/Controllers/PageController.php (handles backend)
app/Models/Book.php (represents a row in the database)
database/migrations/ (files that create the database tables)
database/seeders/BookSeeder.php (starter book data for *local testing*)
resources/js/pages/ (the actual pages (Home, Catalog, Contact))
resources/js/components/SiteLayout.tsx (the top menu and footer)
resources/views/app.blade.php (HTML file that loads everything else)
public/images/ (photos and book cover images for *local testing*)
```

## Files that are only needed for local testing

Some files are only there to help while building and testing on my own computer, and don't need to exist on the live site at all.

**Only needed locally:**
- `node_modules/` (Never upload this anywhere)
- `resources/js/` and `resources/css/`
The source code for the frontend. Locally, this gets used directly. On the live site, this code has already been turned into the `public/build/` folder by running `npm run build`, so the live site only needs that finished result.
- `tests/`
Automated test files.
- `database/database.sqlite`
The local database file (sqlite) only exists on our computer. The live site uses a separate MySQL database.
- `database/seeders/BookSeeder.php`
this fills our local database with book data when we run `php artisan migrate --seed`. On the live site, the same starter data was added by hand using phpMyAdmin.
- `.git/`
our version history for GitHub.

**Only needed on the live site:**
- `public/build/`
The finished, compiled JS and CSS files. This file created when we run `npm run build`.

**Needed in both places, but with different content:**
- `.env`
This fle holds settings like the database connection and API keys. Locally it points to SQLite. On the live site it points to real MySQL.

## Running this on your own computer

1. Install PHP, Composer, and Node.js if you don't have them yet
2. Copy `.env.example` to `.env` and fill in your own database details
3. Run these commands in the project folder:

```
composer install
npm install
php artisan key:generate
php artisan migrate --seed
```

4. Start the site:

```
composer run dev
```

5. Open `http://localhost:8000` in your browser.

## Putting this live/deployment

You can select any web hosting provider to store the website files and make them accessible online. I personally uses Infinityfree for this project.

## Known limits

- The book description isn't always available. Open Library doesn't have a description for every book, so some books will show no description.
- Author and description depend on the book title matching something in Open Library database closely enough.

## Why this project was built

This was built as a personal project to practice full stack web development: building pages, connecting a database, and using an API, then learning how to put a PHP website online.
