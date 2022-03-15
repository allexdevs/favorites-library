import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReduceTextService {

  constructor() { }

  textLimiter(text: String): String {
    try {
      const limitedText = text.length > 225 ? `${text.slice(0, 225)}...` : text;
      return limitedText;
    } catch (e) {
      console.log(e);
    }
    return "";
  }
}
