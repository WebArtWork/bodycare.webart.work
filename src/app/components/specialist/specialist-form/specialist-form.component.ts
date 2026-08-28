import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Specialist } from '../../../specialist/specialist.interface';

@Component({
	selector: 'app-specialist-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './specialist-form.component.html',
	styleUrl: './specialist-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialistFormComponent implements OnInit {
	readonly entity = input<Specialist>();

	private readonly _fb = inject(FormBuilder);

	readonly form: FormGroup = this._fb.group({
		displayName: ['', Validators.required],
		photo: [''],
		bio: [''],
		country: ['', Validators.required],
		city: ['', Validators.required],
		yearsExperience: [0, [Validators.min(0), Validators.max(80)]],
		contactPhone: ['', Validators.pattern(/^[+0-9() -]{6,}$/)],
		contactEmail: ['', [Validators.required, Validators.email]],
	});

	ngOnInit(): void {
		const entity = this.entity();
		if (entity) {
			this.form.patchValue(entity);
		}
	}
}
