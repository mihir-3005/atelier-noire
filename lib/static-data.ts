export const categories = [
    { name: "Outerwear", slug: "outerwear", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop" },
    { name: "Bottoms", slug: "bottoms", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop" },
    { name: "Tops", slug: "tops", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop" },
    { name: "Accessories", slug: "accessories", image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800&auto=format&fit=crop" },
    { name: "Footwear", slug: "footwear", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?q=80&w=800&auto=format&fit=crop" }
];

export const archivedCollections = [
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

export const testimonials = [
    { quote: "The construction on the heavyweight hoodie is unmatched. It feels like armor.", author: "J.D., New York", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
    { quote: "Finally, a brand that understands proportions. The cargos drape perfectly.", author: "S.M., London", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" },
    { quote: "Fast shipping and incredible packaging. The aesthetic is perfectly executed.", author: "A.R., Tokyo", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" }
];

// Product Generation Logic (Creates exactly 50 products)
const adjectives = ["Heavyweight", "Structured", "Oversized", "Raw Edge", "Washed", "Distressed", "Minimalist", "Tailored", "Utility", "Monochrome"];
const nouns = ["Hoodie", "Cargo", "Tee", "Jacket", "Trousers", "Sweatshirt", "Coat", "Vest", "Denim", "Parka"];
const images = [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617265848332-90f7e1eb8e86?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop"
];

export const products = Array.from({ length: 50 }).map((_, index) => {
    const isArchive = index % 5 === 0; // Every 5th item is archived

    return {
        id: `p_${index + 1}`,
        slug: `product-${index + 1}`,
        name: `${adjectives[index % adjectives.length]} ${nouns[index % nouns.length]}`,
        price: 85 + (index * 5),
        image: images[index % images.length],
        description: "Contemporary monochrome & luxury streetwear engineered for the modern brutalist. Built to last.",
        inventoryCount: index % 8 === 0 ? 0 : (index % 6 === 0 ? 3 : 15), // Spreads out Sold Out and Low Stock statuses
        isPopular: index % 7 === 0, // Approx 7 popular items
        categorySlug: categories[index % categories.length].slug, // Evenly distributes across the 5 categories
        archiveId: isArchive ? (index % 2 === 0 ? "001" : "000") : null,
        fitGuidance: "Oversized fit. Size down for a standard silhouette.",
        variants: ["S", "M", "L", "XL"]
    };
});
