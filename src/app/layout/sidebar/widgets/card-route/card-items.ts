import { Component, Input, input } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { RoleDirective } from '../../../../Core/directives/role-directive';

interface Iroutes {
  url: string;
  label: string;
  icon: string;
}
@Component({
  selector: 'app-card-items',
  imports: [TranslocoDirective, RouterLink, RouterLinkActive, NgClass, RoleDirective],
  templateUrl: './card-items.html',
})
export class CardRoute {
  items = input<Iroutes[]>();
  //items = routes;
  @Input() color!: string;
  @Input() colorActive!: string;

  // color = input<string>('');
  iscollapsed = input();
}
