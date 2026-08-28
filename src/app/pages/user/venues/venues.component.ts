import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { VenueShortComponent } from '../../../components/venue/venue-short/venue-short.component';
import { Venue } from '../../../venue/venue.interface';
import { venues } from '../../../venue/venue.data';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [VenueShortComponent, FormsModule, CardModule, InputTextModule],
	templateUrl: './venues.component.html',
	styleUrl: './venues.component.scss',
})
export class VenuesComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Venue[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return venues;

		return venues.filter((item) => {
			const haystack = [item.name, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Venue): void {
		this._router.navigate(['/venue', item._id]);
	}
}
