import { Component } from '@angular/core';
import { NumberToWordsPipe } from '../number-to-words.pipe';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  inputValue!: number;
  outputText!: string;

  convertToWords() {
    if (this.inputValue) {
      this.outputText = new NumberToWordsPipe().transform(this.inputValue);
    } else {
      this.outputText = '';
    }
  }
}
