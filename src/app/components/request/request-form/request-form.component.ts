import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ServiceRequest } from '../../../request/request.interface';

const TRANSACTION_TYPE_OPTIONS: { value: ServiceRequest['transactionType']; label: string }[] = [
	{ value: 'book-service', label: 'Запис на послугу' },
	{ value: 'find-specialist', label: 'Пошук спеціаліста' },
	{ value: 'consultation', label: 'Консультація' },
	{ value: 'membership', label: 'Абонемент' },
];

const VISIBILITY_OPTIONS: { value: ServiceRequest['visibility']; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-selected-specialists', label: 'Спільний з обраними спеціалістами' },
	{ value: 'shared-with-venues', label: 'Спільний із закладами' },
];

@Component({
	selector: 'app-request-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TranslateDirective,
	],
	templateUrl: './request-form.component.html',
	styleUrl: './request-form.component.scss',
})
export class RequestFormComponent {
	@Input() entity?: ServiceRequest;

	readonly form: FormGroup;
	readonly transactionTypeOptions = TRANSACTION_TYPE_OPTIONS;
	readonly visibilityOptions = VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			transactionType: ['book-service', Validators.required],
			country: ['', Validators.required],
			region: ['', Validators.required],
			city: ['', Validators.required],
			minPrice: [0, [Validators.required, Validators.min(0)]],
			maxPrice: [0, [Validators.required, Validators.min(0)]],
			currency: ['USD', Validators.required],
			preferredDurationMinutes: [0, Validators.min(0)],
			sessionsRequirements: [0, Validators.min(0)],
			experienceRequirements: [''],
			specialtyPreferences: [''],
			preferredDate: [''],
			expirationDate: ['', Validators.required],
			visibility: ['public', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
