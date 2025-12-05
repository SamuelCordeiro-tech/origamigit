/* Page: wiki
   Descrição: Container principal da documentação (aplica `NavWiki` e `RouterOutlet`).
*/
import { NavWiki } from '../../components/nav/nav';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [NavWiki, RouterOutlet],
  styleUrls: ['./wiki.css'],
  templateUrl: './wiki.html',
})
export class WikiDesign implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private originalTitle: string = '';

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // Salva o título original
    this.originalTitle = document.title;

    // Monitora mudanças de navegação
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.updateTitleFromRoute();
      });

    // Atualiza o título na primeira carga
    this.updateTitleFromRoute();
  }

  ngOnDestroy() {
    // Restaura o título original ao sair do wiki
    this.titleService.setTitle(this.originalTitle);
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateTitleFromRoute() {
    // Obtém a rota filha ativa
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    // Extrai o nome da rota (ex: 'button', 'input', 'bemvindo')
    const routePath = route.snapshot.url[0]?.path || 'wiki';

    // Cria um título legível a partir do caminho (ex: 'Button' de 'button')
    const titleMap: { [key: string]: string } = {
      'bemvindo': 'Bem-vindo',
      'sobre': 'Sobre',
      'visao': 'Visão',
      'negocios': 'Negócios',
      'dev': 'Desenvolvimento',
      'utilizar': 'Como Utilizar',
      'links': 'Links',
      'faq': 'Perguntas Frequentes',
      'button': 'Button',
      'icon-button': 'Icon Button',
      'input': 'Input',
      'checkbox': 'Checkbox',
      'switch': 'Switch',
      'card': 'Card',
      'modal': 'Modal',
      'badge': 'Badge',
      'tooltip': 'Tooltip',
    };

    const title = titleMap[routePath] || routePath.charAt(0).toUpperCase() + routePath.slice(1);
    this.titleService.setTitle(`${title} - Wiki`);
  }
}
