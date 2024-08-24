import { Component, EventEmitter, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clase2';

  @Input() valor1 = new EventEmitter<number>();
  @Input() valor2 = new EventEmitter<number>();

  v1: number = 0;
  v2: number = 0;
  onN1Change(event: any) {
  this.v1 = event.target.value;
  }
  onN2Change(event: any) {
  this.v2 = event.target.value;
  }

  emitirEvento() {
  this.valor1.emit(this.v1);
  this.valor2.emit(this.v2);
  this.v1 = 0
  this.v2 = 0
  }
}
