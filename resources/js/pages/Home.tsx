import SiteLayout from '@/components/SiteLayout';
import { Link } from '@inertiajs/react';

type Book = { title: string; author: string; genre: string; year: number | null; cover: string | null };

const reasons = [
    {
        title: 'Koleksi buku sangat lengkap',
        body: 'Buku-buku berbagai genre buatan anak bangsa maupun buku-buku impor.',
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
            <section className="relative overflow-hidden">
                <img
                    src="/images/hero-books.jpg"
                    alt="Rak buku Bookish"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bookish-maroon/70" />

                <div className="relative px-6 py-24 md:py-32 text-center">
                    <h1 className="font-display font-bold text-white text-6xl sm:text-7xl md:text-8xl leading-none tracking-tight">
                        BOOKISH
                    </h1>
                    <p className="font-display font-semibold text-bookish-pink-soft text-2xl md:text-3xl mt-6">
                        Pusat Buku Paling Eksish!
                    </p>
                    <p className="text-white/90 mt-6 max-w-md mx-auto">
                        Menjual berbagai genre buku dengan harga terjangkau
                    </p>
                    <Link
                        href="/catalog"
                        className="inline-block mt-10 bg-bookish-pink-soft text-bookish-maroon font-display font-semibold px-8 py-3 rounded-full hover:brightness-95 transition"
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
                        Kami percaya bahwa semua orang berhak mendapatkan akses literatur terbaik
                        harga terjangkau. Bookish hadir sebagai pusat buku untuk semua kalangan.
                    </p>
                    <span className="font-display font-bold text-bookish-maroon text-2xl">
                        BOOKISH
                    </span>
                </div>
            </section>

        </SiteLayout>
    );
}