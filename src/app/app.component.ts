import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  easy: boolean = false;
  medium: boolean = false;
  strong: boolean = false;
  smallText: boolean = false;
  className: string = '';
  statutes = [
    {key: 'easy', value: 'Easy'},
    {key: 'medium', value: 'Medium'},
    {key: 'strong', value: 'Strong'}
  ]

  onInput(currentValue: string) {
    let length = currentValue.length;
    this.smallText = length > 0 && length <= 8;
    let {countDigs, countLetters, countSymbols} = this.calculate(currentValue);
    if (!this.smallText && currentValue) {
      this.easy = [countDigs, countLetters, countSymbols].indexOf(length) >= 0;
      this.strong = countDigs > 0 && countLetters > 0 && countSymbols > 0;
      this.medium = !this.easy && !this.strong;
    } else {
      this.easy = this.medium = this.strong = false;
    }
    this.className = this.easy ? 'type-easy' : (this.medium ? 'type-medium' : (this.strong ? 'type-strong' : ''));
  }

  calculate(value: string) {
    let countDigs = 0, countLetters = 0, countSymbols = 0;
    let regDig = /\d+/g
    let regLet = /\w+/g
    let digs = value.match(regDig);
    if (digs) {
      countDigs = digs.join('').length;
      value = value.replace(regDig, '');
    }
    let lets = value.match(regLet);
    if (lets) {
      countLetters = lets.join('').length;
      value = value.replace(regLet, '');
    }
    if (value) {
      countSymbols = value.length;
    }

    return {countDigs, countLetters, countSymbols}
  }

}
