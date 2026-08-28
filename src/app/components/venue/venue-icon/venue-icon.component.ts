import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Venue } from '../../../venue/venue.interface';

const DEFAULT_PHOTO = '/default-venue.png';

@Component({
	selector: 'app-venue-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './venue-icon.component.html',
	styleUrl: './venue-icon.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VenueIconComponent {
	readonly entity = input.required<Venue>();

	readonly photo = computed(() => this.entity().logo || DEFAULT_PHOTO);

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
