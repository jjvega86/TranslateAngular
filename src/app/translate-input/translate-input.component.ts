import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-translate-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './translate-input.component.html',
  styleUrls: ['./translate-input.component.css']
})
export class TranslateInputComponent {
  @Output() formData = new EventEmitter<any>();

}
