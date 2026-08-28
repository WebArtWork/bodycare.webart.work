import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Venue } from '../../../venue/venue.interface';

@Component({
	selector: 'app-venue-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputNumberModule, InputTextModule, TextareaModule, TranslateDirective],
	templateUrl: './venue-form.component.html',
	styleUrl: './venue-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VenueFormComponent implements OnInit {
	readonly entity = input<Venue>();

	private readonly _fb = inject(FormBuilder);

	readonly form: FormGroup = this._fb.group({
		name: ['', Validators.required],
		description: ['', Validators.required],
		logo: [''],
		country: ['', Validators.required],
		city: ['', Validators.required],
		foundedYear: [null, [Validators.min(1800), Validators.max(2100)]],
		phone: ['', Validators.pattern(/^[+0-9() -]{6,}$/)],
		email: ['', [Validators.required, Validators.email]],
		website: [''],
		address: [''],
	});

	ngOnInit(): void {
		const entity = this.entity();
		if (entity) {
			this.form.patchValue({ ...entity, ...entity.contact });
		}
	}
}
