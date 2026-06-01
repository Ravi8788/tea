export interface Product {
	slug: string;
	name: string;
	tagline: string;
	badge: string;
	badgeVariant: 'est-seller' | 'customer-favorite' | 'premium-blend' | 'signature';
	description: string;
	longDescription: string;
	highlights: string[];
	image: string;
	ingredients: string[];
	weight: string;
	preparation: string;
	idealFor: string[];
}

export const products: Product[] = [
	{
		slug: 'jaggery-cardamom',
		name: 'Jaggery Cardamom Tea Premix',
		tagline: 'Royal warmth in every sip',
		badge: 'EST SELLER',
		badgeVariant: 'est-seller',
		description:
			'Experience the authentic sweetness of natural jaggery blended perfectly with aromatic cardamom to create a rich and satisfying tea experience.',
		longDescription:
			'Our Best Seller — a timeless Rajasthani blend where hand-crushed cardamom meets pure organic jaggery. Every cup delivers the same rich, golden warmth your customers expect. FSSAI certified, ready in 60 seconds with just hot water or milk.',
		highlights: ['Natural Jaggery', 'Cardamom Aroma', 'Traditional Taste', 'Instant Preparation'],
		image: '/images/products/jaggery-cardamom.png',
		ingredients: ['Assam Tea Leaves', 'Organic Jaggery', 'Green Cardamom', 'Clove'],
		weight: '250g · 500g · 1kg',
		preparation: 'Add 1 tsp premix to cup. Pour hot water or milk. Stir well. Ready in 60 seconds.',
		idealFor: ['Hotels & Restaurants', 'Tea Stalls', 'Cafés', 'Home Use'],
	},
	{
		slug: 'sugar-cardamom',
		name: 'Sugar Cardamom Tea Premix',
		tagline: 'Classic elegance, refined',
		badge: 'CUSTOMER FAVORITE',
		badgeVariant: 'customer-favorite',
		description:
			'A classic tea blend combining premium tea ingredients and aromatic cardamom with balanced sweetness — the everyday indulgence for the discerning palate.',
		longDescription:
			'Customer Favorite — fine cane sugar and aromatic cardamom pods blended with premium tea leaves. A smoother, sweeter profile perfect for morning service and afternoon tea across hotels, cafés, and retail.',
		highlights: ['Smooth Taste', 'Premium Ingredients', 'Balanced Sweetness', 'Quick Preparation'],
		image: '/images/products/sugar-cardamom.png',
		ingredients: ['Assam Tea Leaves', 'Cane Sugar', 'Green Cardamom', 'Ginger'],
		weight: '250g · 500g · 1kg',
		preparation: 'Add 1 tsp premix to cup. Pour hot water or milk. Stir well. Ready in 60 seconds.',
		idealFor: ['Cafés', 'Offices', 'Retail Shops', 'Home Use'],
	},
	{
		slug: 'rose-tea',
		name: 'Rose Tea Premix',
		tagline: 'Floral grace from Pushkar',
		badge: 'PREMIUM BLEND',
		badgeVariant: 'premium-blend',
		description:
			'A luxurious fusion of tea and delicate rose notes offering a refreshing and elegant tea experience. Beauty and taste in every single cup.',
		longDescription:
			'Premium Blend — delicate rose petals blended with select tea leaves and rock sugar for a fragrant, luxurious cup. Perfect as a premium offering for hotels, gift shops, and specialty cafés.',
		highlights: ['Rose Aroma', 'Premium Blend', 'Elegant Flavor', 'Instant Convenience'],
		image: '/images/products/rose-tea.png',
		ingredients: ['Green Tea Leaves', 'Dried Rose Petals', 'Rock Sugar', 'Saffron Strands'],
		weight: '200g · 400g · 800g',
		preparation: 'Add 1 tsp premix to cup. Pour hot water. Steep 2 minutes. Stir and serve.',
		idealFor: ['Luxury Hotels', 'Gift Shops', 'Spa & Wellness', 'Special Occasions'],
	},
	{
		slug: 'jaggery-basundi',
		name: 'Jaggery Basundi Tea Premix',
		tagline: 'Dessert in a cup',
		badge: 'SIGNATURE PRODUCT',
		badgeVariant: 'signature',
		description:
			'A luxurious tea premix inspired by traditional Indian Basundi flavors combined with natural jaggery sweetness — an experience unlike any other.',
		longDescription:
			'Our Signature Product — inspired by traditional basundi dessert. Organic jaggery, saffron strands, and warm spices create an indulgent cup perfect for festive seasons and premium menus.',
		highlights: ['Creamy Notes', 'Jaggery Sweetness', 'Premium Experience', 'Traditional Inspiration'],
		image: '/images/products/jaggery-basundi.png',
		ingredients: ['Assam Tea Leaves', 'Organic Jaggery', 'Saffron', 'Nutmeg', 'Condensed Milk Powder'],
		weight: '250g · 500g · 1kg',
		preparation: 'Add 1.5 tsp premix to cup. Pour hot milk. Stir well. Serve warm.',
		idealFor: ['Restaurants', 'Sweet Shops', 'Festive Menus', 'Premium Retail'],
	},
];

export function getProduct(slug: string): Product | undefined {
	return products.find((p) => p.slug === slug);
}

/** SVG fallback while client PNGs are pending or if PNG fails to load */
export function productImageFallback(pngPath: string): string {
	return pngPath.replace(/\.png$/, '.svg');
}
