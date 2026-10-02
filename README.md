# Bookish
A company profile website and product catalogue for a bookstore company, Bookish.

## What this project uses
- **Laravel**
- **React**
- **Inertia.js**
- **MySQL**
- **Open Library API**
- **Tailwind CSS**

## Book data
For every book, some info comes from our own database in MySQL, and some comes from an outside source, in this project I am using an API from Open library.

The purpose of this is simply to avoid writing each book descriptions one-by-one which can take some time to manage. We only manage the title, price, and stock, which are the things that actually belong to the book store.

**From database (MySQL):**
- Title
- Price
- Stock (how many copies we have)
- Book Cover image

**From Open Library (fetched live):**
- Author name
- Description

## Running this on your own computer

1. Install PHP, Composer, and Node.js
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

## Known limits

- The book description isn't always available. Open Library doesn't have a description for every book, so some books will show no description.
- Author and description depend on the book title matching something in Open Library database closely enough.

## Why this project was built

This was built as a personal project to practice full stack web development: building pages, connecting a database, and using an API, then learning how to put a PHP website online.
