import { Routes } from '@angular/router';
import { WikiDesign } from './app/pages/wiki/wiki';
import { wikiChildRoutes } from './app/pages/wiki/wiki.routes'; // <-- importa filhos
import { Home } from './app/pages/home/home';
import { HomePrincipal } from './app/pages/home-principal/home-principal';

export const appRoutes: Routes = [
  { path: 'home', component: Home },
 { path: '', component: HomePrincipal },
  {
    path: 'wiki',
    component: WikiDesign,
    children: wikiChildRoutes, // <-- CARREGA AS ROTAS INTERNAS
  },
  { path: '**', redirectTo: '' },
]

;


