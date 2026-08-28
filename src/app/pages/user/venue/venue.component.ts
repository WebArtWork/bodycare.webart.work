import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateService } from '@wawjs/ngx-translate';
import { VenueViewComponent } from '../../../components/venue/venue-view/venue-view.component';
import { Venue } from '../../../venue/venue.interface';
import { venues } from '../../../venue/venue.data';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [VenueViewComponent, CardModule, ButtonModule],
	templateUrl: './venue.component.html',
	styleUrl: './venue.component.scss',
})
export class VenueComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Venue | undefined>(() =>
		venues.find((item) => item._id === this._id()),
	);


	share(): void {
		const url = `${window.location.origin}/venue/${this._id()}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Посилання скопійовано')(),
			});
		});
	}
}
