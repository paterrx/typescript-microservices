import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compartilhar-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compartilhar-input.component.html',
  styleUrl: './compartilhar-input.component.css'
})
export class CompartilharInputComponent {
  @Input() nome: string = "";
  @Input() frutas:any = [];
  @Input() pessoas:any = [];
}
