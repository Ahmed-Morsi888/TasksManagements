import { Component, inject, OnInit, signal } from '@angular/core';
import { DashboardService } from '../../service/dashboard-service';
import { IdashboardOverview } from '../../models/dashboardModel';
import { TranslocoDirective } from '@jsverse/transloco';
import { LocalNumberPipe } from '../../../../Core/pipes/local-number-pipe';

@Component({
  selector: 'app-header-dashboard',
  imports: [TranslocoDirective, LocalNumberPipe],
  templateUrl: './header-dashboard.html',
})
export class HeaderDashboard implements OnInit {
  data = signal<IdashboardOverview[]>([]);
  private _dashboardService = inject(DashboardService);

  ngOnInit() {
    this.getData();
  }

  getData() {
    return this._dashboardService.getDashboardOverview().subscribe({
      next: (res) => this.data.set(res),
      error: (err) => console.log(err),
    });
  }
}
