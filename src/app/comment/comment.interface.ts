export type CommentEntityType = 'service' | 'venue' | 'specialist' | 'user';

export type CommentModerationStatus = 'pending' | 'approved' | 'rejected' | 'flagged';

export type VerifiedReviewerStatus = 'verified-client' | 'verified-attendee' | null;

export interface EntityComment {
	_id: string;
	entityType: CommentEntityType;
	entityId: string;
	authorUserId: string;
	rating: number | null;
	text: string;
	verifiedReviewerStatus: VerifiedReviewerStatus;
	helpfulVotes: number;
	moderationStatus: CommentModerationStatus;
	date: string;
}
