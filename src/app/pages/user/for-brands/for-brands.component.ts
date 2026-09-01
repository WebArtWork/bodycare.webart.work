import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-brands',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-brands.component.html',
	styleUrl: './for-brands.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForBrandsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Як бренд може зареєструватися на BodyCare?',
			answer: 'Створіть профіль бренду косметики чи професійних засобів — вкажіть асортимент, і ми додамо вас до каталогу постачальників.',
		},
		{
			question: 'Як спеціалісти та заклади знаходять продукцію бренду?',
			answer: 'Профіль бренду з’являється в каталозі постачальників, а спеціалісти й заклади можуть додавати ваші продукти до своїх послуг.',
		},
		{
			question: 'Чи можна працювати напряму зі спеціалістами й закладами?',
			answer: 'Так, ви бачите контакти зацікавлених спеціалістів і закладів та домовляєтесь про співпрацю напряму.',
		},
	];
}
