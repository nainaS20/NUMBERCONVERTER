import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {
  private readonly units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  private readonly teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  private readonly tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  transform(value: number): string {
    if (value === 0) {
      return 'Zero';
    } else if (value > 999999) {
      return 'Number is out of bounds';
    }

    return this.convertNumberToWords(value);
  }

  private convertNumberToWords(value: number): string {
    if (value < 10) {
      return this.units[value];
    } else if (value < 20) {
      return this.teens[value - 11];
    } else if (value < 100) {
      const tenDigit = Math.floor(value / 10);
      const unitDigit = value % 10;
      return `${this.tens[tenDigit]} ${this.units[unitDigit]}`;
    } else if (value < 1000) {
      const hundredDigit = Math.floor(value / 100);
      const remainingTwoDigits = value % 100;
      return `${this.units[hundredDigit]} Hundred ${this.convertNumberToWords(remainingTwoDigits)}`;
    } else if (value < 10000) {
      const thousandDigit = Math.floor(value / 1000);
      const remainingThreeDigits = value % 1000;
      return `${this.units[thousandDigit]} Thousand ${this.convertNumberToWords(remainingThreeDigits)}`;
    } else if (value < 100000) {
      const tenThousandDigit = Math.floor(value / 10000);
      const remainingFourDigits = value % 10000;
      return `${this.convertNumberToWords(tenThousandDigit)} Ten Thousand ${this.convertNumberToWords(remainingFourDigits)}`;
    } else if (value < 1000000) {
      const lakhDigit = Math.floor(value / 100000);
      const remainingFiveDigits = value % 100000;
      return `${this.convertNumberToWords(lakhDigit)} Lakh ${this.convertNumberToWords(remainingFiveDigits)}`;
    }

    return 'Number out of range';
  }
}
