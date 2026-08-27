export type UserRole = 'client' | 'specialist' | 'venue-rep';

export interface UserContact {
	email: string;
	phone: string;
}

export interface User {
	_id: string;
	name: string;
	photo: string;
	bio: string;
	country: string;
	city: string;
	interests: string[];
	preferredSpecialistIds: string[];
	roles: UserRole[];
	experienceYears: number;
	contact: UserContact;
	recordIds: string[];
	requestIds: string[];
	specialistId: string | null;
	venueId: string | null;
}
