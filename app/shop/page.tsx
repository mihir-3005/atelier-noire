import Link from "next/link";
import { products } from "@/lib/static-data";

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 border-b border-white/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">All Products</h1>
                        <p className="text-gray-400 text-sm tracking-widest uppercase">Collection 001</p>
                    </div>
                    <div className="text-sm font-mono text-gray-500">{products.length} Items</div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <Link href={`/product/${product.slug}`} key={product.id} className="group">
                            <div className="aspect-[3/4] bg-zinc-900 mb-6 overflow-hidden relative border border-white/10 group-hover:border-white/50 transition-colors">
                                <img src={product.image} alt={product.name} className="object-cover w-full h-full grayscale group-hover:scale-105 transition-transform duration-700" />
                                {product.inventoryCount === 0 && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <span className="bg-black text-white px-4 py-2 uppercase tracking-widest text-xs font-bold">Sold Out</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold uppercase tracking-tight">{product.name}</h3>
                                </div>
                                <p className="text-lg font-mono font-bold">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
