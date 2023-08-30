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

  translateText(text : string | null){
    if (text === null){
      return
    }
    this.translateService.translateText(text).then(translateText => {
      console.log(translateText);
      this.translatedText = translateText;
    })

  }
}
