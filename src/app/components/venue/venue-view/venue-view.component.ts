import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Venue } from '../../../venue/venue.interface';
import { Specialist } from '../../../specialist/specialist.interface';
import { specialists } from '../../../specialist/specialist.data';
import { Service } from '../../../service/service.interface';
import { services } from '../../../service/service.data';
import { SpecialistShortComponent } from '../../specialist/specialist-short/specialist-short.component';
import { ServiceShortComponent } from '../../service/service-short/service-short.component';

const _specialistById = new Map<string, Specialist>(specialists.map((a) => [a._id, a]));
const _serviceById = new Map<string, Service>(services.map((l) => [l._id, l]));

const DEFAULT_PHOTO = '/default-venue.png';

@Component({
	selector: 'app-venue-view',
	standalone: true,
	imports: [CommonModule, SpecialistShortComponent, ServiceShortComponent],
	templateUrl: './venue-view.component.html',
	styleUrl: './venue-view.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VenueViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<Venue>();

	readonly photo = computed(() => this.entity().logo || DEFAULT_PHOTO);

	readonly relatedSpecialists = computed<Specialist[]>(() =>
		this.entity().specialistIds.map((id) => _specialistById.get(id)).filter((a): a is Specialist => !!a),
	);

	readonly relatedServices = computed<Service[]>(() =>
		this.entity().serviceIds.map((id) => _serviceById.get(id)).filter((l): l is Service => !!l),
	);

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	viewSpecialist(specialist: Specialist): void {
		this._router.navigate(['/specialist', specialist._id]);
	}

	viewService(service: Service): void {
		this._router.navigate(['/service', service._id]);
	}
}
