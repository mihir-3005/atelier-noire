import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

export default function CartPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-white/20 pb-4">
                    <h1 className="text-3xl font-black uppercase tracking-tight">Shopping Cart</h1>
                </header>

                <div className="flex flex-col items-center justify-center py-24 bg-zinc-900 border border-white/10">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">Your cart is currently empty.</p>
                    <Link href="/shop" className="bg-white text-black px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        Return to Shop <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mock UI for when items are in cart to show your client the "Reservation" feature */}
                <div className="mt-12 p-6 border border-white/20 bg-black">
                    <div className="flex items-center gap-3 text-red-500 mb-2">
                        <Lock className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-widest font-bold">Inventory Locked</span>
                    </div>
                    <p className="text-xs text-gray-400">
                        Items in your cart are reserved for 05:00 minutes. Checkout now to guarantee your allocation.
                    </p>
                </div>
            </div>
        </main>
    );
}
