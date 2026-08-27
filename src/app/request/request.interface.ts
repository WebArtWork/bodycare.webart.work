export type RequestTransactionType = 'book-service' | 'find-specialist' | 'consultation' | 'membership';

export type RequestVisibility = 'public' | 'private' | 'shared-with-selected-specialists' | 'shared-with-venues';

export interface RequestMapArea {
	lat: number;
	lng: number;
	radiusKm: number;
}

export interface ServiceRequest {
	_id: string;
	userId: string;
	transactionType: RequestTransactionType;
	serviceCategories: string[];
	country: string;
	region: string;
	city: string;
	mapArea: RequestMapArea;
	minPrice: number;
	maxPrice: number;
	currency: string;
	preferredDurationMinutes: number;
	sessionsRequirements: number;
	experienceRequirements: string;
	specialtyPreferences: string;
	requiredFeatures: string[];
	preferredDate: string;
	contactOptions: string[];
	expirationDate: string;
	visibility: RequestVisibility;
}
