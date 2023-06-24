export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface C_relatedFAQs {
	question?: string,
	answer?: string,
}

export interface C_featuredProducts {
	name?: string,
	description?: string,
	logo?: ComplexImage,
}

export default interface Home {
	logo: ComplexImage,
	c_tagline: string,
	name: string,
	c_mainCTA: string,
	c_secondaryCTA: string,
	slug: string,
	c_relatedFAQs: C_relatedFAQs[],
	c_featuredProducts: C_featuredProducts[],
}
