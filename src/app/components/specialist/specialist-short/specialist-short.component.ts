import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Specialist } from '../../../specialist/specialist.interface';

const DEFAULT_PHOTO = '/default.png';

@Component({
	selector: 'app-specialist-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './specialist-short.component.html',
	styleUrl: './specialist-short.component.scss',
})
export class SpecialistShortComponent {
	@Input() entity!: Specialist;

	get photo(): string {
		return this.entity.photo || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
