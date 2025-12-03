/* Page: home-principal
   Descrição: Página inicial do projeto (hero + equipe).
*/
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-principal.html',
  styleUrl: './home-principal.css',
})
export class HomePrincipal {}
