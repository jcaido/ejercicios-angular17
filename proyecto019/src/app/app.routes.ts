import { Routes } from '@angular/router';
import { AmericaComponent } from './america/america.component';
import { ChileComponent } from './america/chile/chile.component';
import { UruguayComponent } from './america/uruguay/uruguay.component';
import { ArgentinaComponent } from './america/argentina/argentina.component';
import { EuropaComponent } from './europa/europa.component';
import { EspanaComponent } from './europa/espana/espana.component';
import { ItaliaComponent } from './europa/italia/italia.component';
import { FranciaComponent } from './europa/francia/francia.component';

export const routes: Routes = [
  {
    path: 'america',
    component: AmericaComponent,
    children: [
      {
        path: 'chile',
        component: ChileComponent
      },
      {
        path: 'uruguay',
        component: UruguayComponent
      },
      {
        path: 'argentina',
        component: ArgentinaComponent
      }
    ]
  },
  {
    path: 'europa',
    component: EuropaComponent,
    children: [
      {
        path: 'espana',
        component: EspanaComponent
      },
      {
        path: 'italia',
        component: ItaliaComponent
      },
      {
        path: 'francia',
        component: FranciaComponent
      }
    ]
  }
];
