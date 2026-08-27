import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { VenueIconComponent } from '../../../components/venue/venue-icon/venue-icon.component';
import { SpecialistIconComponent } from '../../../components/specialist/specialist-icon/specialist-icon.component';
import { Service } from '../../../service/service.interface';
import { services } from '../../../service/service.data';
import { ServiceRelations, relationsForService } from '../../../service/service-relations';
import { ServiceRelationType } from '../../../components/service/service-short/service-short.component';

type FeedAction = 'favourite' | 'ignore';

/** Fallback image shown when a service has no photos or its photo fails to load. */
const DEFAULT_PHOTO = '/property-default.svg';

@Component({
	imports: [ButtonModule, SpecialistIconComponent, VenueIconComponent],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
})
export class FeedComponent {
	private readonly _router = inject(Router);

	readonly favouritedIds = signal<Set<string>>(this._restore('favourited'));
	readonly ignoredIds = signal<Set<string>>(this._restore('ignored'));

	readonly feed = computed<{ service: Service; relations: ServiceRelations }[]>(() => {
		const favourited = this.favouritedIds();
		const ignored = this.ignoredIds();
		return services
			.filter((item) => !favourited.has(item._id) && !ignored.has(item._id))
			.map((service) => ({ service, relations: relationsForService(service) }));
	});

	/** Navigates to the service's detail page. */
	view(item: Service): void {
		this._router.navigate(['/service', item._id]);
	}

	/** Navigates to a related entity's detail page without triggering the service's own click. */
	viewRelation(event: Event, type: ServiceRelationType, id: string): void {
		event.stopPropagation();
		this._router.navigate(['/', type, id]);
	}

	/** Marks a service as favourited or ignored, persisting the choice to localStorage. */
	act(item: Service, action: FeedAction): void {
		if (action === 'favourite') {
			this._update('favourited', this.favouritedIds, item._id);
		} else {
			this._update('ignored', this.ignoredIds, item._id);
		}
	}

	/** Returns the service's first photo, falling back to the shared default image. */
	photo(item: Service): string {
		return item.photos[0] || DEFAULT_PHOTO;
	}

	/** Swaps in the default photo when the service's image fails to load. */
	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	private _update(
		key: 'favourited' | 'ignored',
		state: ReturnType<typeof signal<Set<string>>>,
		id: string,
	): void {
		const next = new Set(state());
		next.add(id);
		state.set(next);
		this._persist(key, next);
	}

	private _restore(key: 'favourited' | 'ignored'): Set<string> {
		try {
			const raw = localStorage.getItem(`feed:${key}`);
			return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>();
		} catch {
			return new Set<string>();
		}
	}

	private _persist(key: 'favourited' | 'ignored', value: Set<string>): void {
		try {
			localStorage.setItem(`feed:${key}`, JSON.stringify([...value]));
		} catch {
			// ignore storage failures (e.g. private browsing)
		}
	}
}
