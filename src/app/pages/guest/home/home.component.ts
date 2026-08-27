import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { companyProfile } from '../../../company/company.data';

interface HomeFeature {
	icon: string;
	title: string;
	description: string;
}

@Component({
	imports: [RouterLink, ButtonModule, CardModule, TranslateDirective],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	readonly translateService = inject(TranslateService);

	readonly company = companyProfile;

	readonly features: HomeFeature[] = [
		{
			icon: 'pi pi-file-check',
			title: 'Цифровий паспорт клієнта',
			description:
				'Кожен клієнт має повну історію: стрижки, тренування, догляд і процедури — все зафіксовано в одному записі з фото до/після.',
		},
		{
			icon: 'pi pi-images',
			title: 'Стрічка послуг',
			description:
				'Перегортайте послуги як стрічку — обирайте цікаве, відкладайте зайве, і повертайтесь до збереженого будь-коли.',
		},
		{
			icon: 'pi pi-map',
			title: 'Пошук на карті',
			description:
				'Знаходьте заклади краси та фітнесу за розташуванням — з фільтрами під ваш запит.',
		},
		{
			icon: 'pi pi-building',
			title: 'Заклади та спеціалісти',
			description:
				'Профілі закладів і спеціалістів поруч із кожною послугою — зрозуміло, хто саме її виконує.',
		},
	];
}
