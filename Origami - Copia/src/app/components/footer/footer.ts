/* Component: footer
  Descrição: Componente de rodapé compartilhado usado em todas as páginas.
*/
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  currentYear = new Date().getFullYear();
}
