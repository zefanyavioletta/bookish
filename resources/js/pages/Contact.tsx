import SiteLayout from '@/components/SiteLayout';

export default function Contact() {

    return (
        <SiteLayout>
            <section className="relative overflow-hidden">
                <img
                    src="/images/hero-books.jpg"
                    alt="Rak buku Bookish"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bookish-maroon/70" />

                <div className="relative px-6 md:px-16 py-20 md:py-28">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-6">
                                Kontak Kami
                            </h1>
                            <p className="text-white/90 max-w-md">
                                Kami dengan senang hati menjawab pertanyaan atau diskusi mengenai
                                ketersediaan buku, kerjasama, pembelian grosir, dan lain sebagainya.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 md:items-end md:text-right">
                            <div>
                                <h2 className="font-display font-bold text-white text-lg mb-2">Main office</h2>
                                <p className="text-white/90 text-sm">
                                    Jl. Jalan Raya, No. 123, Kota di Indonesia
                                    <br />
                                    +62 812 345 678
                                </p>
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-white text-lg mb-2">Email us</h2>
                                <p className="text-white/90 text-sm">bookish@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <span className="font-display font-bold text-white text-3xl block mt-16">
                        BOOKISH
                    </span>
                </div>
            </section>
        </SiteLayout>
    );
}