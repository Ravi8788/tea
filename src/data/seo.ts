export const seoPages = {
	home: {
		title: 'Krushnai Amrutulya | Premium Jaggery Tea Premix from Rajasthan',
		description:
			'Krushnai Amrutulya — FSSAI certified premium jaggery tea premix from Sojat, Rajasthan. Jaggery Cardamom, Rose Tea & more. Bulk orders for hotels, cafés & retailers. Pan-India delivery.',
		keywords:
			'Krushnai Amrutulya, jaggery tea premix, chai premix Rajasthan, instant tea mix, hotel tea supplier India, jaggery cardamom tea, Shree Krishna Enterprises Sojat',
	},
	about: {
		title: 'About Us | Krushnai Amrutulya — Premium Jaggery Tea Premix Brand',
		description:
			'Krushnai Amrutulya by Shree Krishna Enterprises — founded 2023 in Rajasthan by Vinod Parihar. Authentic jaggery chai premix, organic spices, hygienic manufacturing & pan-India delivery.',
		keywords:
			'about Krushnai Amrutulya, Vinod Parihar, Shree Krishna Enterprises, tea premix manufacturer Rajasthan, FSSAI tea brand Sojat',
	},
	products: {
		title: 'Products | Krushnai Amrutulya Tea Premix Collection — Jaggery & Cardamom Blends',
		description:
			'Explore 4 premium tea premixes — Jaggery Cardamom, Sugar Cardamom, Rose Tea & Jaggery Basundi. Instant preparation, authentic Rajasthani taste, bulk pricing for B2B.',
		keywords:
			'tea premix products, jaggery cardamom premix, rose tea premix, jaggery basundi tea, bulk chai premix India',
	},
	contact: {
		title: 'Contact | Krushnai Amrutulya — Bulk Orders & Dealer Enquiries',
		description:
			'Contact Krushnai Amrutulya for bulk tea premix orders, dealer partnerships & product enquiries. Shree Krishna Enterprises, Sojat, Pali, Rajasthan. Response within 24 hours.',
		keywords:
			'contact Krushnai Amrutulya, tea premix bulk order, dealer enquiry Rajasthan, chai premix quote India',
	},
	notFound: {
		title: 'Page Not Found | Krushnai Amrutulya',
		description: 'The page you requested could not be found on Krushnai Amrutulya website.',
		keywords: 'Krushnai Amrutulya',
	},
} as const;

export function productSeo(name: string, description: string, slug: string) {
	const short = description.length > 155 ? `${description.slice(0, 152)}...` : description;
	return {
		title: `${name} | Buy Online — Krushnai Amrutulya`,
		description: short,
		keywords: `${name}, Krushnai Amrutulya, tea premix, ${slug.replace(/-/g, ' ')}, jaggery chai India`,
	};
}
