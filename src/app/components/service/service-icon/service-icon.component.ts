import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Service } from '../../../service/service.interface';

@Component({
	selector: 'app-service-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './service-icon.component.html',
	styleUrl: './service-icon.component.scss',
})
export class ServiceIconComponent {
	@Input() entity!: Service;
}
