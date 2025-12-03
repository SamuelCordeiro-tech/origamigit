import { Routes } from '@angular/router';
import { WikiDesign } from './app/pages/wiki/wiki';
import { wikiChildRoutes } from './app/pages/wiki/wiki.routes'; // <-- importa filhos
import { Home } from './app/pages/home/home';

export const appRoutes: Routes = [
  { path: '', component: Home },
  {
    path: 'wiki',
    component: WikiDesign,
    children: wikiChildRoutes, // <-- CARREGA AS ROTAS INTERNAS
  },
  { path: '**', redirectTo: '' },
];
