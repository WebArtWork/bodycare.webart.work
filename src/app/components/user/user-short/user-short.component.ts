import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { User } from '../../../user/user.interface';

const DEFAULT_PHOTO = '/default.png';

@Component({
	selector: 'app-user-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './user-short.component.html',
	styleUrl: './user-short.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserShortComponent {
	readonly entity = input.required<User>();

	readonly photo = computed(() => this.entity().photo || DEFAULT_PHOTO);

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
