import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ServiceRequest } from '../../../request/request.interface';

@Component({
	selector: 'app-request-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './request-view.component.html',
	styleUrl: './request-view.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestViewComponent {
	readonly entity = input.required<ServiceRequest>();
}
