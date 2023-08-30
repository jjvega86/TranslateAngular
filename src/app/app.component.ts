import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateInputComponent } from './translate-input/translate-input.component';
import { TranslateOutputComponent } from './translate-output/translate-output.component';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslateInputComponent, TranslateOutputComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textToTranslate = "Boo";
  translatedText = "This is the translated text from the parent component";
  translateService : TranslateService = inject(TranslateService);

  constructor(){
    this.translateService.translateText(this.textToTranslate).then(text => {
      console.log(text);
      this.translatedText = text;
    })
  }

}
