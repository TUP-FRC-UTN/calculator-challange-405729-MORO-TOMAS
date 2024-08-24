import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculation',
  standalone: true,
  imports: [],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.css'
})
export class CalculationComponent {

  @Output() tipoCalculo = new EventEmitter<string>();
  
  tipo:string = "";

  emitirEvento() {
      this.tipoCalculo.emit(this.tipo);
      this.tipo= ""
  }

  onClickAddision(){
    this.tipo = "+"
  }

  onClickMinus(){
    this.tipo = "-"
  }

  onClickMultiplication(){
    this.tipo = "*"
  }

  onClickDivision(){
    this.tipo = "/"
  }

  onClickAPower(){
    this.tipo = "^"
  }

  onClickSquare(){
    this.tipo = "CE"
  }

}
