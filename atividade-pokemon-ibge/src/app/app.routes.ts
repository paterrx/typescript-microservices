import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { EstadosListComponent } from './components/ibge/estados-list/estados-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pokemon', component: PokemonListComponent },
    { path: 'ibge', component: EstadosListComponent },
    { path: '**', component: HomeComponent }
];
