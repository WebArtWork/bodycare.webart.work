import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ServiceRequest } from '../../../request/request.interface';

@Component({
	selector: 'app-request-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './request-short.component.html',
	styleUrl: './request-short.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestShortComponent {
	readonly entity = input.required<ServiceRequest>();
}
