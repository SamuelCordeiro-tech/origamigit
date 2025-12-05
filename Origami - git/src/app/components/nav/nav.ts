/* Component: nav
  Descrição: Componente de navegação lateral que controla a busca e o menu.
*/
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface NavItem {
  label: string;
  route: string;
  keywords?: string[];
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavWiki {
  menuOpen = false;
  docsOpen = true;
  componentsOpen = false;

  // termo digitado na busca (vale pra docs e componentes)
  searchTerm = '';

  docs: NavItem[] = [
    {
      label: 'Bem Vindo à Origami',
      route: 'bemvindo',
      keywords: [
        'home',
        'início',
        'bem vindo',
        'inicial',
        'start',
        'começo',
        'apresentação',
        'welcome',
        'overview',
        'sumário',
        'introdução',
        'origami',
        'origami home',
        'página inicial',
        'primeira página',
      ],
    },
    {
      label: 'Introdução Geral',
      route: 'sobre',
      keywords: [
        'introdução',
        'geral',
        'sobre',
        'conceitos',
        'fundamentos',
        'princípios',
        'documentação',
        'guia inicial',
        'base',
        'core',
        'explicação',
        'informações',
        'o que é',
        'overview',
        'contexto',
        'sumário',
      ],
    },
    {
      label: 'Visão Geral Acessível',
      route: 'visao',
      keywords: [
        'acessibilidade',
        'visão',
        'a11y',
        'wcag',
        'acessível',
        'contraste',
        'leitor de tela',
        'screen reader',
        'acessibilidade digital',
        'ux',
        'usabilidade',
        'normas',
        'diretrizes',
      ],
    },
    {
      label: 'Para pessoas de Negócios',
      route: 'negocios',
      keywords: [
        'negócios',
        'produto',
        'business',
        'gestão',
        'liderança',
        'stakeholders',
        'planejamento',
        'visão executiva',
        'benefícios',
        'estratégia',
        'comunicação',
        'empresa',
        'valor',
        'pessoas de negócios',
      ],
    },
    {
      label: 'Para Desenvolvedores',
      route: 'dev',
      keywords: [
        'dev',
        'desenvolvedor',
        'técnico',
        'engenharia',
        'frontend',
        'backend',
        'programação',
        'código',
        'code',
        'angular',
        'typescript',
        'desenvolvimento',
        'api',
        'componentes',
        'documentação técnica',
        'tecnologia',
        'developer',
        'frontend dev',
        'fullstack',
      ],
    },
    {
      label: 'Como utilizar',
      route: 'utilizar',
      keywords: [
        'uso',
        'utilizar',
        'guia',
        'manual',
        'tutorial',
        'exemplos',
        'como usar',
        'como funciona',
        'documentação prática',
        'passo a passo',
        'aprender',
        'quickstart',
        'prática',
        'uso correto',
      ],
    },
    {
      label: 'Links Úteis',
      route: 'links',
      keywords: [
        'links',
        'referências',
        'externo',
        'materiais',
        'fontes',
        'documentos',
        'apoio',
        'suporte',
        'ajuda',
        'conteúdo',
        'links externos',
        'links úteis',
        'recursos',
        'extras',
      ],
    },
    {
      label: 'FAQ',
      route: 'faq',
      keywords: [
        'faq',
        'dúvidas',
        'perguntas',
        'questões',
        'respostas',
        'ajuda',
        'erro',
        'problema',
        'solução',
        'suporte',
        'frequente',
        'perguntas frequentes',
        'informações rápidas',
      ],
    },
  ];
  components: NavItem[] = [
    {
      label: 'Button',
      route: 'button',
      keywords: [
        'botão',
        'button',
        'cta',
        'ação',
        'click',
        'interação',
        'ui',
        'componentes',
        'interface',
        'botao',
        'btn',
        'primário',
        'secundário',
        'call to action',
        'interativo',
        'submit',
        'link button',
        'design system',
      ],
    },
    {
      label: 'Icon Button',
      route: 'icon-button',
      keywords: [
        'ícone',
        'icon',
        'botão',
        'ação rápida',
        'atalho',
        'ui',
        'componente',
        'botao icone',
        'icônico',
        'visual',
        'interativo',
        'mini botão',
        'ícone clicável',
        'design system',
      ],
    },
    {
      label: 'Input',
      route: 'input',
      keywords: [
        'input',
        'campo',
        'formulário',
        'form',
        'texto',
        'caixa de texto',
        'placeholder',
        'dados',
        'digitável',
        'form input',
        'campo de texto',
        'componente de formulário',
        'design system',
        'ux',
        'interação',
      ],
    },
    {
      label: 'Checkbox',
      route: 'checkbox',
      keywords: [
        'checkbox',
        'check',
        'seleção',
        'marcar',
        'opção',
        'toggle',
        'formulário',
        'checkbox ui',
        'marcado',
        'booleano',
        'seletor',
      ],
    },
    {
      label: 'Switch',
      route: 'switch',
      keywords: [
        'switch',
        'toggle',
        'alternar',
        'interruptor',
        'ativar',
        'desativar',
        'ligar',
        'desligar',
        'controle',
        'toggle button',
        'ativo',
        'inativo',
      ],
    },

    {
      label: 'Tooltip',
      route: 'tooltip',
      keywords: [
        'tooltip',
        'ajuda',
        'dica',
        'hover',
        'balão',
        'informação',
        'contexto',
        'explicação',
        'descrição',
        'mouse',
        'hover tooltip',
        'chip',
      ],
    },
  ];

  // filtro da documentação
  get filteredDocs(): NavItem[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.docs;

    return this.docs.filter((item) => {
      const label = item.label.toLowerCase();
      const keys = (item.keywords ?? []).join(' ').toLowerCase();
      return label.includes(term) || keys.includes(term);
    });
  }

  // filtro dos componentes
  get filteredComponents(): NavItem[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.components;

    return this.components.filter((item) => {
      const label = item.label.toLowerCase();
      const keys = (item.keywords ?? []).join(' ').toLowerCase();
      return label.includes(term) || keys.includes(term);
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  toggleDocs() {
    this.docsOpen = !this.docsOpen;
  }

  toggleComponents() {
    this.componentsOpen = !this.componentsOpen;
  }
}
