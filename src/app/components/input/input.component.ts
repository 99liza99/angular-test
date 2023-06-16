import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  onInput(event: any){
    this.newItemEvent.emit(event.target.value);
  }
}
