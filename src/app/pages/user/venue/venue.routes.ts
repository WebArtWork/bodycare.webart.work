import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./venue.component').then((m) => m.VenueComponent),
	},
];
