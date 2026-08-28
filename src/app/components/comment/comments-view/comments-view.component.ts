import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { EntityComment } from '../../../comment/comment.interface';

@Component({
	selector: 'app-comments-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './comments-view.component.html',
	styleUrl: './comments-view.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsViewComponent {
	readonly entity = input.required<EntityComment>();
}
