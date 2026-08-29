import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { VenueShortComponent } from '../../../components/venue/venue-short/venue-short.component';
import { LeafletMapComponent, LeafletMapMarker } from '../../../shared/leaflet-map/leaflet-map.component';
import { Venue } from '../../../venue/venue.interface';
import { venues } from '../../../venue/venue.data';

/**
 * Deviation note: `@wawjs/ngx-map`'s `MapComponent` (`lib-map`) wraps
 * `@angular/google-maps` and requires a Google Maps JS API key/loader plus
 * network access to Google's tile servers. This repo has no key configured
 * anywhere (`environment.ts`, `app.config.ts`, `index.html`) and no
 * `provideNgxMap(...)` call. Rather than introduce an unconfigured external
 * dependency, this page renders a real interactive map using `leaflet` +
 * OpenStreetMap tiles via the shared `LeafletMapComponent` wrapper, which
 * needs no API key at all.
 */
@Component({
	imports: [ButtonModule, CardModule, VenueShortComponent, LeafletMapComponent, TranslateDirective],
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
	private readonly _router = inject(Router);

	readonly selected = signal<Venue | null>(null);
	private readonly _focusCenter = signal<{ lat: number; lng: number } | null>(null);

	readonly venuesWithCoords = computed(() => venues.filter((item) => item.coordinates));

	private readonly _defaultCenter = computed<{ lat: number; lng: number }>(() => {
		const withCoords = this.venuesWithCoords();
		if (!withCoords.length) {
			return { lat: 50.4501, lng: 30.5234 }; // Kyiv, as a sensible default
		}

		const lats = withCoords.map((item) => item.coordinates!.lat);
		const lngs = withCoords.map((item) => item.coordinates!.lng);
		return {
			lat: (Math.min(...lats) + Math.max(...lats)) / 2,
			lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
		};
	});

	readonly center = computed<{ lat: number; lng: number }>(() => this._focusCenter() ?? this._defaultCenter());

	readonly zoom = 12;

	readonly markers = computed<LeafletMapMarker[]>(() =>
		this.venuesWithCoords().map((venue) => ({
			id: venue._id,
			position: venue.coordinates!,
			title: venue.name,
		})),
	);

	onMarkerSelected(marker: LeafletMapMarker): void {
		const venue = venues.find((item) => item._id === marker.id) ?? null;
		this.selected.set(venue);
	}

	closePanel(): void {
		this.selected.set(null);
	}

	view(venue: Venue): void {
		this._router.navigate(['/venue', venue._id]);
	}
}
