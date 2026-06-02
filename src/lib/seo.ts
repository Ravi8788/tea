import { company, companyAddressSingleLine, companyTelUrl } from '../data/company';
import type { Product } from '../data/products';

const SITE = company.siteUrl.replace(/\/$/, '');

export function absoluteUrl(path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${SITE}${normalized}`;
}

export function pageUrl(pathname: string): string {
	const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
	if (path === '//') return `${SITE}/`;
	return absoluteUrl(path);
}

export const defaultKeywords = [
	'Krushnai Amrutulya',
	'jaggery tea premix',
	'tea premix Rajasthan',
	'Shree Krishna Enterprises',
	'jaggery cardamom tea',
	'instant chai premix',
	'hotel tea premix supplier',
	'FSSAI tea premix',
	'bulk tea premix India',
	'Sojat Pali Rajasthan tea',
	'tea premix dealer',
].join(', ');

export function organizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': `${SITE}/#organization`,
		name: company.brand,
		legalName: company.name,
		url: `${SITE}/`,
		logo: absoluteUrl(company.logoPath),
		image: [absoluteUrl('/og-image.jpg'), absoluteUrl(company.logoPath)],
		description:
			'Premium jaggery tea premix manufacturer from Sojat, Rajasthan, India. FSSAI certified blends for hotels, restaurants, cafés, distributors and retail.',
		email: company.email,
		telephone: company.phoneDisplay,
		foundingDate: '2023',
		knowsAbout: [
			'Jaggery tea premix',
			'Instant chai premix',
			'Bulk tea supply for hotels',
			'Rajasthani chai',
		],
		address: {
			'@type': 'PostalAddress',
			streetAddress: `${company.address.line1}, ${company.address.line2}`,
			addressLocality: company.address.city,
			addressRegion: company.address.state,
			postalCode: company.address.pincode,
			addressCountry: 'IN',
		},
		areaServed: {
			'@type': 'Country',
			name: 'India',
		},
		sameAs: [company.whatsappUrl, companyTelUrl],
	};
}

export function localBusinessSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `${SITE}/#localbusiness`,
		name: company.brand,
		legalName: company.name,
		url: `${SITE}/`,
		image: absoluteUrl('/og-image.jpg'),
		logo: absoluteUrl(company.logoPath),
		description:
			'Manufacturer and supplier of premium jaggery tea premix in Sojat, Pali, Rajasthan. Bulk orders and dealer partnerships across India.',
		telephone: company.phoneDisplay,
		email: company.email,
		priceRange: '₹₹',
		currenciesAccepted: 'INR',
		paymentAccepted: 'Cash, UPI, Bank Transfer',
		address: {
			'@type': 'PostalAddress',
			streetAddress: `${company.address.line1}, ${company.address.line2}`,
			addressLocality: company.address.city,
			addressRegion: company.address.state,
			postalCode: company.address.pincode,
			addressCountry: 'IN',
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 25.9234,
			longitude: 73.6667,
		},
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '09:00',
			closes: '18:00',
		},
		parentOrganization: { '@id': `${SITE}/#organization` },
	};
}

export function webSiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${SITE}/#website`,
		name: company.brand,
		url: `${SITE}/`,
		description: `Official website of ${company.brand} — premium jaggery tea premix from Rajasthan, India.`,
		publisher: { '@id': `${SITE}/#organization` },
		inLanguage: 'en-IN',
	};
}

export function homePageSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': `${SITE}/#webpage`,
		url: `${SITE}/`,
		name: `${company.brand} | Premium Jaggery Tea Premix`,
		description:
			'Premium FSSAI certified jaggery tea premix from Rajasthan. Bulk supply for hotels, cafés, restaurants and dealers across India.',
		isPartOf: { '@id': `${SITE}/#website` },
		about: { '@id': `${SITE}/#organization` },
		primaryImageOfPage: absoluteUrl('/og-image.jpg'),
		inLanguage: 'en-IN',
	};
}

export function heroVideoSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'VideoObject',
		name: `${company.brand} — Premium Tea Premix Advertisement`,
		description: `Promotional video for ${company.brand} jaggery tea premix products from Rajasthan.`,
		thumbnailUrl: absoluteUrl('/og-image.jpg'),
		contentUrl: absoluteUrl('/videos/advertisment.mp4'),
		uploadDate: '2023-01-01',
		inLanguage: 'en-IN',
		publisher: { '@id': `${SITE}/#organization` },
	};
}

export function faqSchema(
	items: { question: string; answer: string }[],
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}

export const homeFaqItems = [
	{
		question: 'What is Krushnai Amrutulya tea premix?',
		answer:
			'Krushnai Amrutulya is a premium FSSAI certified jaggery tea premix brand manufactured by Shree Krishna Enterprises in Sojat, Rajasthan. Our blends deliver authentic Rajasthani chai taste with instant preparation.',
	},
	{
		question: 'Do you supply tea premix in bulk for hotels and restaurants?',
		answer:
			'Yes. We supply bulk tea premix for hotels, restaurants, cafés, tea stalls, offices and distributors across India with consistent quality and reliable dispatch.',
	},
	{
		question: 'Which tea premix flavours are available?',
		answer:
			'Our range includes Jaggery Cardamom Tea Premix, Sugar Cardamom Tea Premix, Rose Tea Premix, and Jaggery Basundi Tea Premix.',
	},
	{
		question: 'How can I place a bulk order or become a dealer?',
		answer: `Contact us via WhatsApp or phone at ${company.phoneDisplay}. Our team responds on business days (Mon–Sat, 9 AM–6 PM IST) for bulk orders and dealer partnership enquiries.`,
	},
];

export function breadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path),
		})),
	};
}

export function productSchema(product: Product) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Product',
		'@id': `${SITE}/products/${product.slug}/#product`,
		name: product.name,
		description: product.longDescription || product.description,
		image: absoluteUrl(product.image),
		sku: product.slug,
		brand: {
			'@type': 'Brand',
			name: company.brand,
		},
		manufacturer: {
			'@type': 'Organization',
			name: company.name,
			url: `${SITE}/`,
		},
		category: 'Food & Beverage > Tea Premix',
		url: absoluteUrl(`/products/${product.slug}/`),
		offers: {
			'@type': 'Offer',
			availability: 'https://schema.org/InStock',
			priceCurrency: 'INR',
			url: absoluteUrl(`/products/${product.slug}/`),
			seller: {
				'@type': 'Organization',
				name: company.name,
			},
			areaServed: 'IN',
		},
		additionalProperty: [
			{ '@type': 'PropertyValue', name: 'FSSAI License', value: company.fssaiLicense },
			...product.highlights.map((highlight) => ({
				'@type': 'PropertyValue',
				name: 'Feature',
				value: highlight,
			})),
		],
	};
}

export function itemListSchema(products: Product[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: `${company.brand} Product Collection`,
		numberOfItems: products.length,
		itemListElement: products.map((product, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			url: absoluteUrl(`/products/${product.slug}/`),
			name: product.name,
			image: absoluteUrl(product.image),
		})),
	};
}

export function productsCollectionPageSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		'@id': `${SITE}/products/#collectionpage`,
		url: absoluteUrl('/products/'),
		name: `${company.brand} Tea Premix Products`,
		description:
			'Browse premium jaggery and cardamom tea premix products from Krushnai Amrutulya.',
		isPartOf: { '@id': `${SITE}/#website` },
		inLanguage: 'en-IN',
	};
}

export function contactPageSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		'@id': `${SITE}/contact/#contactpage`,
		name: `Contact ${company.brand}`,
		url: absoluteUrl('/contact/'),
		description:
			'Contact Krushnai Amrutulya for bulk tea premix orders, dealer partnerships and product enquiries.',
		mainEntity: { '@id': `${SITE}/#localbusiness` },
	};
}

export function aboutPageSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		'@id': `${SITE}/about/#aboutpage`,
		name: `About ${company.brand}`,
		url: absoluteUrl('/about/'),
		description:
			'Learn about Krushnai Amrutulya — premium tea premix brand from Rajasthan, established 2023.',
		mainEntity: { '@id': `${SITE}/#organization` },
	};
}

export function combineSchemas(...schemas: Record<string, unknown>[]) {
	return {
		'@context': 'https://schema.org',
		'@graph': schemas.map((schema) => {
			const { '@context': _ctx, ...rest } = schema;
			return rest;
		}),
	};
}
