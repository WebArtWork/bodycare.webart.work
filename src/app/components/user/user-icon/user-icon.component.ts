import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { User } from '../../../user/user.interface';

@Component({
	selector: 'app-user-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './user-icon.component.html',
	styleUrl: './user-icon.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserIconComponent {
	readonly entity = input.required<User>();

	readonly photoFailed = signal(false);

	onPhotoError(): void {
		this.photoFailed.set(true);
	}
}
