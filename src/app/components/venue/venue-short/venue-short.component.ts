import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Venue } from '../../../venue/venue.interface';

@Component({
	selector: 'app-venue-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './venue-short.component.html',
	styleUrl: './venue-short.component.scss',
})
export class VenueShortComponent {
	@Input() entity!: Venue;
}
