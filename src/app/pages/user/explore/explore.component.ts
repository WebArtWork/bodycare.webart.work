import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { ServiceRelationType, ServiceShortComponent } from '../../../components/service/service-short/service-short.component';
import { Service, ServiceCategory, ServiceStatus } from '../../../service/service.interface';
import { services } from '../../../service/service.data';
import { ServiceRelations, SERVICE_CATEGORY_LABELS, SERVICE_STATUS_LABELS, relationsForService } from '../../../service/service-relations';

interface SelectOption<T> {
	label: string;
	value: T;
}

@Component({
	imports: [
		ServiceShortComponent,
		FormsModule,
		RouterLink,
		ButtonModule,
		InputTextModule,
		SelectModule,
		MultiSelectModule,
	],
	templateUrl: './explore.component.html',
	styleUrl: './explore.component.scss',
})
export class ExploreComponent {
	private readonly _router = inject(Router);

	readonly categoryOptions: SelectOption<ServiceCategory>[] = Object.entries(
		SERVICE_CATEGORY_LABELS,
	).map(([value, label]) => ({ value: value as ServiceCategory, label }));

	readonly serviceStatusOptions: SelectOption<ServiceStatus>[] = Object.entries(
		SERVICE_STATUS_LABELS,
	).map(([value, label]) => ({ value: value as ServiceStatus, label }));

	readonly searchTerm = signal('');
	readonly selectedCategories = signal<ServiceCategory[]>([]);
	readonly selectedStatus = signal<ServiceStatus | null>(null);

	readonly results = computed<{ service: Service; relations: ServiceRelations }[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();
		const categories = this.selectedCategories();
		const status = this.selectedStatus();

		return services
			.filter((item) => {
				if (term) {
					const haystack = [item.title, item.description].filter(Boolean).join(' ').toLowerCase();
					if (!haystack.includes(term)) {
						return false;
					}
				}

				if (categories.length && !categories.includes(item.category)) {
					return false;
				}

				if (status && item.status !== status) {
					return false;
				}

				return true;
			})
			.map((service) => ({ service, relations: relationsForService(service) }));
	});

	view(item: Service): void {
		this._router.navigate(['/service', item._id]);
	}

	viewRelation(relation: { type: ServiceRelationType; id: string }): void {
		this._router.navigate(['/', relation.type, relation.id]);
	}
}
