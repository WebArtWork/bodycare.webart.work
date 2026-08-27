export interface Specialist {
	_id: string;
	userId: string;
	venueId: string | null;
	displayName: string;
	photo: string;
	bio: string;
	country: string;
	city: string;
	serviceAreas: string[];
	specialties: string[];
	certifications: string[];
	yearsExperience: number;
	serviceIds: string[];
	portfolioRecordIds: string[];
	contactPhone: string;
	contactEmail: string;
	averageRating: number;
	reviewCount: number;
}
