import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateService } from '@wawjs/ngx-translate';
import { SpecialistViewComponent } from '../../../components/specialist/specialist-view/specialist-view.component';
import { Specialist } from '../../../specialist/specialist.interface';
import { specialists } from '../../../specialist/specialist.data';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SpecialistViewComponent, CardModule, ButtonModule],
	templateUrl: './specialist.component.html',
	styleUrl: './specialist.component.scss',
})
export class SpecialistComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Specialist | undefined>(() =>
		specialists.find((item) => item._id === this._id()),
	);


	share(): void {
		const url = `${window.location.origin}/specialist/${this._id()}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Посилання скопійовано')(),
			});
		});
	}
}
