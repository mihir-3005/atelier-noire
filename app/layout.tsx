import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = localFont({
  src: '../public/fonts/JetBrains_Mono/static/JetBrainsMono-Regular.ttf', // Make sure this matches your exact file name and extension
  variable: '--font-jetbrains-mono', // Optional: if you use Tailwind CSS variables
  display: 'swap',
});

export const metadata: Metadata = {
	title: "ATELIER NOIRE | Heavyweight Cottons & Structured Tailoring",
	description: "High-end urban streetwear. Limited drops only.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-black text-white selection:bg-white selection:text-black flex flex-col min-h-screen`}>
				{/* We will add Navbar here next */}
				<Navbar />
				<div className="flex-grow flex flex-col">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
