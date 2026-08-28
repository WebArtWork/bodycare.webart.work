import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Venue } from '../../../venue/venue.interface';

const DEFAULT_PHOTO = '/default-venue.png';

@Component({
	selector: 'app-venue-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './venue-short.component.html',
	styleUrl: './venue-short.component.scss',
})
export class VenueShortComponent {
	@Input() entity!: Venue;

	get photo(): string {
		return this.entity.logo || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
