import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { SpecialistShortComponent } from '../../../components/specialist/specialist-short/specialist-short.component';
import { Specialist } from '../../../specialist/specialist.interface';
import { specialists } from '../../../specialist/specialist.data';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SpecialistShortComponent, FormsModule, CardModule, InputTextModule, TranslateDirective],
	templateUrl: './specialists.component.html',
	styleUrl: './specialists.component.scss',
})
export class SpecialistsComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Specialist[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return specialists;

		return specialists.filter((item) => {
			const haystack = [item.displayName, item.city, item.country, ...item.specialties]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Specialist): void {
		this._router.navigate(['/specialist', item._id]);
	}
}
