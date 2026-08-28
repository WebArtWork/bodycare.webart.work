import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Specialist } from '../../../specialist/specialist.interface';

@Component({
	selector: 'app-specialist-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './specialist-icon.component.html',
	styleUrl: './specialist-icon.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialistIconComponent {
	readonly entity = input.required<Specialist>();

	readonly photoFailed = signal(false);

	onPhotoError(): void {
		this.photoFailed.set(true);
	}
}
