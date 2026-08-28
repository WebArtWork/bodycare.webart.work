import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CommentEntityType, EntityComment } from '../../../comment/comment.interface';

const ENTITY_TYPE_OPTIONS: { value: CommentEntityType; label: string }[] = [
	{ value: 'service', label: 'Послуга' },
	{ value: 'venue', label: 'Заклад' },
	{ value: 'specialist', label: 'Спеціаліст' },
	{ value: 'user', label: 'Користувач' },
];

@Component({
	selector: 'app-comment-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, SelectModule, InputNumberModule, TextareaModule, ButtonModule, TranslateDirective],
	templateUrl: './comment-form.component.html',
	styleUrl: './comment-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentFormComponent implements OnInit {
	readonly entity = input<EntityComment>();

	private readonly _fb = inject(FormBuilder);

	readonly form: FormGroup = this._fb.group({
		entityType: ['service', Validators.required],
		rating: [null, [Validators.min(1), Validators.max(5)]],
		text: ['', [Validators.required, Validators.maxLength(2000)]],
	});
	readonly entityTypeOptions = ENTITY_TYPE_OPTIONS;

	ngOnInit(): void {
		const entity = this.entity();
		if (entity) {
			this.form.patchValue(entity);
		}
	}
}
