import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../../../user/user.interface';

const DEFAULT_PHOTO = '/default.png';

@Component({
	selector: 'app-user-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './user-short.component.html',
	styleUrl: './user-short.component.scss',
})
export class UserShortComponent {
	@Input() entity!: User;

	get photo(): string {
		return this.entity.photo || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
