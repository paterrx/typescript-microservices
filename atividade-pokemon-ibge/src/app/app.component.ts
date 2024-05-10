import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EstadosListComponent } from './components/ibge/estados-list/estados-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent,PokemonListComponent,EstadosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Gabriel A. Paterra';
}
