import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Specialist } from '../../../specialist/specialist.interface';

@Component({
	selector: 'app-specialist-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './specialist-short.component.html',
	styleUrl: './specialist-short.component.scss',
})
export class SpecialistShortComponent {
	@Input() entity!: Specialist;
}
