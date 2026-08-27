import { Venue } from '../venue/venue.interface';
import { venues } from '../venue/venue.data';
import { Specialist } from '../specialist/specialist.interface';
import { specialists } from '../specialist/specialist.data';
import { Service, ServiceCategory, ServiceStatus } from './service.interface';


/**
 * Ukrainian labels for service enums, shared across pages/components that
 * render a service (kept in sync with the copy used on the explore page).
 */
export const SERVICE_CATEGORY_LABELS: Record<ServiceCategory, string> = {
	hair: 'Волосся',
	nails: 'Нігті',
	fitness: 'Фітнес',
	skin: 'Шкіра',
	massage: 'Масаж',
};

export const SERVICE_STATUS_LABELS: Record<ServiceStatus, string> = {
	draft: 'Чернетка',
	'pending-review': 'На розгляді',
	active: 'Активне',
	paused: 'Призупинено',
	rejected: 'Відхилено',
	archived: 'Архівоване',
};

/**
 * A service carries its own specialistId/venueId directly, so this simply
 * resolves them into the actual entities for cards/pages to show and link to.
 */
export interface ServiceRelations {
	venue: Venue | null;
	specialist: Specialist | null;
}

const _venueById = new Map<string, Venue>(venues.map((a) => [a._id, a]));
const _specialistById = new Map<string, Specialist>(specialists.map((a) => [a._id, a]));

export function venueForService(service: Service): Venue | null {
	return service.venueId ? (_venueById.get(service.venueId) ?? null) : null;
}

export function specialistForService(service: Service): Specialist | null {
	return service.specialistId ? (_specialistById.get(service.specialistId) ?? null) : null;
}

export function relationsForService(service: Service): ServiceRelations {
	return {
		venue: venueForService(service),
		specialist: specialistForService(service),
	};
}
