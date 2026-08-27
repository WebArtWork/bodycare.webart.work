import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-users',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-users.component.html',
	styleUrl: './for-users.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForUsersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує користування Neryxomka?',
			answer: 'Пошук і перегляд послуг для клієнтів безкоштовні.',
		},
		{
			question: 'Звідки береться інформація про спеціалістів і заклади?',
			answer: 'Кожен клієнт має цифровий паспорт з історією процедур, тренувань та перевіреними даними від закладів і спеціалістів.',
		},
		{
			question: 'Чи можу я зв’язатися напряму зі спеціалістом чи закладом?',
			answer: 'Так, контакти спеціаліста або закладу доступні прямо на сторінці послуги.',
		},
	];
}
