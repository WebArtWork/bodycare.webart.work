import { RecordStatus, RecordType, RecordVisibility } from './record.interface';

/**
 * Ukrainian labels for client-record enums, shared between the record
 * form and the record detail view so both stay in sync.
 */
export const RECORD_TYPE_OPTIONS: { value: RecordType; label: string }[] = [
	{ value: 'haircut', label: 'Стрижка' },
	{ value: 'coloring', label: 'Фарбування' },
	{ value: 'manicure', label: 'Манікюр' },
	{ value: 'pedicure', label: 'Педикюр' },
	{ value: 'workout-session', label: 'Тренування' },
	{ value: 'personal-training', label: 'Персональний тренінг' },
	{ value: 'massage', label: 'Масаж' },
	{ value: 'skin-treatment', label: 'Догляд за шкірою' },
	{ value: 'facial', label: 'Косметологічна процедура' },
	{ value: 'waxing', label: 'Депіляція' },
	{ value: 'measurement-checkin', label: 'Замір показників' },
	{ value: 'note', label: 'Примітка' },
];

export const RECORD_STATUS_OPTIONS: { value: RecordStatus; label: string }[] = [
	{ value: 'planned', label: 'Заплановано' },
	{ value: 'in-progress', label: 'В процесі' },
	{ value: 'completed', label: 'Завершено' },
	{ value: 'cancelled', label: 'Скасовано' },
];

export const RECORD_VISIBILITY_OPTIONS: { value: RecordVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'public-summary-private-details', label: 'Публічний огляд, приватні деталі' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-selected-users', label: 'Доступ вибраним користувачам' },
	{ value: 'shared-with-client', label: 'Доступ клієнту' },
	{ value: 'shared-with-specialist-venue', label: 'Доступ спеціалісту й закладу' },
];

export const RECORD_TYPE_LABELS: Record<RecordType, string> = Object.fromEntries(
	RECORD_TYPE_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RecordType, string>;

export const RECORD_STATUS_LABELS: Record<RecordStatus, string> = Object.fromEntries(
	RECORD_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RecordStatus, string>;

export const RECORD_VISIBILITY_LABELS: Record<RecordVisibility, string> = Object.fromEntries(
	RECORD_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RecordVisibility, string>;
