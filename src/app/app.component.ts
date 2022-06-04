import { Component } from '@angular/core';
import { Item } from './models/item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'practica';

  items: Item[] = [
    {
      icon: 'open',
      label: 'Open',
      disabled: false
    },
    {
      icon: 'stats',
      label: 'Stats',
      disabled: false
    },
    {
      icon: 'earphone',
      label: 'Phone',
      disabled: false
    },
    {
      icon: 'question-sign',
      label: 'Ayuda / Contacto',
      disabled: false,
      isHelp: true
    },
    {
      icon: 'arrow-left',
      label: 'Cerrar sesión',
      disabled: false,
      route: 'cerrar-sesion',
      data: {
        persona: {
          id: 1,
          name: 'Pedro'
        }
      }
    }
  ];

  navigate(item: Item) {
    console.log(item);
  }

}
