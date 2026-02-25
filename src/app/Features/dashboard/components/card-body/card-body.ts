import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

export interface Idata {
  headertext: string;
  fottertextLeftL: string;
  fottertextright: string;
}
@Component({
  selector: 'app-card-body',
  imports: [NgClass],
  templateUrl: './card-body.html',
  styleUrl: './card-body.css',
})
export class CardBody {
  leftIcon = input<boolean>(true);
  rightIcon = input<boolean>(true);
  footerTextIcon = input<boolean>(true);
  data = input<Idata[]>([]);
  classes = input<string>('  ');
  stylebox = input<string>('');
}
