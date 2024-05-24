import { Component, Input } from '@angular/core';
import { CompartilharInputComponent } from '../compartilhar-input/compartilhar-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decorador-input',
  standalone: true,
  imports: [CompartilharInputComponent, CommonModule],
  templateUrl: './decorador-input.component.html',
  styleUrl: './decorador-input.component.css'
})
export class DecoradorInputComponent {
  nome: string = "Gabriel Paterra"
  frutas = ["Maça", "Banana", "Abacaxi"]
  cadastro = [
    {nome: 'Gabriel', idade: 20, email: "gabriel@email.com"},
    {nome: 'Antonio', idade: 30, email: "antonio@email.com"},
    {nome: 'Maria', idade: 50, email: "maria@email.com"},
  ];
}
