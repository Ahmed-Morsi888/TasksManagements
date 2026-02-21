import { Component, inject, input, Renderer2, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-switch-lang',
  imports: [NgClass],
  templateUrl: './switch-lang.html',
})
export class SwitchLang {
  _translocoServic = inject(TranslocoService);
  render = inject(Renderer2);
  constructor() {}
  iscollapse = input();
  switchlang(lang: string) {
    this._translocoServic.load(lang).subscribe(() => {
      this._translocoServic.setActiveLang(lang);
      this.render.setAttribute(document.documentElement, `dir`, lang === `ar` ? `rtl` : `ltr`);
    });
  }
}
