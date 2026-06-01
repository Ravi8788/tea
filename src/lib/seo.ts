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
		image: absoluteUrl('/og-image.jpg'),
		description:
			'Premium jaggery tea premix manufacturer from Rajasthan, India. FSSAI certified blends for hotels, restaurants, cafés and retail.',
		email: company.email,
		telephone: company.phoneDisplay,
		foundingDate: '2023',
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
		sameAs: [company.whatsappUrl],
	};
}

export function localBusinessSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'FoodEstablishment',
		'@id': `${SITE}/#localbusiness`,
		name: company.brand,
		legalName: company.name,
		url: `${SITE}/`,
		image: absoluteUrl('/og-image.jpg'),
		logo: absoluteUrl(company.logoPath),
		description: 'Manufacturer of premium jaggery tea premix in Sojat, Rajasthan.',
		telephone: company.phoneDisplay,
		email: company.email,
		priceRange: '₹₹',
		servesCuisine: 'Indian Tea',
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
	};
}

export function webSiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${SITE}/#website`,
		name: company.brand,
		url: `${SITE}/`,
		description: 'Official website of Krushnai Amrutulya — premium jaggery tea premix from Rajasthan.',
		publisher: { '@id': `${SITE}/#organization` },
		inLanguage: 'en-IN',
	};
}

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
		name: product.name,
		description: product.description,
		image: absoluteUrl(product.image),
		brand: {
			'@type': 'Brand',
			name: company.brand,
		},
		manufacturer: {
			'@type': 'Organization',
			name: company.name,
		},
		category: 'Tea Premix',
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
		},
		additionalProperty: product.highlights.map((highlight) => ({
			'@type': 'PropertyValue',
			name: 'Feature',
			value: highlight,
		})),
	};
}

export function itemListSchema(products: Product[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: `${company.brand} Product Collection`,
		itemListElement: products.map((product, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			url: absoluteUrl(`/products/${product.slug}/`),
			name: product.name,
		})),
	};
}

export function contactPageSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		name: `Contact ${company.brand}`,
		url: absoluteUrl('/contact/'),
		description: 'Contact Krushnai Amrutulya for bulk orders, dealer enquiries and product information.',
		mainEntity: {
			'@type': 'Organization',
			name: company.name,
			telephone: company.phoneDisplay,
			email: company.email,
			address: companyAddressSingleLine,
			url: companyTelUrl,
		},
	};
}

export function aboutPageSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		name: `About ${company.brand}`,
		url: absoluteUrl('/about/'),
		description:
			'Learn about Krushnai Amrutulya — premium tea premix brand founded by Vinod Parihar in Rajasthan, 2023.',
		mainEntity: {
			'@type': 'Person',
			name: 'Vinod Parihar',
			jobTitle: 'Founder & Managing Director',
			worksFor: {
				'@type': 'Organization',
				name: company.name,
			},
		},
	};
}

export function combineSchemas(...schemas: Record<string, unknown>[]) {
	return {
		'@context': 'https://schema.org',
		'@graph': schemas,
	};
}
