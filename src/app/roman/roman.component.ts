import { Component, OnInit } from '@angular/core';
import { RomanService } from '../roman.service';

@Component({
  selector: 'app-roman',
  templateUrl: './roman.component.html',
  styleUrls: ['./roman.component.css']
})
export class RomanComponent implements OnInit {

  arabic = '';
  roman = '';

  constructor(private romanService: RomanService) { }

  ngOnInit() {
  }

  arabictoRoman() {
    // tslint:disable-next-line: radix
    if (parseInt(this.arabic)) {
      // tslint:disable-next-line: radix
      this.roman = this.romanService.arabicToroman(parseInt(this.arabic));
    } else {
      this.roman = '';
    }
  }

}
