import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
@Component({
  selector: 'app-header-card',
  imports: [ButtonModule, DrawerModule],
  templateUrl: './header-card.html',
  styleUrl: './header-card.css',
})
export class HeaderCard {
  title = input('');
  text = input('');
  AddIcon = input<boolean>(true);
  visible: boolean = false;
}
