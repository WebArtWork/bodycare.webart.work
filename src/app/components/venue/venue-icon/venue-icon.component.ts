import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Venue } from '../../../venue/venue.interface';

@Component({
	selector: 'app-venue-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './venue-icon.component.html',
	styleUrl: './venue-icon.component.scss',
})
export class VenueIconComponent {
	@Input() entity!: Venue;
}
