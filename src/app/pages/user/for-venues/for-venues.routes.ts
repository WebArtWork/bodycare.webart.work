import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-venues.component').then((m) => m.ForVenuesPageComponent),
	},
];
