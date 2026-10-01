"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { products, categories, testimonials, archivedCollections } from "@/lib/static-data";

export default function Home() {
	const popularProducts = products.filter(p => p.isPopular);

	return (
		<main className="w-full flex flex-col items-center bg-black text-white selection:bg-white selection:text-black">

			{/* 1. Hero Drop Section */}
			<section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
				<div className="absolute inset-0 z-0">
					<img
						src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2009&auto=format&fit=crop"
						alt="Collection Drop 01"
						className="w-full h-full object-cover filter grayscale opacity-40"
					/>
				</div>

				<div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center md:items-start text-center md:text-left mt-20">
					<div className="bg-white text-black px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
						Drop 001: Live
					</div>

					<h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-6">
						The <br /> Heavyweight <br /> Collection
					</h1>

					<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12">
						<div className="flex flex-col">
							<span className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Closes In</span>
							<CountdownTimer initialHours={48} />
						</div>

						<p className="max-w-xs text-sm text-white/70 leading-relaxed hidden md:block">
							Engineered from 400gsm French Terry. Boxy silhouette, dropped shoulders, structured drape. Limited allocation available.
						</p>
					</div>

					<Link href="/shop" className="group flex items-center gap-4 bg-white text-black px-8 py-5 mb-25 uppercase tracking-[0.2em] text-sm font-bold hover:bg-neutral-200 transition-colors">
						Enter Store <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>

				{/* Marquee ticker at bottom of hero - Updated for high visibility */}
				<div className="absolute bottom-0 w-full overflow-hidden border-t border-white/30 bg-black/90 backdrop-blur-md py-4 z-20">
					<div className="whitespace-nowrap flex gap-10 animate-[marquee_20s_linear_infinite] font-mono text-sm tracking-widest text-white font-bold">
						<span>// STRICTLY LIMITED QUANTITIES</span>
						<span>// NO RESTOCKS</span>
						<span>// WORLDWIDE SHIPPING</span>
						<span>// ALL SALES FINAL</span>
						<span>// ATELIER NOIRE SS24</span>
						<span>// STRICTLY LIMITED QUANTITIES</span>
						<span>// NO RESTOCKS</span>
						<span>// WORLDWIDE SHIPPING</span>
						<span>// ALL SALES FINAL</span>
						<span>// ATELIER NOIRE SS24</span>
					</div>
				</div>
			</section>

			{/* 2. Most Popular Products */}
			<section className="w-full max-w-7xl mx-auto py-24 px-6">
				<div className="flex justify-between items-end mb-12 border-b border-white/20 pb-4">
					<h2 className="text-3xl font-black uppercase tracking-tight">High Demand</h2>
					<Link href="/shop" className="text-sm font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">View All</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{popularProducts.map((product) => (
						<Link href={`/product/${product.slug}`} key={product.id} className="group">
							<div className="aspect-[4/5] bg-zinc-900 mb-6 overflow-hidden relative">
								<img src={product.image} alt={product.name} className="object-cover w-full h-full grayscale group-hover:scale-105 transition-transform duration-700" />
							</div>
							<div className="flex justify-between items-start">
								<div>
									<h3 className="text-lg font-bold uppercase tracking-tight">{product.name}</h3>
									<p className="text-sm text-gray-500 mt-1">{product.variants.length} Sizes Available</p>
								</div>
								<p className="text-lg font-mono font-bold">${product.price}</p>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* 3. Categories */}
			<section className="w-full bg-zinc-900 py-24">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-black uppercase tracking-tight mb-12 border-b border-white/20 pb-4">Categories</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
						{categories.map((cat) => (
							<Link href={`/category/${cat.slug}`} key={cat.name} className="relative aspect-square group overflow-hidden border border-white/10 hover:border-white/50 transition-colors">
								<img src={cat.image} alt={cat.name} className="object-cover w-full h-full grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
								<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
									<span className="bg-black text-white px-4 py-2 uppercase tracking-widest font-bold text-[10px] md:text-xs border border-white/20">
										{cat.name}
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* 3.5 Archives */}
			<section className="w-full max-w-7xl mx-auto py-24 px-6">
				<div className="flex justify-between items-end mb-12 border-b border-white/20 pb-4">
					<h2 className="text-3xl font-black uppercase tracking-tight">The Archives</h2>
					<Link href="/archive" className="text-sm font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">
						Enter Archive
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{/* Showing a preview of the latest 2 archived collections */}
					{archivedCollections.slice(0, 2).map((collection) => (
						<Link href="/archive" key={collection.id} className="group relative w-full aspect-[16/9] overflow-hidden border border-white/10 block">
							<img
								src={collection.image}
								alt={collection.title}
								className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
							/>
							<div className="absolute inset-0 p-6 flex flex-col justify-end z-10 bg-gradient-to-t from-black/80 to-transparent">
								<span className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">{collection.season}</span>
								<h3 className="text-2xl font-black uppercase tracking-tight">{collection.title}</h3>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* 4. Testimonials */}
			<section className="w-full max-w-7xl mx-auto py-24 px-6">
				<h2 className="text-3xl font-black uppercase tracking-tight mb-12 border-b border-white/20 pb-4">Field Reports</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{testimonials.map((test, i) => (
						<div key={i} className="flex flex-col gap-6">
							<p className="text-lg font-serif italic text-gray-300">"{test.quote}"</p>
							<div className="flex items-center gap-4">
								<img
									src={test.image}
									alt={test.author}
									className="w-12 h-12 rounded-full object-cover grayscale border border-white/20"
								/>
								<p className="text-xs uppercase tracking-widest font-bold text-gray-500">— {test.author}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* 5. Newsletter */}
			<section className="w-full border-t border-white/20 py-24">
				<div className="max-w-xl mx-auto px-6 flex flex-col items-center text-center">
					<Mail className="w-8 h-8 mb-6 text-white/50" />
					<h2 className="text-2xl font-black uppercase tracking-tight mb-4">Join The Syndicate</h2>
					<p className="text-sm text-gray-400 mb-8">Early access to limited drops. No spam.</p>
					<form className="w-full flex" onSubmit={(e) => e.preventDefault()}>
						<input type="email" placeholder="EMAIL ADDRESS" className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors" />
						<button type="submit" className="bg-white text-black px-6 py-3 uppercase tracking-widest text-sm font-bold hover:bg-gray-200 transition-colors">Submit</button>
					</form>
				</div>
			</section>
		</main>
	);
}
