import { Routes } from '@angular/router';
import path from 'path';
import { FornecedorComponent } from './component/fornecedor/fornecedor.component';
import { HomeComponent } from './component/home/home.component';
import { ListafornecedorComponent } from './component/listafornecedor/listafornecedor.component';
import { EditarfornecedorComponent } from './component/fornecedoredit/editarfornecedor.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cadastrofornecedor', component:FornecedorComponent},
  {path: 'listafornecedor', component:ListafornecedorComponent},
  {path: 'editarfornecedor/:id', component:EditarfornecedorComponent},
  { path: '**', component: HomeComponent },
];
