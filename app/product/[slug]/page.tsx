import { products } from "@/lib/static-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Pre-renders the static paths at build time (perfect for a database-free portfolio)
export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
    // Await the params to support both Next.js 14 and Next.js 15 standards
    const resolvedParams = await params;

    // Find the product based on the URL slug
    const product = products.find(p => p.slug === resolvedParams.slug);

    // If the product doesn't exist in our static data, show a 404 page
    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <Link href="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Shop
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Image Column */}
                    <div className="aspect-[3/4] bg-zinc-900 relative border border-white/10">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="object-cover w-full h-full grayscale"
                        />
                    </div>

                    {/* Details Column */}
                    <div className="flex flex-col justify-center">
                        {product.inventoryCount > 0 && product.inventoryCount <= 5 && (
                            <div className="inline-block bg-red-600 text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 self-start animate-pulse">
                                Low Stock: {product.inventoryCount} Remaining
                            </div>
                        )}

                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-mono font-bold mb-8">${product.price}</p>

                        <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/20 pb-8">
                            {product.description}
                        </p>

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs uppercase tracking-widest font-bold">Select Size</span>
                                <span className="text-xs text-gray-500 uppercase cursor-pointer hover:text-white underline decoration-dashed">Size Guide</span>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {product.variants.map((size) => (
                                    <button key={size} className="border border-white/20 py-3 text-sm font-mono hover:border-white transition-colors hover:bg-white hover:text-black">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-12 bg-zinc-900 p-4 border border-white/10">
                            <span className="block text-xs uppercase tracking-widest font-bold mb-2">Fit Guidance</span>
                            <p className="text-sm text-gray-400">{product.fitGuidance}</p>
                        </div>

                        <button
                            disabled={product.inventoryCount === 0}
                            className={`w-full py-5 uppercase tracking-[0.2em] text-sm font-bold transition-colors ${product.inventoryCount === 0
                                    ? "bg-zinc-800 text-gray-500 cursor-not-allowed"
                                    : "bg-white text-black hover:bg-neutral-200"
                                }`}
                        >
                            {product.inventoryCount === 0 ? "Out of Stock" : "Add to Cart"}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
