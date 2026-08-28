import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<ClientRecord>();
	readonly client = input<User | null>(null);
	readonly specialist = input<Specialist | null>(null);
	readonly venue = input<Venue | null>(null);
	readonly author = input<User | null>(null);
	readonly involvedUsers = input<User[]>([]);

	readonly typeLabels = RECORD_TYPE_LABELS;
	readonly statusLabels = RECORD_STATUS_LABELS;
	readonly visibilityLabels = RECORD_VISIBILITY_LABELS;

	viewClient(): void {
		const client = this.client();
		if (client) this._router.navigate(['/client', client._id]);
	}

	viewSpecialist(): void {
		const specialist = this.specialist();
		if (specialist) this._router.navigate(['/specialist', specialist._id]);
	}

	viewVenue(): void {
		const venue = this.venue();
		if (venue) this._router.navigate(['/venue', venue._id]);
	}

	viewUser(user: User): void {
		this._router.navigate(['/client', user._id]);
	}
}
