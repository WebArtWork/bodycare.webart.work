import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { User } from '../../../user/user.interface';

@Component({
	selector: 'app-user-form',
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
	templateUrl: './user-form.component.html',
	styleUrl: './user-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
	readonly entity = input<User>();

	private readonly _fb = inject(FormBuilder);

	readonly form: FormGroup = this._fb.group({
		name: ['', Validators.required],
		photo: [''],
		bio: [''],
		country: ['', Validators.required],
		city: ['', Validators.required],
		experienceYears: [0, Validators.min(0)],
		email: ['', [Validators.required, Validators.email]],
		phone: ['', Validators.pattern(/^[+0-9() -]{6,}$/)],
	});

	ngOnInit(): void {
		const entity = this.entity();
		if (entity) {
			this.form.patchValue({ ...entity, ...entity.contact });
		}
	}
}
