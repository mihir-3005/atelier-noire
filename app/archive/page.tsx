import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const archivedCollections = [
    {
        id: "001",
        title: "Collection 001: Brutalism",
        season: "FW25",
        image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2009&auto=format&fit=crop",
        status: "Archived"
    },
    {
        id: "000",
        title: "Collection 000: Genesis",
        season: "SS25",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
        status: "Archived"
    }
];

export default function ArchivePage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Return to Base
                </Link>

                <header className="mb-16 border-b border-white/20 pb-8">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">The Archives</h1>
                    <p className="text-gray-400 text-sm tracking-widest uppercase max-w-xl">
                        A permanent record of past operations. Garments featured in the archive are strictly limited and will not be restocked.
                    </p>
                </header>

                <div className="flex flex-col gap-24">
                    {archivedCollections.map((collection) => (
                        <div key={collection.id} className="group relative w-full h-[60vh] overflow-hidden border border-white/10">
                            <img
                                src={collection.image}
                                alt={collection.title}
                                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000"
                            />

                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <span className="bg-white text-black px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">
                                        {collection.season}
                                    </span>
                                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400 border border-white/20 px-3 py-1">
                                        {collection.status}
                                    </span>
                                </div>

                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
                                        {collection.title}
                                    </h2>
                                    <button className="text-sm font-bold uppercase tracking-widest border-b border-white hover:text-gray-400 hover:border-gray-400 transition-colors pb-1">
                                        View Lookbook
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
