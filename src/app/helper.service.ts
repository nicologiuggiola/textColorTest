import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  text: string = '';
  color: string = '';

  constructor() { }

  saveText(text: string) {
    this.text = text;
  }

  saveColor(color: string) {
    this.color = color;
  }

  printText(): any {
    return { text: this.text, color: this.color }
  }

}
