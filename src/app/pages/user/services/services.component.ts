import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ServiceShortComponent } from '../../../components/service/service-short/service-short.component';
import { Service } from '../../../service/service.interface';
import { services } from '../../../service/service.data';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ServiceShortComponent, FormsModule, CardModule, InputTextModule, TranslateDirective],
	templateUrl: './services.component.html',
	styleUrl: './services.component.scss',
})
export class ServicesComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Service[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return services;

		return services.filter((item) => {
			const haystack = [item.title, item.category].filter(Boolean).join(' ').toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Service): void {
		this._router.navigate(['/service', item._id]);
	}
}
