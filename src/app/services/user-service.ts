import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom, tap } from 'rxjs';

export interface Iuser {
  name: string;
  role: string;
  permisions: string[];
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _httpclient = inject(HttpClient);
  private getpermissions = signal<string[]>([]);
  readonly permisions = this.getpermissions.asReadonly();

  loadUser() {
    return firstValueFrom(
      this._httpclient
        .get<Iuser>(`http://localhost:3000/user`)
        .pipe(tap((res) => this.getpermissions.set(res.permisions))),
    );
  }
}
