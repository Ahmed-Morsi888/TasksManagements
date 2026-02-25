import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Pipe({
  name: 'localNumber',
  pure: false,
})
export class LocalNumberPipe implements PipeTransform {
  private _translocoService = inject(TranslocoService);
  transform(value: number | string): string {
    if (value == null) {
      return '';
    }
    const lang = this._translocoService.getActiveLang();
    const local = lang === 'ar' ? 'ar-EG' : 'en-US';

    return new Intl.NumberFormat(local).format(+value);
  }
}
