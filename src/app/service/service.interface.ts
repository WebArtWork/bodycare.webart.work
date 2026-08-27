export type ServiceCategory = 'hair' | 'nails' | 'fitness' | 'skin' | 'massage';

export type ServiceStatus =
	| 'draft'
	| 'pending-review'
	| 'active'
	| 'paused'
	| 'rejected'
	| 'archived';

export type BookingType = 'single' | 'package';

export interface Service {
	_id: string;
	title: string;
	description: string;
	category: ServiceCategory;
	bookingType: BookingType;
	durationMinutes: number;
	price: number;
	currency: string;
	specialistId: string | null;
	venueId: string | null;
	photos: string[];
	creatorUserId: string;
	publicationDate: string;
	expirationDate: string | null;
	status: ServiceStatus;
	sourceVerified: boolean;
}
