import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Specialist } from '../../../specialist/specialist.interface';
import { Venue } from '../../../venue/venue.interface';
import { venues } from '../../../venue/venue.data';
import { Service } from '../../../service/service.interface';
import { services } from '../../../service/service.data';
import { VenueIconComponent } from '../../venue/venue-icon/venue-icon.component';
import { ServiceShortComponent } from '../../service/service-short/service-short.component';

const _venueById = new Map<string, Venue>(venues.map((a) => [a._id, a]));
const _serviceById = new Map<string, Service>(services.map((l) => [l._id, l]));

@Component({
	selector: 'app-specialist-view',
	standalone: true,
	imports: [CommonModule, VenueIconComponent, ServiceShortComponent],
	templateUrl: './specialist-view.component.html',
	styleUrl: './specialist-view.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialistViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<Specialist>();

	readonly venue = computed<Venue | null>(
		() => (this.entity().venueId ? (_venueById.get(this.entity().venueId!) ?? null) : null),
	);

	readonly relatedServices = computed<Service[]>(() =>
		this.entity().serviceIds.map((id) => _serviceById.get(id)).filter((l): l is Service => !!l),
	);

	viewVenue(): void {
		const venue = this.venue();
		if (venue) {
			this._router.navigate(['/venue', venue._id]);
		}
	}

	viewService(service: Service): void {
		this._router.navigate(['/service', service._id]);
	}
}
