import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  nome: string = 'Thiago';
  idade: number = 39;
  trabalho: string = 'Engenheiro de software';
  hobbies = ['Futebol', 'bicicleta', 'brincar'];
  carro = { marca: 'Ford', modelo: 'Ford GT' };
}
