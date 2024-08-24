import { Component,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  @Input() valor1 = new EventEmitter<number>();

  resultado: number = 0;



}
