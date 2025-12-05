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
        'bem-vindo',
        'inicial',
        'start',
        'começo',
        'apresentação',
        'apresentacao',
        'welcome',
        'overview',
        'sumário',
        'sumario',
        'introdução',
        'introducao',
        'origami',
        'origami home',
        'página inicial',
        'pagina inicial',
        'primeira página',
        'primeira pagina',
        'guia rápido',
        'guia rapido',
        'instrucoes',
        'introducao rapida',
        'visao geral',
        'overview geral',
      ],
    },
    {
      label: 'Introdução Geral',
      route: 'sobre',
      keywords: [
        'introdução',
        'introducao',
        'geral',
        'sobre',
        'conceitos',
        'fundamentos',
        'princípios',
        'principios',
        'documentação',
        'documentacao',
        'guia inicial',
        'guia',
        'base',
        'core',
        'explicação',
        'explicacao',
        'informações',
        'informacoes',
        'o que é',
        'oquee',
        'overview',
        'contexto',
        'sumário',
        'sumario',
        'referência',
        'referencia',
        'introducao detalhada',
      ],
    },
    {
      label: 'Visão Geral Acessível',
      route: 'visao',
      keywords: [
        'acessibilidade',
        'acessivel',
        'acessível',
        'visão',
        'visao',
        'a11y',
        'wcag',
        'contraste',
        'leitor de tela',
        'leitordetela',
        'screen reader',
        'acessibilidade digital',
        'ux',
        'usabilidade',
        'normas',
        'diretrizes',
        'acessibilidade web',
        'acessibilidade ui',
        'acessibilidade ux',
        'inclusão',
        'acesso',
        'boa prática',
        'boas praticas',
        'legibilidade',
        'contrast ratio',
      ],
    },
    {
      label: 'Para pessoas de Negócios',
      route: 'negocios',
      keywords: [
        'negócios',
        'negocios',
        'produto',
        'business',
        'gestão',
        'gestao',
        'liderança',
        'lideranca',
        'stakeholders',
        'planejamento',
        'visão executiva',
        'visao executiva',
        'benefícios',
        'beneficios',
        'estratégia',
        'estrategia',
        'comunicação',
        'comunicacao',
        'empresa',
        'valor',
        'pessoas de negócios',
        'stakeholder',
        'case de negócio',
        'ROI',
        'retorno',
        'gestão de produto',
      ],
    },
    {
      label: 'Para Desenvolvedores',
      route: 'dev',
      keywords: [
        'dev',
        'desenvolvedor',
        'desenvolvedores',
        'técnico',
        'tecnico',
        'engenharia',
        'frontend',
        'backend',
        'programação',
        'programacao',
        'código',
        'codigo',
        'code',
        'angular',
        'typescript',
        'ts',
        'desenvolvimento',
        'api',
        'componentes',
        'component',
        'documentação técnica',
        'documentacao tecnica',
        'tecnologia',
        'developer',
        'frontend dev',
        'fullstack',
        'stack',
        'sdk',
        'integração',
        'integraçao',
      ],
    },
    {
      label: 'Como utilizar',
      route: 'utilizar',
      keywords: [
        'uso',
        'utilizar',
        'como usar',
        'guia',
        'guia prático',
        'guia pratico',
        'manual',
        'tutorial',
        'exemplos',
        'exemplo',
        'documentação prática',
        'documentacao pratica',
        'passo a passo',
        'aprender',
        'quickstart',
        'prática',
        'pratica',
        'uso correto',
        'como funciona',
        'demonstração',
        'demonstracao',
        'receitas',
      ],
    },
    {
      label: 'Links Úteis',
      route: 'links',
      keywords: [
        'links',
        'referências',
        'referencias',
        'externo',
        'materiais',
        'fontes',
        'documentos',
        'documentacao',
        'apoio',
        'suporte',
        'ajuda',
        'conteúdo',
        'conteudo',
        'links externos',
        'links úteis',
        'links uteis',
        'recursos',
        'extras',
        'bibliografia',
        'leitura adicional',
        'referencias externas',
      ],
    },
    {
      label: 'FAQ',
      route: 'faq',
      keywords: [
        'faq',
        'frequently asked questions',
        'dúvidas',
        'duvidas',
        'perguntas',
        'questões',
        'questoes',
        'respostas',
        'ajuda',
        'erro',
        'problema',
        'solução',
        'solucao',
        'suporte',
        'frequente',
        'perguntas frequentes',
        'faq rápido',
        'faq rapido',
        'respostas rápidas',
        'respostas rapidas',
        'troubleshooting',
      ],
    },
  ];

  components: NavItem[] = [
    {
      label: 'Button',
      route: 'button',
      keywords: [
        'botão',
        'botao',
        'button',
        'btn',
        'cta',
        'call to action',
        'ação',
        'acao',
        'click',
        'clique',
        'interação',
        'interacao',
        'ui',
        'ux',
        'componentes',
        'interface',
        'primário',
        'primario',
        'secundário',
        'secundario',
        'interativo',
        'submit',
        'link button',
        'design system',
        'estado',
        'disabled',
        'icon button',
      ],
    },
    {
      label: 'Icon Button',
      route: 'icon-button',
      keywords: [
        'ícone',
        'icone',
        'icon',
        'botão',
        'botao',
        'ícone clicável',
        'icone clicavel',
        'ação rápida',
        'acao rapida',
        'atalho',
        'ui',
        'ux',
        'componente',
        'botao icone',
        'icon button',
        'icônico',
        'iconico',
        'visual',
        'interativo',
        'mini botão',
        'mini botao',
        'glyph',
      ],
    },
    {
      label: 'Input',
      route: 'input',
      keywords: [
        'input',
        'campo',
        'campo de texto',
        'formulário',
        'formulario',
        'form',
        'texto',
        'caixa de texto',
        'placeholder',
        'dados',
        'digitável',
        'digitavel',
        'form input',
        'componente de formulário',
        'componente de formulario',
        'design system',
        'ux',
        'interação',
        'interacao',
        'validação',
        'autocomplete',
        'aria',
        'label',
      ],
    },
    {
      label: 'Checkbox',
      route: 'checkbox',
      keywords: [
        'checkbox',
        'check',
        'seleção',
        'selecao',
        'marcar',
        'marcado',
        'opção',
        'opcao',
        'toggle',
        'alternativa',
        'formulário',
        'formulario',
        'checkbox ui',
        'booleano',
        'boolean',
        'seletor',
        'multiple',
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
        'on off',
        'booleano',
        'estado',
      ],
    },
    {
      label: 'Tooltip',
      route: 'tooltip',
      keywords: [
        'tooltip',
        'ajuda',
        'dica',
        'sugestão',
        'sugestao',
        'hover',
        'balão',
        'balao',
        'informação',
        'informacao',
        'contexto',
        'explicação',
        'explicacao',
        'descrição',
        'descricao',
        'mouse',
        'hover tooltip',
        'chip',
        'hint',
        'popover',
        'tooltip acessível',
      ],
    },
  ];
    // normaliza texto: remove acentos, converte para lower case
    private normalize(text: string): string {
      return (text ?? '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    }

    private itemSearchable(item: NavItem): string {
      return this.normalize(item.label + ' ' + (item.keywords ?? []).join(' '));
    }

  // filtro da documentação
  get filteredDocs(): NavItem[] {
    const raw = this.searchTerm.trim();
    if (!raw) return this.docs;

    const tokens = this.normalize(raw).split(/\s+/).filter(Boolean);

    return this.docs.filter((item) => {
      const searchable = this.itemSearchable(item);
      return tokens.every((t) => searchable.includes(t));
    });
  }

  // filtro dos componentes
  get filteredComponents(): NavItem[] {
    const raw = this.searchTerm.trim();
    if (!raw) return this.components;

    const tokens = this.normalize(raw).split(/\s+/).filter(Boolean);

    return this.components.filter((item) => {
      const searchable = this.itemSearchable(item);
      return tokens.every((t) => searchable.includes(t));
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
