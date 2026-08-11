import SiteLayout from '@/components/SiteLayout';

export default function About() {
    return (
        <SiteLayout>
            <h1 className="text-3xl font-serif font-bold mb-6">Our Story</h1>
            <div className="prose max-w-none text-[#5a4f42] space-y-4">
                <p>
                    Bookish opened its doors with a simple idea: a neighborhood should
                    have a place where stories are shared, not just sold. Every shelf
                    here is curated with care, from quiet literary fiction to the book
                    you didn't know you needed.
                </p>
                <p>
                    We're independently run, community-first, and always up for a
                    recommendation. Stop by, stay a while, and let us help you find
                    your next favorite read.
                </p>
            </div>
        </SiteLayout>
    );
}