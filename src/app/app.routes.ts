import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		canActivate: [MetaGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		data: {
			meta: {
				title: 'Neryxomka — цифровий паспорт краси і форми',
				description:
					'Neryxomka показує повну історію відвідувань клієнта — стрижки, тренування, догляд — поруч з послугами, картою та профілями спеціалістів і закладів.',
			},
		},
		loadChildren: () =>
			import('./pages/guest/home/home.routes').then((m) => m.routes),
	},
	{
		path: '',
		canActivate: [guestGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
						description:
							'Увійдіть або зареєструйтесь у Neryxomka, щоб переглядати цифрові паспорти клієнтів, стрічку послуг і керувати профілем.',
					},
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: '',
		canActivate: [authenticatedGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
						description:
							'Керуйте особистими даними профілю Neryxomka: ім’я, телефон, фото та коротка інформація про себе.',
					},
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'editor',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Редактор',
						description:
							'Перевірте форми додавання записів, послуг, закладів та спеціалістів у Neryxomka.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/editor/editor.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share-profile',
				canActivate: [MetaGuard],
				data: {
					shareKind: 'profile',
					meta: {
						title: 'Поділитися профілем',
						description: 'Відскануйте QR-код, щоб відкрити мій профіль Neryxomka.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/share/share.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		// Publicly browsable pages — accessible whether signed in or not.
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
						description: 'Налаштування облікового запису Neryxomka.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share',
				canActivate: [MetaGuard],
				data: {
					shareKind: 'app',
					meta: {
						title: 'Поділитися Neryxomka',
						description: 'Відскануйте QR-код, щоб приєднатися до Neryxomka за кілька секунд.',
					},
				},
				loadChildren: () =>
					import('./pages/user/share/share.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для користувачів',
						description: 'Знаходьте перевірених спеціалістів краси та фітнесу разом з Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-users/for-users.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-specialists',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для спеціалістів',
						description: 'Розвивайте свою практику спеціаліста краси та фітнесу з Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-specialists/for-specialists.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-venues',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для закладів',
						description: 'Розвивайте свій заклад (салон, спортзал, спа) разом з Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-venues/for-venues.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'feed',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Стрічка',
						description:
							'Перегортайте стрічку послуг краси та фітнесу Neryxomka — відкладайте цікаве в обране, пропускайте зайве.',
					},
				},
				loadChildren: () =>
					import('./pages/user/feed/feed.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'venues',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Заклади',
						description:
							'Перегляньте всі заклади (салони, спортзали, спа), представлені в Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/venues/venues.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'explore',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Пошук',
						description:
							'Шукайте й фільтруйте послуги краси та фітнесу Neryxomka за категорією, ціною, статусом і містом.',
					},
				},
				loadChildren: () =>
					import('./pages/user/explore/explore.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'map',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Карта',
						description:
							'Знаходьте заклади краси та фітнесу на карті Neryxomka за їхнім реальним розташуванням.',
					},
				},
				loadChildren: () =>
					import('./pages/user/map/map.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'service/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Послуга',
						description:
							'Деталі послуги краси або фітнесу в Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/service/service.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'records/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запис історії клієнта',
						description:
							'Запис з цифрового паспорта клієнта: стрижка, тренування, догляд або процедура.',
					},
				},
				loadChildren: () =>
					import('./pages/user/records/records.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'venue/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Заклад',
						description:
							'Профіль закладу в Neryxomka: спеціалісти, послуги та відгуки.',
					},
				},
				loadChildren: () =>
					import('./pages/user/venue/venue.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'specialist/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Спеціаліст',
						description:
							'Профіль спеціаліста в Neryxomka: контакти, заклад та послуги.',
					},
				},
				loadChildren: () =>
					import('./pages/user/specialist/specialist.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'client/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Профіль користувача',
						description: 'Публічний профіль користувача Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/client/client.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
						description: 'Адміністрування користувачів Neryxomka.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
						description: 'Адміністрування клієнтів Neryxomka.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
						description: 'Адміністрування динамічних форм Neryxomka.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
						description: 'Редагування динамічної форми Neryxomka.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full',
	},
];
