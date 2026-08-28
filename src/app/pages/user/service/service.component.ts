import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { ServiceViewComponent } from '../../../components/service/service-view/service-view.component';
import { Service } from '../../../service/service.interface';
import { services } from '../../../service/service.data';
import { ServiceRelations, relationsForService } from '../../../service/service-relations';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ServiceViewComponent, CardModule],
	templateUrl: './service.component.html',
	styleUrl: './service.component.scss',
})
export class ServiceComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Service | undefined>(() =>
		services.find((item) => item._id === this._id()),
	);

	readonly relations = computed<ServiceRelations | null>(() => {
		const service = this.entity();
		return service ? relationsForService(service) : null;
	});

}
