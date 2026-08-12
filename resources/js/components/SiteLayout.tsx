import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <header className="bg-bookish-maroon">
                <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
                    <Link href="/" className="font-display font-bold text-white text-3xl tracking-wide">
                        Bookish
                    </Link>
                    <div className="flex gap-6 text-md text-white/90 font-medium">
                        <Link href="/" className="hover:text-bookish-pink-soft transition">Beranda</Link>
                        <Link href="/catalog" className="hover:text-bookish-pink-soft transition">Katalog</Link>
                        <Link href="/contact" className="hover:text-bookish-pink-soft transition">Kontak</Link>
                    </div>
                </nav>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="bg-bookish-maroon text-white/70 text-center text-sm py-6">
                © {new Date().getFullYear()} Bookish. Semua hak dilindungi.
            </footer>
        </div>
    );
}