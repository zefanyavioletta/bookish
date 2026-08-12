import SiteLayout from '@/components/SiteLayout';
import { router } from '@inertiajs/react';
import { useState } from 'react';

type Book = {
    id: number;
    title: string;
    price: string;
    stock: number;
    cover_url: string | null;
    author: string | null;
    description: string | null;
};

export default function Catalog({ books = [], query }: { books: Book[]; query: string }) {
    const [search, setSearch] = useState(query ?? '');
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    function handleSearch(e: React.FormEvent) {
        e.preventDefault();
        router.get('/catalog', { q: search }, { preserveState: true });
    }

    return (
        <SiteLayout>
            <div className="bg-bookish-pink-soft px-6 py-16 min-h-[calc(100vh-80px)]">
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

                {/* Grid layout ensuring all items display side-by-side */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="aspect-square bg-bookish-blue/30">
                                    {book.cover_url ? (
                                        <img src={book.cover_url} alt={book.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-bookish-maroon/40 text-xs">
                                            Tidak Ada Sampul
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <p className="font-display font-semibold text-bookish-maroon">{book.title}</p>
                                    <p className="text-sm text-bookish-maroon/60">
                                        {book.author || 'Penulis Tidak Diketahui'}
                                    </p>
                                    <p className="text-sm text-bookish-maroon mt-2">Rp{book.price}</p>
                                    {book.description && (
                                        <p className="text-xs text-bookish-maroon/70 mt-2 line-clamp-3">
                                            {book.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="px-4 pb-4">
                                <button
                                    onClick={() => setSelectedBook(book)}
                                    className="text-xs font-semibold text-bookish-maroon underline hover:opacity-80 transition"
                                >
                                    Lihat lebih detail
                                </button>
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

            {/* Modal Pop-up */}
            {selectedBook && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setSelectedBook(null)}
                            className="absolute top-4 right-4 text-bookish-maroon/60 hover:text-bookish-maroon text-xl font-bold"
                        >
                            ✕
                        </button>

                        <div className="flex gap-4 items-start mb-4">
                            {selectedBook.cover_url && (
                                <img
                                    src={selectedBook.cover_url}
                                    alt={selectedBook.title}
                                    className="w-24 h-32 object-cover rounded-lg flex-shrink-0"
                                />
                            )}
                            <div>
                                <h2 className="font-display font-bold text-bookish-maroon text-xl">
                                    {selectedBook.title}
                                </h2>
                                <p className="text-sm text-bookish-maroon/60">
                                    {selectedBook.author || 'Penulis Tidak Diketahui'}
                                </p>
                                <p className="text-base font-semibold text-bookish-maroon mt-2">
                                    Rp{selectedBook.price}
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h3 className="font-semibold text-bookish-maroon text-sm mb-2">Deskripsi</h3>
                            <p className="text-sm text-bookish-maroon/80 leading-relaxed whitespace-pre-line">
                                {selectedBook.description || 'Deskripsi tidak tersedia untuk buku ini.'}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </SiteLayout>
    );
}