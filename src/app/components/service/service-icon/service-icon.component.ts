import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Service } from '../../../service/service.interface';

@Component({
	selector: 'app-service-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './service-icon.component.html',
	styleUrl: './service-icon.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceIconComponent {
	readonly entity = input.required<Service>();
}
