import { products, categories } from "@/lib/static-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
    const resolvedParams = await params;

    const category = categories.find(c => c.slug === resolvedParams.slug);
    if (!category) notFound();

    const categoryProducts = products.filter(p => p.categorySlug === resolvedParams.slug && p.archiveId === null);

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Return to Base
                </Link>

                <header className="mb-16 border-b border-white/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">{category.name}</h1>
                        <p className="text-gray-400 text-sm tracking-widest uppercase">Current Allocation</p>
                    </div>
                    <div className="text-sm font-mono text-gray-500">{categoryProducts.length} Items</div>
                </header>

                {categoryProducts.length === 0 ? (
                    <div className="py-24 text-center border border-white/10 bg-zinc-900">
                        <p className="text-gray-400 uppercase tracking-widest text-sm">No inventory currently available in this sector.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {categoryProducts.map((product) => (
                            <Link href={`/product/${product.slug}`} key={product.id} className="group">
                                <div className="aspect-[3/4] bg-zinc-900 mb-4 overflow-hidden relative border border-white/10 group-hover:border-white/50 transition-colors">
                                    <img src={product.image} alt={product.name} className="object-cover w-full h-full grayscale group-hover:scale-105 transition-transform duration-700" />
                                    {product.inventoryCount === 0 && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <span className="bg-black text-white px-4 py-2 uppercase tracking-widest text-[10px] font-bold">Sold Out</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-tight max-w-[150px] truncate">{product.name}</h3>
                                    </div>
                                    <p className="text-sm font-mono font-bold">${product.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
