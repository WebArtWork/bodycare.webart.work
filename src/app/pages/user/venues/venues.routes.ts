import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./venues.component').then((m) => m.VenuesComponent),
	},
];
