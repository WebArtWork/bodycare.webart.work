import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./specialist.component').then((m) => m.SpecialistComponent),
	},
];
