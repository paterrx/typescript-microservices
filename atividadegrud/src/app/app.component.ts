import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FornecedorComponent } from './component/fornecedor/fornecedor.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListafornecedorComponent } from './component/listafornecedor/listafornecedor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FornecedorComponent,HomeComponent,NavbarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'atividadeGrud';
}
