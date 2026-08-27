import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Specialist } from '../../../specialist/specialist.interface';

@Component({
	selector: 'app-specialist-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './specialist-icon.component.html',
	styleUrl: './specialist-icon.component.scss',
})
export class SpecialistIconComponent {
	@Input() entity!: Specialist;
}
