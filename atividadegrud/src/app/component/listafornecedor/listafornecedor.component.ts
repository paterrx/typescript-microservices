import { Component } from '@angular/core';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fornecedorlist',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './listafornecedor.component.html',
  styleUrl: './listafornecedor.component.css'
})

export class ListafornecedorComponent {
  fornecedores: Fornecedor[] = [];
  constructor(private fornecedorService:FornecedorService){
  }

  getFornecedores(): void {
    this.fornecedorService.listar().subscribe((fornecedores) => {
      this.fornecedores = fornecedores;
    });
  }

  remover(id: string): void {
    this.fornecedorService.remover(id).subscribe(() => {
      this.fornecedores = this.fornecedores.filter(fornecedor => fornecedor.id !== id);
      alert('Fornecedor removido com sucesso. ');
    }, error => {
      console.error('Erro ao remover o fornecedor: ', error);
    });
  }

  ngOnInit(): void{
    this.getFornecedores();
  }
}
