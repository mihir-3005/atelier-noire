import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8">
				<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
					<div className="flex flex-col gap-4">
						<span className="text-xl font-black uppercase tracking-tighter">Atelier Noire</span>
						<p className="text-xs text-gray-500 max-w-xs">Contemporary monochrome & luxury streetwear engineered for the modern brutalist.</p>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-sm font-bold uppercase tracking-widest mb-2">Navigation</span>
						<Link href="/shop" className="text-sm text-gray-400 hover:text-white transition-colors">Shop All</Link>
						<Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link>
						<Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-sm font-bold uppercase tracking-widest mb-2">Policies</span>
						<Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Shipping & Returns</Link>
						<Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
						<Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-sm font-bold uppercase tracking-widest mb-2">Socials</span>
						<Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Instagram</Link>
						<Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Twitter (X)</Link>
					</div>
				</div>
				<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/10 pt-8">
					<p>© 2026 ATELIER NOIRE. ALL RIGHTS RESERVED.</p>
					<p>MOCKUP PORTFOLIO PROJECT</p>
				</div>
			</footer>
    )
}
