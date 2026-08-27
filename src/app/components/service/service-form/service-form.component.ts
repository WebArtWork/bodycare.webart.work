import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Service, ServiceCategory, ServiceStatus, BookingType } from '../../../service/service.interface';

const SERVICE_CATEGORY_OPTIONS: { value: ServiceCategory; label: string }[] = [
	{ value: 'hair', label: 'Волосся' },
	{ value: 'nails', label: 'Нігті' },
	{ value: 'fitness', label: 'Фітнес' },
	{ value: 'skin', label: 'Шкіра' },
	{ value: 'massage', label: 'Масаж' },
];

const SERVICE_STATUS_OPTIONS: { value: ServiceStatus; label: string }[] = [
	{ value: 'draft', label: 'Чернетка' },
	{ value: 'pending-review', label: 'На розгляді' },
	{ value: 'active', label: 'Активне' },
	{ value: 'paused', label: 'Призупинено' },
	{ value: 'rejected', label: 'Відхилено' },
	{ value: 'archived', label: 'Архівоване' },
];

const BOOKING_TYPE_OPTIONS: { value: BookingType; label: string }[] = [
	{ value: 'single', label: 'Разова послуга' },
	{ value: 'package', label: 'Пакет послуг' },
];

@Component({
	selector: 'app-service-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './service-form.component.html',
	styleUrl: './service-form.component.scss',
})
export class ServiceFormComponent implements OnInit {
	@Input() entity?: Service;

	readonly form: FormGroup;
	readonly categoryOptions = SERVICE_CATEGORY_OPTIONS;
	readonly statusOptions = SERVICE_STATUS_OPTIONS;
	readonly bookingTypeOptions = BOOKING_TYPE_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			category: ['hair', Validators.required],
			bookingType: ['single', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required],
			durationMinutes: [30, [Validators.required, Validators.min(5)]],
			price: [0, [Validators.required, Validators.min(0)]],
			currency: ['UAH', Validators.required],
			status: ['draft', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
