import { IdashboardOverview } from './../models/dashboardModel';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  _http = inject(HttpClient);

  getDashboardOverview(): Observable<IdashboardOverview[]> {
    return this._http.get<IdashboardOverview[]>(`http://localhost:3000/overViewHeader`);
  }
}
