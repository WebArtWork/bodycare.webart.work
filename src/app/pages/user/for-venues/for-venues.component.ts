import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-venues',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-venues.component.html',
	styleUrl: './for-venues.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForVenuesPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує партнерство для закладу?',
			answer: 'На старті партнерство безкоштовне — напишіть нам, і ми розкажемо про умови.',
		},
		{
			question: 'Чи можуть наші спеціалісти мати власні профілі?',
			answer: 'Так, кожен спеціаліст закладу отримує свій публічний профіль, пов’язаний з профілем закладу.',
		},
		{
			question: 'Що бачать клієнти в профілі закладу?',
			answer: 'Опис, рейтинг, кількість спеціалістів і всі активні послуги закладу.',
		},
	];
}
