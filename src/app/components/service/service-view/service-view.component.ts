import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
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
})
export class ServiceViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Service;
	@Input() venue?: Venue | null;
	@Input() specialist?: Specialist | null;

	readonly categoryLabels = SERVICE_CATEGORY_LABELS;
	readonly statusLabels = SERVICE_STATUS_LABELS;

	viewVenue(): void {
		if (this.venue) this._router.navigate(['/venue', this.venue._id]);
	}

	viewSpecialist(): void {
		if (this.specialist) this._router.navigate(['/specialist', this.specialist._id]);
	}
}
