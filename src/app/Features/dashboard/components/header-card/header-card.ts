import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { AddButton } from '../../../../Core/buttons/add-button/add-button';
import { AddProjectButton } from '../../../../Core/buttons/add-project/add-project-button/add-project-button';

@Component({
  selector: 'app-header-card',
  imports: [ButtonModule, DrawerModule, AddButton, AddProjectButton],
  templateUrl: './header-card.html',
  styleUrl: './header-card.css',
})
export class HeaderCard {
  title = input('');
  text = input('');
  typeAdd = input('');
  AddIcon = input<boolean>(true);
  visible: boolean = false;
}
