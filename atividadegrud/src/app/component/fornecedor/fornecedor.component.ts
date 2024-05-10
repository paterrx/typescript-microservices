import { FornecedorService } from './../../services/fornecedor.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fornecedor } from '../../interfaces/Fornecedor';

@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css'
})
export class FornecedorComponent {
  forncedorForm: FormGroup = new FormGroup({});
  fornecedores: Fornecedor[] = [];

  constructor(private fornecedorService : FornecedorService, private formBuilder: FormBuilder) {
    this.forncedorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  cadastrar(){
    if(this.forncedorForm.valid){
      const fornecedorAdd : Fornecedor = {
        id:this.generateRandomString(7),
        nome:this.forncedorForm.value.nome,
        endereco:this.forncedorForm.value.endereco,
        telefone:this.forncedorForm.value.telefone,
      };
      this.fornecedores.push(fornecedorAdd);
      this.forncedorForm.reset();
      this.fornecedorService.cadastrar(fornecedorAdd).subscribe();
      alert('Fornecedor Inserido com sucesso. ')
    }
  }

  listar(): void {
    this.fornecedorService.listar().subscribe((fornecedores) => (this.fornecedores = fornecedores));
  }

  remover(id: string): void {
    this.fornecedores = this.fornecedores.filter((f) => f.id !== id);
    this.fornecedorService.remover(id).subscribe();
    alert('Fornecedor removido com sucesso. ')
  }

  ngOnInit(): void {
    this.listar();
  }

}
