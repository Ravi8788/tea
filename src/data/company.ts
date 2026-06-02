export const company = {
	name: 'Shree Krishna Enterprises',
	brand: 'Krushnai Amrutulya',
	siteUrl: 'https://krushnaiamrutulya.com',
	fssaiLicense: '12225036000072',
	phone: '8554857776',
	phoneDisplay: '+91 85548 57776',
	email: 'info@krushnaiamrutulya.com',
	whatsappUrl: 'https://wa.me/918554857776',
	logoPath: '/images/logo.png',
	logoHeaderPath: '/images/logo-header.png',
	productImageFallbackBg: 'transparent',
	designerCredit: 'Impulse Macro Innovation Pvt Ltd',
	address: {
		line1: 'Ward No. 29, Ganga Petrol Pump Ke Piche',
		line2: 'Basni Road',
		city: 'Sojat City',
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
	'https://maps.google.com/maps?q=Sojat+City,Pali,Rajasthan+306104&output=embed&z=14';

export const companyTelUrl = `tel:+91${company.phone}`;
