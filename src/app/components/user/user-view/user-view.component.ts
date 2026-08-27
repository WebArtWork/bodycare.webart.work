import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../user/user.interface';
import { Specialist } from '../../../specialist/specialist.interface';
import { specialists } from '../../../specialist/specialist.data';
import { Venue } from '../../../venue/venue.interface';
import { venues } from '../../../venue/venue.data';
import { ClientRecord } from '../../../record/record.interface';
import { records } from '../../../record/record.data';
import { Service } from '../../../service/service.interface';
import { services } from '../../../service/service.data';
import { SpecialistIconComponent } from '../../specialist/specialist-icon/specialist-icon.component';
import { VenueIconComponent } from '../../venue/venue-icon/venue-icon.component';
import { RecordShortComponent } from '../../record/record-short/record-short.component';
import { ServiceShortComponent } from '../../service/service-short/service-short.component';

const _specialistById = new Map<string, Specialist>(specialists.map((a) => [a._id, a]));
const _venueById = new Map<string, Venue>(venues.map((a) => [a._id, a]));
const _recordById = new Map<string, ClientRecord>(records.map((r) => [r._id, r]));
const _serviceById = new Map<string, Service>(services.map((l) => [l._id, l]));

@Component({
	selector: 'app-user-view',
	standalone: true,
	imports: [
		CommonModule,
		SpecialistIconComponent,
		VenueIconComponent,
		RecordShortComponent,
		ServiceShortComponent,
	],
	templateUrl: './user-view.component.html',
	styleUrl: './user-view.component.scss',
})
export class UserViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: User;

	readonly specialist = computed<Specialist | null>(
		() => (this.entity.specialistId ? (_specialistById.get(this.entity.specialistId) ?? null) : null),
	);

	readonly venue = computed<Venue | null>(
		() => (this.entity.venueId ? (_venueById.get(this.entity.venueId) ?? null) : null),
	);

	readonly passportRecords = computed<ClientRecord[]>(() =>
		this.entity.recordIds.map((id) => _recordById.get(id)).filter((r): r is ClientRecord => !!r),
	);

	readonly relatedServices = computed<Service[]>(() =>
		[] as Service[],
	);

	viewSpecialist(): void {
		const specialist = this.specialist();
		if (specialist) {
			this._router.navigate(['/specialist', specialist._id]);
		}
	}

	viewVenue(): void {
		const venue = this.venue();
		if (venue) {
			this._router.navigate(['/venue', venue._id]);
		}
	}

	viewRecord(record: ClientRecord): void {
		this._router.navigate(['/records', record._id]);
	}

	viewService(service: Service): void {
		this._router.navigate(['/service', service._id]);
	}
}
