import SiteLayout from '@/components/SiteLayout';
import { Link } from '@inertiajs/react';

type Book = {
    id: number;
    title: string;
    price: string;
    stock: number;
    cover_url: string | null;
    author: string;
    description: string | null;
};

const reasons = [
    {
        title: 'Koleksi buku sangat lengkap',
        body: 'Buku-buku berbagai genre baik buatan anak bangsa maupun impor.',
    },
    {
        title: 'Tempat nyaman untuk kamu',
        body: 'Tersedia tempat duduk dan AC yang bikin kamu betah hunting buku.',
    },
    {
        title: 'Harga ramah di kantong',
        body: 'Kami hanya memberikan harga terbaik untuk para pelanggan.',
    },
];

export default function Home({ featuredBooks }: { featuredBooks: Book[] }) {
    return (
        <SiteLayout>
            <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
                <img
                    src="/images/hero-books.jpg"
                    alt="Rak buku Bookish"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bookish-maroon/70" />

                <div className="relative px-6 py-24 md:py-32 text-center w-full max-w-4xl mx-auto">
                    <h1 className="font-display font-bold text-white text-5xl md:text-7xl mt-6">
                        Pusat Buku Paling Eksish!
                    </h1>
                    <p className="text-bookish-pink-soft/90 mt-6 max-w-md mx-auto">
                        Tempat hunting buku murah, berkualitas, lengkap, dan super nyaman. Temukan buku favoritmu di Bookish sekarang juga!
                    </p>
                    <Link
                        href="/catalog"
                        className="inline-block mt-10 bg-bookish-pink-soft text-bookish-maroon font-display font-semibold px-8 py-3 rounded-full hover:bg-bookish-maroon hover:text-bookish-pink-soft transition"
                    >
                        Lihat Katalog
                    </Link>
                </div>
            </section>

            <section className="bg-bookish-blue py-16 px-6">
                <h2 className="font-display font-bold text-bookish-maroon text-3xl md:text-4xl text-center mb-10">
                    Mengapa Kami?
                </h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reasons.map((r) => (
                        <div key={r.title} className="bg-white rounded-2xl p-6">
                            <h3 className="font-display font-semibold text-bookish-maroon text-lg mb-4">
                                {r.title}
                            </h3>
                            <p className="text-bookish-maroon/80 text-sm">{r.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 px-6">
                <h2 className="font-display font-bold text-bookish-maroon text-3xl md:text-4xl text-center mb-10">
                    Buku Terbaru
                </h2>

                {featuredBooks.length > 0 ? (
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                        {featuredBooks.map((book) => (
                            <div key={book.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="aspect-square bg-bookish-blue/30">
                                    {book.cover_url && (
                                        <img
                                            src={book.cover_url}
                                            alt={book.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <div className="p-4">
                                    <p className="font-display font-semibold text-bookish-maroon text-sm">
                                        {book.title}
                                    </p>
                                    <p className="text-xs text-bookish-maroon/60 mt-1">{book.author}</p>
                                    <p className="text-sm text-bookish-maroon mt-2">Rp{book.price} | Stok: {book.stock}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-bookish-maroon/70">Belum ada buku.</p>
                )}

                <div className="text-center mt-10">
                    <Link
                        href="/catalog"
                        className="inline-block bg-bookish-maroon text-white font-display font-semibold px-8 py-3 rounded-full hover:brightness-110 transition"
                    >
                        Lihat Semua Buku
                    </Link>
                </div>
            </section>

            <section className="bg-bookish-pink-soft grid grid-cols-1 md:grid-cols-2">
                <img
                    src="/images/shelf-display.jpg"
                    alt="Rak Bookish"
                    className="w-full h-72 md:h-auto object-cover"
                />
                <div className="flex flex-col justify-center px-8 py-16">
                    <h2 className="font-display font-bold text-bookish-maroon text-3xl md:text-4xl mb-4">
                        Semangat Literasi adalah motivasi kami
                    </h2>
                    <p className="text-bookish-maroon/80 mb-8">
                        Kami percaya bahwa semua pecinta buku berhak mendapatkan akses ke literatur terbaik. Bookish hadir sebagai pusat buku paling lenngkap dan terjangkau. 
                    </p>
                </div>
            </section>
        </SiteLayout>
    );
}