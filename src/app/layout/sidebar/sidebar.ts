import { Component, signal } from '@angular/core';
import { CardRoute } from './widgets/card-route/card-items';
import { NgClass } from '@angular/common';
import { items, routes } from './data-access/data-access';
import { SwitchLang } from './widgets/switch-lang/switch-lang';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-sidebar',
  imports: [CardRoute, NgClass, SwitchLang, TranslocoDirective],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  iscollapse = signal<boolean>(false);
  items = routes;
  items2 = items;

  toggle() {
    this.iscollapse.set(!this.iscollapse());
  }
}
