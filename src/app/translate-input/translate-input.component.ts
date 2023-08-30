import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-translate-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './translate-input.component.html',
  styleUrls: ['./translate-input.component.css']
})
export class TranslateInputComponent {
  translateInput = new FormControl('');

  onSubmit(event : any){
    event.preventDefault();
    console.log("Form submitted!", event)
    console.log(this.translateInput.value);
    this.translateInput.setValue("");

  }
}
