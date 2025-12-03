/* Page: wiki
   Descrição: Container principal da documentação (aplica `NavWiki` e `RouterOutlet`).
*/
import { NavWiki } from '../../components/nav/nav';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [NavWiki, RouterOutlet],
  styleUrls: ['./wiki.css'],
  templateUrl: './wiki.html',
})
export class WikiDesign {}
