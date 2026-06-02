import { company } from './company';

const brand = company.brand;
const phone = company.phoneDisplay;

export const seoPages = {
	home: {
		title: `${brand} | Premium Jaggery Tea Premix Manufacturer Rajasthan`,
		description: `${brand} — FSSAI certified premium jaggery tea premix from Sojat, Rajasthan. Jaggery Cardamom, Rose Tea, Jaggery Basundi & more. Bulk supply for hotels, cafés & dealers. Call ${phone}. Pan-India delivery.`,
		keywords: [
			'Krushnai Amrutulya',
			'jaggery tea premix',
			'chai premix manufacturer Rajasthan',
			'instant tea premix India',
			'hotel tea supplier',
			'tea premix bulk order',
			'jaggery cardamom tea',
			'dealer tea premix',
			'Shree Krishna Enterprises Sojat',
			'FSSAI tea premix',
		].join(', '),
	},
	about: {
		title: `About ${brand} | Heritage Jaggery Tea Premix Brand India`,
		description: `Learn the story of ${brand} by ${company.name} — premium Rajasthani jaggery chai premix since 2023. FSSAI certified manufacturing in Sojat, Pali. Authentic taste, hygienic process, pan-India supply.`,
		keywords: [
			`about ${brand}`,
			'tea premix manufacturer Rajasthan',
			'jaggery chai brand India',
			'Shree Krishna Enterprises',
			'Sojat tea company',
			'FSSAI certified tea premix',
		].join(', '),
	},
	products: {
		title: `Tea Premix Products | ${brand} — Jaggery, Rose & Cardamom Blends`,
		description: `Shop ${brand} tea premix range: Jaggery Cardamom, Sugar Cardamom, Rose Tea & Jaggery Basundi. Instant preparation, authentic Rajasthani taste, bulk pricing for hotels, restaurants & distributors.`,
		keywords: [
			'tea premix products',
			'jaggery cardamom premix buy',
			'rose tea premix',
			'jaggery basundi tea',
			'bulk chai premix India',
			'instant tea mix wholesale',
		].join(', '),
	},
	contact: {
		title: `Contact ${brand} | Bulk Orders & Dealer Enquiries ${phone}`,
		description: `Contact ${brand} for bulk tea premix orders and dealer partnerships. ${company.name}, Sojat, Pali, Rajasthan. WhatsApp or call ${phone}. Mon–Sat 9 AM–6 PM IST.`,
		keywords: [
			`contact ${brand}`,
			'tea premix bulk order',
			'dealer enquiry tea premix',
			'chai premix quote Rajasthan',
			`tea premix WhatsApp ${phone}`,
		].join(', '),
	},
	notFound: {
		title: `Page Not Found | ${brand}`,
		description: `The page you requested could not be found. Browse ${brand} premium tea premix products or contact us for assistance.`,
		keywords: brand,
	},
} as const;

export function productSeo(name: string, description: string, slug: string, tagline: string) {
	const short =
		description.length > 155 ? `${description.slice(0, 152)}...` : description;
	const slugWords = slug.replace(/-/g, ' ');
	return {
		title: `${name} | ${brand} — Buy Bulk Tea Premix`,
		description: `${short} ${tagline}. FSSAI certified. Bulk orders for hotels & dealers. Enquire on ${phone}.`,
		keywords: [
			name,
			brand,
			'tea premix',
			slugWords,
			'jaggery chai premix',
			'bulk tea premix India',
			'hotel chai supplier',
		].join(', '),
	};
}
