import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { companyProfile } from '../../../company/company.data';

interface HomeFeature {
	number: string;
	icon: string;
	title: string;
	description: string;
	linkLabel: string;
	route: string;
}

interface HomeAudience {
	number: string;
	route: string;
	title: string;
	description: string;
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, ButtonModule, CardModule, TranslateDirective],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	readonly translateService = inject(TranslateService);

	readonly company = companyProfile;

	readonly features: HomeFeature[] = [
		{
			number: '01',
			icon: 'pi pi-file-check',
			title: 'Цифровий паспорт клієнта',
			description:
				'Стрижки, тренування, догляд і процедури — в одному записі з фото до/після.',
			linkLabel: 'Детальніше',
			route: '/for-users',
		},
		{
			number: '02',
			icon: 'pi pi-id-card',
			title: 'Спеціалісти',
			description:
				'Профілі спеціалістів з досвідом, спеціалізацією та підтвердженими відгуками.',
			linkLabel: 'Переглянути спеціалістів',
			route: '/specialists',
		},
		{
			number: '03',
			icon: 'pi pi-building',
			title: 'Заклади',
			description: 'Салони, спортзали та спа поруч — з переліком послуг і спеціалістів.',
			linkLabel: 'Переглянути заклади',
			route: '/venues',
		},
		{
			number: '04',
			icon: 'pi pi-list',
			title: 'Послуги',
			description: 'Каталог послуг краси та фітнесу з ціною, тривалістю та статусом.',
			linkLabel: 'Переглянути послуги',
			route: '/services',
		},
	];

	readonly audiences: HomeAudience[] = [
		{
			number: '01',
			route: '/for-users',
			title: 'Клієнтам',
			description: 'Знаходьте спеціалістів і заклади, зберігайте історію процедур.',
		},
		{
			number: '02',
			route: '/for-specialists',
			title: 'Спеціалістам',
			description: 'Ведіть публічний профіль і підтверджену історію роботи з клієнтами.',
		},
		{
			number: '03',
			route: '/for-venues',
			title: 'Закладам',
			description: 'Представляйте салон чи спортзал разом зі спеціалістами й послугами.',
		},
		{
			number: '04',
			route: '/for-brands',
			title: 'Брендам',
			description: 'Постачайте косметику та професійні матеріали закладам і спеціалістам.',
		},
	];
}
