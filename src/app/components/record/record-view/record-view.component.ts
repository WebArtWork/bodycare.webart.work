import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ClientRecord } from '../../../record/record.interface';
import {
	RECORD_STATUS_LABELS,
	RECORD_TYPE_LABELS,
	RECORD_VISIBILITY_LABELS,
} from '../../../record/record-labels';
import { User } from '../../../user/user.interface';
import { Specialist } from '../../../specialist/specialist.interface';
import { Venue } from '../../../venue/venue.interface';
import { UserIconComponent } from '../../user/user-icon/user-icon.component';

@Component({
	selector: 'app-record-view',
	standalone: true,
	imports: [CommonModule, UserIconComponent],
	templateUrl: './record-view.component.html',
	styleUrl: './record-view.component.scss',
})
export class RecordViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: ClientRecord;
	@Input() client?: User | null;
	@Input() specialist?: Specialist | null;
	@Input() venue?: Venue | null;
	@Input() author?: User | null;
	@Input() involvedUsers: User[] = [];

	readonly typeLabels = RECORD_TYPE_LABELS;
	readonly statusLabels = RECORD_STATUS_LABELS;
	readonly visibilityLabels = RECORD_VISIBILITY_LABELS;

	viewClient(): void {
		if (this.client) this._router.navigate(['/client', this.client._id]);
	}

	viewSpecialist(): void {
		if (this.specialist) this._router.navigate(['/specialist', this.specialist._id]);
	}

	viewVenue(): void {
		if (this.venue) this._router.navigate(['/venue', this.venue._id]);
	}

	viewUser(user: User): void {
		this._router.navigate(['/client', user._id]);
	}
}
