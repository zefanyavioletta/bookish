import SiteLayout from '@/components/SiteLayout';
import { router } from '@inertiajs/react';
import { useState } from 'react';

type Book = { title: string; author: string; genre: string; year: number | null; cover: string | null };

export default function Catalog({ books, query }: { books: Book[]; query: string }) {
    const [search, setSearch] = useState(query ?? '');

    function handleSearch(e: React.FormEvent) {
        e.preventDefault();
        router.get('/catalog', { q: search }, { preserveState: true });
    }

    return (
        <SiteLayout>
            <div className="bg-bookish-pink-soft px-6 py-16">
                <h1 className="font-display font-bold text-bookish-maroon text-4xl text-center mb-8">
                    Katalog
                </h1>

                <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari judul buku..."
                        className="w-full rounded-full bg-white px-6 py-3 text-bookish-maroon placeholder:text-bookish-maroon/50 outline-none"
                    />
                </form>

                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <div key={book.title} className="bg-white rounded-2xl overflow-hidden">
                            <div className="aspect-square bg-bookish-blue/30">
                                {book.cover && (
                                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                                )}
                            </div>
                            <div className="p-4">
                                <p className="font-display font-semibold text-bookish-maroon">{book.title}</p>
                                <p className="text-sm text-bookish-maroon/60">{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {books.length === 0 && (
                    <p className="text-center text-bookish-maroon/70 mt-10">
                        Buku tidak ditemukan. Coba kata kunci lain.
                    </p>
                )}
            </div>
        </SiteLayout>
    );
}