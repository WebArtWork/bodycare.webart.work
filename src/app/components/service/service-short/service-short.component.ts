import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { Service } from '../../../service/service.interface';
import { Venue } from '../../../venue/venue.interface';
import { Specialist } from '../../../specialist/specialist.interface';
import { VenueIconComponent } from '../../venue/venue-icon/venue-icon.component';
import { SpecialistIconComponent } from '../../specialist/specialist-icon/specialist-icon.component';

export type ServiceRelationType = 'specialist' | 'venue';

const DEFAULT_PHOTO = '/service-default.svg';

@Component({
	selector: 'app-service-short',
	standalone: true,
	imports: [CommonModule, VenueIconComponent, SpecialistIconComponent],
	templateUrl: './service-short.component.html',
	styleUrl: './service-short.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceShortComponent {
	readonly entity = input.required<Service>();
	readonly venue = input<Venue | null>(null);
	readonly specialist = input<Specialist | null>(null);

	/** Emitted instead of navigating directly, so the host page can stop the card's own click. */
	readonly relationClick = output<{ type: ServiceRelationType; id: string }>();

	readonly photo = computed(() => this.entity().photos[0] || DEFAULT_PHOTO);

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	onRelationClick(event: Event, type: ServiceRelationType, id: string): void {
		event.stopPropagation();
		this.relationClick.emit({ type, id });
	}
}
