import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Venue } from '../../../venue/venue.interface';
import { Specialist } from '../../../specialist/specialist.interface';
import { Service } from '../../../service/service.interface';
import { SERVICE_CATEGORY_LABELS, SERVICE_STATUS_LABELS } from '../../../service/service-relations';
import { VenueIconComponent } from '../../venue/venue-icon/venue-icon.component';
import { SpecialistIconComponent } from '../../specialist/specialist-icon/specialist-icon.component';

@Component({
	selector: 'app-service-view',
	standalone: true,
	imports: [CommonModule, VenueIconComponent, SpecialistIconComponent],
	templateUrl: './service-view.component.html',
	styleUrl: './service-view.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<Service>();
	readonly venue = input<Venue | null>(null);
	readonly specialist = input<Specialist | null>(null);

	readonly categoryLabels = SERVICE_CATEGORY_LABELS;
	readonly statusLabels = SERVICE_STATUS_LABELS;

	viewVenue(): void {
		const venue = this.venue();
		if (venue) this._router.navigate(['/venue', venue._id]);
	}

	viewSpecialist(): void {
		const specialist = this.specialist();
		if (specialist) this._router.navigate(['/specialist', specialist._id]);
	}
}
