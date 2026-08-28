import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ServiceRequest } from '../../../request/request.interface';

@Component({
	selector: 'app-request-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './request-icon.component.html',
	styleUrl: './request-icon.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestIconComponent {
	readonly entity = input.required<ServiceRequest>();
}
