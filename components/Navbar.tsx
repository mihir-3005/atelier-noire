"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, Search, X } from "lucide-react";
import { categories } from "@/lib/static-data";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close menu automatically on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent body scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 uppercase text-xs tracking-[0.15em] font-medium text-white">
                <div className="w-full px-6 py-4 flex items-center justify-between">

                    {/* Left: Mobile Menu & Search */}
                    <div className="flex items-center gap-6 w-1/3">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="hover:opacity-70 transition-opacity"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <button className="hidden md:block hover:opacity-70 transition-opacity">
                            <Search className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Center: Brand Logo */}
                    <Link href="/" className="w-1/3 flex justify-center">
                        <span className="text-xl md:text-2xl font-black tracking-[0.3em]">ATELIER NOIRE</span>
                    </Link>

                    {/* Right: Navigation & Cart */}
                    <div className="flex items-center justify-end gap-8 w-1/3">
                        <div className="hidden lg:flex gap-8">
                            <Link href="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
                            <Link href="/archive" className="hover:opacity-70 transition-opacity text-white/50">Archive</Link>
                        </div>

                        <Link href="/cart" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="font-mono bg-white text-black px-1.5 py-0.5 text-[10px] font-bold">0</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black z-[60] text-white flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {/* Menu Header (Matches Navbar layout) */}
                <div className="w-full px-6 py-4 flex items-center justify-between border-b border-white/10 uppercase text-xs tracking-[0.15em] font-medium">
                    <span className="text-white/50">Index</span>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                        Close <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto px-6 py-12 flex flex-col lg:flex-row gap-16 lg:gap-32 max-w-7xl mx-auto w-full">

                    {/* Primary Links */}
                    <div className="flex flex-col gap-6">
                        <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold mb-4">Directory</span>
                        <Link href="/" className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors">Home</Link>
                        <Link href="/shop" className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors">Shop All</Link>
                        <Link href="/archive" className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors">The Archives</Link>
                        <Link href="/about" className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors">About Us</Link>
                        <Link href="/contact" className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors">Contact</Link>
                    </div>

                    {/* Dynamic Categories */}
                    <div className="flex flex-col gap-6 mt-2 lg:mt-0">
                        <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold mb-4">Sectors</span>
                        {categories.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/category/${cat.slug}`}
                                className="text-xl md:text-2xl font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>

                    {/* Client Services & Support */}
                    <div className="flex flex-col gap-12 mt-2 lg:mt-0">
                        <div className="flex flex-col gap-4">
                            <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold mb-2">Client Services</span>
                            <Link href="/cart" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">View Cart</Link>
                            <Link href="#" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Shipping & Returns</Link>
                            <Link href="#" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Terms of Service</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold mb-2">Network</span>
                            <a href="#" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Instagram</a>
                            <a href="#" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Twitter (X)</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
