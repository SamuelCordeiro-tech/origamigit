/* Page: home-principal
   Descrição: Página inicial do projeto (hero + equipe).
*/
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-principal-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-principal.html',
  styleUrl: './home-principal.css',
})
export class HomePrincipal implements OnInit, OnDestroy {
  private originalTitle: string = '';
  private originalFavicon: string = '';

  constructor(private titleService: Title) {}

  ngOnInit() {
    // Salva o título e favicon originais
    this.originalTitle = document.title;
    const faviconElement = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (faviconElement) {
      this.originalFavicon = faviconElement.href;
    }

    // Define o título da página
    this.titleService.setTitle('Ecossistema Origami');

    // Define o favicon dinamicamente
    this.setFavicon('https://raw.githubusercontent.com/programisan/origami/refs/heads/main/Group%2014.png');
  }

  ngOnDestroy() {
    // Restaura o título original
    this.titleService.setTitle(this.originalTitle);

    // Restaura o favicon original
    if (this.originalFavicon) {
      this.setFavicon(this.originalFavicon);
    }
  }

  private setFavicon(url: string) {
    // Remove o favicon existente
    let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.remove();
    }

    // Cria um novo elemento de favicon
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = url;
    favicon.type = 'image/x-icon';
    document.head.appendChild(favicon);

    // Force refresh do favicon no navegador (método alternativo)
    favicon.href = url + '?' + new Date().getTime();
  }
}
