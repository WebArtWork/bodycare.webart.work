import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
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

@Component({
	selector: 'app-venue-view',
	standalone: true,
	imports: [CommonModule, SpecialistShortComponent, ServiceShortComponent],
	templateUrl: './venue-view.component.html',
	styleUrl: './venue-view.component.scss',
})
export class VenueViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Venue;

	readonly relatedSpecialists = computed<Specialist[]>(() =>
		this.entity.specialistIds.map((id) => _specialistById.get(id)).filter((a): a is Specialist => !!a),
	);

	readonly relatedServices = computed<Service[]>(() =>
		this.entity.serviceIds.map((id) => _serviceById.get(id)).filter((l): l is Service => !!l),
	);

	viewSpecialist(specialist: Specialist): void {
		this._router.navigate(['/specialist', specialist._id]);
	}

	viewService(service: Service): void {
		this._router.navigate(['/service', service._id]);
	}
}
