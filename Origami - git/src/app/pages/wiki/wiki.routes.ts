/* Routes: wikiChildRoutes
  Descrição: Rotas filhas para a seção 'wiki' (documentação/componentes).
*/
import { Routes } from '@angular/router';

import { WikiBemVindo } from '../../components/bemvindo/bemvindo';
import { WikiSobre } from '../../components/sobre/sobre';
import { WikiVisao } from '../../components/visao/visao';
import { WikiNegocios } from '../../components/negocios/negocios';
import { WikiDev } from '../../components/dev/dev';
import { WikiUtilizar } from '../../components/utilizar/utilizar';
import { WikiLinks } from '../../components/links/links';
import { WikiFaq } from '../../components/faq/faq';
import { WikiButton } from '../../components/button/button';
import { WikiIcon } from '../../components/iconbutton/iconbutton';
import { WikiInput } from '../../components/input/input';
import { WikiCheckbox } from '../../components/checkbox/checkbox';
import { WikiSwitch } from '../../components/switch/switch';
import { WikiCard } from '../../components/card/card';
import { WikiModal } from '../../components/modal/modal';
import { WikiBadge } from '../../components/badge/badge';
import { WikiTooltip } from '../../components/tooltip/tooltip';

export const wikiChildRoutes: Routes = [
  { path: '', component: WikiBemVindo },
  { path: 'bemvindo', component: WikiBemVindo },
  { path: 'sobre', component: WikiSobre },
  { path: 'visao', component: WikiVisao },
  { path: 'negocios', component: WikiNegocios },
  { path: 'dev', component: WikiDev },
  { path: 'utilizar', component: WikiUtilizar },
  { path: 'links', component: WikiLinks },
  { path: 'faq', component: WikiFaq },
  { path: 'button', component: WikiButton },
  { path: 'icon-button', component: WikiIcon },
  { path: 'input', component: WikiInput },
  { path: 'checkbox', component: WikiCheckbox },
  { path: 'switch', component: WikiSwitch },
  { path: 'card', component: WikiCard },
  { path: 'modal', component: WikiModal },
  { path: 'badge', component: WikiBadge },
  { path: 'tooltip', component: WikiTooltip },
];
