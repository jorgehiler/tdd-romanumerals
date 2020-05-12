import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanService {

  U = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'}; // Units
  T = { 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC' }; // Tens
  H = { 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM', 10: 'M'}; // Hundreds

  constructor() { }

  arabicToroman(arabic: number) {
    const { hundreds, tens, units } = this.arabicSplit(arabic);
    let roman = '';
    if (arabic >= 1000) { return 'debe ser <= 1000'; }
    if (hundreds !== 0) {
      roman = roman + this.romanH(hundreds);
    }
    if (tens !== 0) {
      roman = roman + this.romanT(tens);
    }
    if (units !== 0) {
      roman = roman + this.romanU(units);
    }
    return roman;
  }

  // Convert units
  romanU(units) {
    return this.U[units];
  }

  // Convert tens
  romanT(tens) {
    return this.T[tens];
  }
  
  // Convert hundreds
  romanH(hundreds) {
    return this.H[hundreds];
  }

  arabicSplit(arabic: number) {
    let hundreds: number = arabic / 100;
    let tens: number;
    let units: number;
    hundreds = Math.floor(hundreds);
    tens = arabic - (hundreds * 100);
    tens = Math.floor((tens / 10));
    units = arabic - (hundreds * 100) - (tens * 10);
    return { hundreds, tens, units };
  }
}
