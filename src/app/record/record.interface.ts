export type RecordType =
	| 'haircut'
	| 'coloring'
	| 'manicure'
	| 'pedicure'
	| 'workout-session'
	| 'personal-training'
	| 'massage'
	| 'skin-treatment'
	| 'facial'
	| 'waxing'
	| 'measurement-checkin'
	| 'note';

export type RecordStatus = 'planned' | 'in-progress' | 'completed' | 'cancelled';

export type RecordVisibility =
	| 'public'
	| 'public-summary-private-details'
	| 'private'
	| 'shared-with-selected-users'
	| 'shared-with-client'
	| 'shared-with-specialist-venue';

export interface RecordAttachment {
	type: 'before-photo' | 'after-photo' | 'progress-photo' | 'photo' | 'video' | 'receipt' | 'document';
	url: string;
}

export interface ClientRecord {
	_id: string;
	clientId: string;
	recordType: RecordType;
	title: string;
	description: string;
	eventDate: string;
	creationDate: string;
	authorUserId: string;
	involvedUserIds: string[];
	specialistId: string | null;
	venueId: string | null;
	cost: number | null;
	currency: string | null;
	quantity: number | null;
	units: string | null;
	status: RecordStatus;
	attachments: RecordAttachment[];
	bodyArea: string | null;
	visibility: RecordVisibility;
	verified: boolean;
}
