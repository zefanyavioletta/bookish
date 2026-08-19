# Bookish

A simple company website for a bookstore called Bookish.

## What this project uses

- **Laravel**: handles the backend (PHP). It takes requests, talks to the database, and sends data to the page.
- **React**: handles what you see on screen (the buttons, text, layout).
- **Inertia.js**: connects Laravel and React together, so they can work as one app.
- **MySQL**: the database. It stores the book title, price, cover image, and stock count.
- **Open Library API**: an outside website (openlibrary.org) that we ask for the author name and book description. We don't store this in our own database, we just ask for it each time.
- **Tailwind CSS**: used to style the site (colors, spacing, fonts).

## How the book data works

For every book, some info comes from our own database, and some comes from an outside source.

**From our database (MySQL):**
- Title
- Price
- Stock (how many copies we have)
- Cover image

**From Open Library (fetched live):**
- Author name
- Description

The two get combined together in `PageController.php` before being sent to the page. This is done so we don't have to type in the author and description ourselves. We only manage the title, price, and stock, which are the things that actually belong to our store.

## Project structure (the important folders)

```
app/Http/Controllers/PageController.php (handles the backend)
app/Models/Book.php (represents a "book" row in the database)
database/migrations/ (files that create the database tables)
database/seeders/BookSeeder.php (starter book data for *local testing*)
resources/js/pages/ (the actual pages (Home, Catalog, Contact))
resources/js/components/SiteLayout.tsx (the top menu and footer, shared by every page)
resources/views/app.blade.php (the one HTML file that loads everything else)
public/images/ (photos and book cover images)
```

## Files that are only needed for local testing

Not every file in this project is needed everywhere. Some are only there to help while building and testing on my own computer, and don't need to exist on the live site at all.

**Only needed locally:**
- `node_modules/`: all the JavaScript tools and libraries. This folder is huge and never gets uploaded anywhere.
- `resources/js/` and `resources/css/`: the source code for the frontend. Locally, this gets used directly. On the live site, this code has already been turned into the `public/build/` folder by running `npm run build`, so the live site only needs that finished result, not the original source files.
- `tests/`: automated test files. These check that the code works, but the live site doesn't need them to actually run.
- `database/database.sqlite`: the local database file. This only exists on your computer. The live site uses a separate real MySQL database instead, not this file.
- `database/seeders/BookSeeder.php`: this fills your local database with starter book data when you run `php artisan migrate --seed`. On the live site, the same starter data was added by hand using phpMyAdmin, so this file isn't needed there.
- `.git/`: your version history for GitHub. Not needed for the site to run.

**Only needed on the live site:**
- `public/build/`: the finished, compiled JS and CSS files. Your computer creates this file when you run `npm run build`, but while testing locally you usually don't look at it directly, since `composer run dev` builds things on the fly instead.

**Needed in both places, but with different content:**
- `.env`: this file holds settings like the database connection and API keys. Locally it points to SQLite. On the live site it points to real MySQL.

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

I personally uses Infinityfree. But everything has to be built on your own computer first, then uploaded by hand.

**Important:** changing a file on your computer does not change it on the live site by itself. If you edit a PHP file, you also need to upload the same file to the live server for the change to actually show up there. Local and live are two separate copies of the project.

## Known limits

- The book description isn't always available. Open Library doesn't have a description for every book, so some books will show no description.
- Author and description depend on the book title matching something in Open Library database closely enough.
- The free InfinityFree hosting has a daily limit on how many times the site can be visited.

## Why this project was built

This was built as a personal project to practice full stack web development: building pages, connecting a database, and using an API, then learning how to put a PHP website online.
