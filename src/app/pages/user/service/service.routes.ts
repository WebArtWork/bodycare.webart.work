import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./service.component').then((m) => m.ServiceComponent),
	},
];
