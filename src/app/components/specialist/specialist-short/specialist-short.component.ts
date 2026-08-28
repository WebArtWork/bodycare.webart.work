import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Specialist } from '../../../specialist/specialist.interface';

const DEFAULT_PHOTO = '/default.png';

@Component({
	selector: 'app-specialist-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './specialist-short.component.html',
	styleUrl: './specialist-short.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialistShortComponent {
	readonly entity = input.required<Specialist>();

	readonly photo = computed(() => this.entity().photo || DEFAULT_PHOTO);

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
