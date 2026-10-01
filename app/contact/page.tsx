export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-black uppercase tracking-tighter mb-12 border-b border-white/20 pb-8">Contact</h1>

                <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Name</label>
                            <input type="text" className="bg-transparent border border-white/20 p-4 text-sm focus:outline-none focus:border-white transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Order Number (Optional)</label>
                            <input type="text" className="bg-transparent border border-white/20 p-4 text-sm focus:outline-none focus:border-white transition-colors" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email</label>
                        <input type="email" className="bg-transparent border border-white/20 p-4 text-sm focus:outline-none focus:border-white transition-colors" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Message</label>
                        <textarea rows={6} className="bg-transparent border border-white/20 p-4 text-sm focus:outline-none focus:border-white transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" className="bg-white text-black px-8 py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-neutral-200 transition-colors self-start mt-4">
                        Send Transmission
                    </button>
                </form>
            </div>
        </main>
    );
}
