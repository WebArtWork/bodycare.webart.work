import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { RecordViewComponent } from '../../../components/record/record-view/record-view.component';
import { ClientRecord } from '../../../record/record.interface';
import { records } from '../../../record/record.data';
import { User } from '../../../user/user.interface';
import { users } from '../../../user/user.data';
import { Specialist } from '../../../specialist/specialist.interface';
import { specialists } from '../../../specialist/specialist.data';
import { Venue } from '../../../venue/venue.interface';
import { venues } from '../../../venue/venue.data';

const _userById = new Map<string, User>(users.map((u) => [u._id, u]));
const _specialistById = new Map<string, Specialist>(specialists.map((s) => [s._id, s]));
const _venueById = new Map<string, Venue>(venues.map((v) => [v._id, v]));

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RecordViewComponent, CardModule, TranslateDirective],
	templateUrl: './records.component.html',
	styleUrl: './records.component.scss',
})
export class RecordsComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<ClientRecord | undefined>(() =>
		records.find((item) => item._id === this._id()),
	);

	readonly client = computed<User | null>(() => {
		const record = this.entity();
		return record ? (_userById.get(record.clientId) ?? null) : null;
	});

	readonly specialist = computed<Specialist | null>(() => {
		const record = this.entity();
		return record?.specialistId ? (_specialistById.get(record.specialistId) ?? null) : null;
	});

	readonly venue = computed<Venue | null>(() => {
		const record = this.entity();
		return record?.venueId ? (_venueById.get(record.venueId) ?? null) : null;
	});

	readonly author = computed<User | null>(() => {
		const record = this.entity();
		return record ? (_userById.get(record.authorUserId) ?? null) : null;
	});

	readonly involvedUsers = computed<User[]>(() => {
		const record = this.entity();
		if (!record) return [];
		return record.involvedUserIds
			.map((id) => _userById.get(id))
			.filter((u): u is User => !!u);
	});
}
