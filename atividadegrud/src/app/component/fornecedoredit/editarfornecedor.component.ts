import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { FornecedorService } from '../../services/fornecedor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fornecedoredit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editarfornecedor.component.html',
  styleUrl: './editarfornecedor.component.css'
})

export class EditarfornecedorComponent {
  fornecedorForm:FormGroup = new FormGroup({});
  fornecedor?: Fornecedor;

  constructor(private fornecedorService : FornecedorService, private formBuilder: FormBuilder, private route: ActivatedRoute){
    this.getFornecedorById();
  }

  getFornecedorById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.fornecedorService.getId(id).subscribe((fornecedor)=> (this.fornecedor = fornecedor));

    this.fornecedorForm = this.formBuilder.group({
      nome:[this.fornecedor?.nome],
      endereco:[this.fornecedor?.endereco],
      telefone:[this.fornecedor?.telefone],
      id: [this.fornecedor?.id]
    });
  }

  editar(): void {
    if(this.fornecedorForm.valid) {
      const fornecedorAdd: Fornecedor = {
        id: this.fornecedorForm.value.id,
        nome: this.fornecedorForm.value.nome,
        endereco: this.fornecedorForm.value.endereco,
        telefone: this.fornecedorForm.value.telefone,
      };
      this.fornecedorService.editar(fornecedorAdd).subscribe();
      alert('Fornecedor atualizado com sucesso. ')
    }
  }

  ngOnInit(): void {}

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
