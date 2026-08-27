import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { VenueFormComponent } from '../../../components/venue/venue-form/venue-form.component';
import { SpecialistFormComponent } from '../../../components/specialist/specialist-form/specialist-form.component';
import { ServiceFormComponent } from '../../../components/service/service-form/service-form.component';
import { RecordFormComponent } from '../../../components/record/record-form/record-form.component';
import { RequestFormComponent } from '../../../components/request/request-form/request-form.component';

type EntityType = 'service' | 'record' | 'venue' | 'specialist' | 'request';

interface EntityOption {
	label: string;
	value: EntityType;
}

@Component({
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		SelectButtonModule,
		ServiceFormComponent,
		RecordFormComponent,
		VenueFormComponent,
		SpecialistFormComponent,
		RequestFormComponent,
	],
	templateUrl: './editor.component.html',
	styleUrl: './editor.component.scss',
})
export class EditorComponent {
	private readonly _messageService = inject(MessageService);

	readonly options: EntityOption[] = [
		{ label: 'Послуга', value: 'service' },
		{ label: 'Запис історії', value: 'record' },
		{ label: 'Заклад', value: 'venue' },
		{ label: 'Спеціаліст', value: 'specialist' },
		{ label: 'Запит', value: 'request' },
	];

	readonly selectedType = signal<EntityType>('service');

	private readonly _serviceForm = viewChild(ServiceFormComponent);
	private readonly _recordForm = viewChild(RecordFormComponent);
	private readonly _venueForm = viewChild(VenueFormComponent);
	private readonly _specialistForm = viewChild(SpecialistFormComponent);
	private readonly _requestForm = viewChild(RequestFormComponent);

	private readonly _activeForm = computed(() => {
		switch (this.selectedType()) {
			case 'service':
				return this._serviceForm()?.form;
			case 'record':
				return this._recordForm()?.form;
			case 'venue':
				return this._venueForm()?.form;
			case 'specialist':
				return this._specialistForm()?.form;
			case 'request':
				return this._requestForm()?.form;
			default:
				return undefined;
		}
	});

	wValidate(): void {
		const form = this._activeForm();
		if (!form) {
			return;
		}

		form.markAllAsTouched();
		form.updateValueAndValidity();

		if (form.valid) {
			this._messageService.add({
				severity: 'success',
				summary: 'Форма валідна',
				detail: 'Дані пройшли валідацію. Це демо-режим — нічого не збережено.',
			});
		} else {
			this._messageService.add({
				severity: 'error',
				summary: 'Форма містить помилки',
				detail: 'Перевірте позначені поля та спробуйте ще раз.',
			});
		}
	}
}
