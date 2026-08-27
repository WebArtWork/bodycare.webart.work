export type VenueType = 'gym' | 'salon' | 'spa' | 'barbershop' | 'studio';

export interface VenueContact {
	phone: string;
	email: string;
	website: string;
	address: string;
}

export interface VenueCoordinates {
	lat: number;
	lng: number;
}

export interface Venue {
	_id: string;
	name: string;
	description: string;
	logo: string;
	country: string;
	city: string;
	foundedYear: number;
	venueType: VenueType;
	specialistIds: string[];
	serviceIds: string[];
	contact: VenueContact;
	coordinates: VenueCoordinates | null;
	averageRating: number;
	reviewCount: number;
}
