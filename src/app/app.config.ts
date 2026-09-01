import {
	ApplicationConfig,
	provideZonelessChangeDetection,
} from '@angular/core';
import {
	PreloadAllModules,
	provideRouter,
	withInMemoryScrolling,
	withPreloading,
} from '@angular/router';
import {
	provideNgxAce,
	registerAceMode,
	registerAceTheme,
} from '@wawjs/ngx-ace';
import { provideNgxCore } from '@wawjs/ngx-core';
import { provideNgxCrud } from '@wawjs/ngx-crud';
import { provideNgxHttp } from '@wawjs/ngx-http';
import { provideNgxSocket } from '@wawjs/ngx-socket';
import { provideNgxTinymce } from '@wawjs/ngx-tinymce';
import { provideTranslate } from '@wawjs/ngx-translate';
import { provideNgxPrime } from '@wawjs/ngx-prime/config';
import { definePreset } from '@wawjs/css-prime-styled';
import Aura from '@wawjs/css-prime-themes/aura';

/** BodyCare brand coral, matched to the logo's droplet/leaf color. */
const BodyCarePreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: '#fdf1ee',
			100: '#fbdfd7',
			200: '#f7c0b0',
			300: '#f19a82',
			400: '#ea7a5c',
			500: '#e05c3d',
			600: '#bf4626',
			700: '#9c3820',
			800: '#7f301d',
			900: '#692a1c',
			950: '#38130c',
		},
	},
});
import { NgxBosConfig, ngxBosProvide } from '@wawjs/ngx-bos';
import { io } from 'socket.io-client';
import { environment } from '@env';
import { provideFormComponents } from './app.formcomponents';
import { routes } from './app.routes';
import { tinymceConfig } from './tinymce.config';
import { wawjsConfig } from './wawjs.config';

registerAceMode('javascript', () =>
	import('ace-builds/src-noconflict/mode-javascript'),
);
registerAceTheme('clouds', () =>
	import('ace-builds/src-noconflict/theme-clouds'),
);
registerAceTheme('github', () =>
	import('ace-builds/src-noconflict/theme-github'),
);

export const appConfig: ApplicationConfig = {
	providers: [
		provideZonelessChangeDetection(),
		ngxBosProvide({
			appId: environment.appId,
			url: environment.url,
			roles: environment.roles,
			userFields:
				(environment as unknown as { userFields?: string[] })
					.userFields ?? [],
			userForm:
				(environment as unknown as {
					userForm?: NgxBosConfig['userForm'];
				}).userForm ?? [],
			defaultUserThumb: 'default.png',
		}),
		provideFormComponents(),
		provideNgxCore(wawjsConfig),
		provideNgxHttp(wawjsConfig),
		provideNgxCrud(wawjsConfig),
		provideNgxSocket({ ...wawjsConfig, io }),
		provideNgxAce({
			mode: 'text',
			theme: 'github',
			useWorker: false,
		}),
		provideTranslate({
			defaultLanguage: environment.defaultLanguageCode,
			languages: environment.languages,
			folder: '/i18n/',
			persistLanguage: true,
		}),
		provideNgxPrime({
			theme: {
				preset: BodyCarePreset,
				options: { darkModeSelector: "[data-mode='dark']" },
			},
		}),
		provideNgxTinymce(tinymceConfig),
		provideRouter(
			routes,
			withPreloading(PreloadAllModules),
			withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
		),
	],
};
