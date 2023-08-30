import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  constructor() {}

  async translateText(textToTranslate: string): Promise<string> {
    console.log(textToTranslate)
    try {
      const res = await fetch('https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=es', {
      method: 'POST',
      body: JSON.stringify(
        [
          {"Text": `${textToTranslate}`}
        ]
      ),
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '6a2a146e2b8f4f9f9ef3b67cf230ea8c',
        'Ocp-Apim-Subscription-Region': 'southcentralus',
      },
    });
    const data = await res.json();
    console.log(data[0].translations[0].text)
    return data[0]?.translations[0]?.text ?? "";
    } catch (error : any) {
      console.log(error.response.data);
    }

    return "";
  }
}
