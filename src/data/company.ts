export const company = {
	name: 'Shree Krishna Enterprises',
	brand: 'Krushnai Amrutulya',
	siteUrl: 'https://krushnaiamrutulya.com',
	fssaiLicense: '12225036000072',
	/** Replace with real 10-digit mobile (no +91 prefix in value) before launch */
	phone: '9876543210',
	phoneDisplay: '+91 98765 43210',
	email: 'info@krushnaiamrutulya.com',
	/** Replace XXXXXXXXXX with real number before launch — e.g. 919876543210 */
	whatsappUrl: 'https://wa.me/91XXXXXXXXXX',
	/** Create a free form at https://formspree.io and paste your form ID here */
	contactFormAction: 'https://formspree.io/f/xplaceholder',
	logoPath: '/images/logo.png',
	logoHeaderPath: '/images/logo-header.png',
	productImageFallbackBg: 'transparent',
	designerCredit: 'Impulse Macro Innovation Pvt Ltd',
	address: {
		line1: 'Ward No. 29, Ganga Petrol Pump Ke Piche',
		line2: 'Basni Road, Sojat',
		city: 'Sojat',
		district: 'Pali',
		state: 'Rajasthan',
		pincode: '306104',
		country: 'India',
	},
} as const;

export const companyAddressFormatted = [
	company.address.line1,
	company.address.line2,
	`${company.address.city}, ${company.address.district}`,
	`${company.address.state} – ${company.address.pincode}`,
].join('\n');

export const companyAddressSingleLine =
	`${company.address.line1}, ${company.address.line2}, ${company.address.city}, ${company.address.district}, ${company.address.state} – ${company.address.pincode}`;

export const mapsEmbedUrl =
	'https://maps.google.com/maps?q=Sojat,Pali,Rajasthan+306104&output=embed&z=14';

export const companyTelUrl = `tel:+91${company.phone}`;
