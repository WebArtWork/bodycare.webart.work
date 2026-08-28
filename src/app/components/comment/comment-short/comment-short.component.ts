import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { EntityComment } from '../../../comment/comment.interface';

@Component({
	selector: 'app-comment-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './comment-short.component.html',
	styleUrl: './comment-short.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentShortComponent {
	readonly entity = input.required<EntityComment>();
}
