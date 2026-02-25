import { Component } from '@angular/core';
import { HeaderDashboard } from '../components/header-dashboard/header-dashboard';
import { HeaderCard } from '../components/header-card/header-card';
import { CardBody } from '../components/card-body/card-body';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderDashboard, HeaderCard, CardBody],
  templateUrl: './dashboard.html',
})
export class Dashboard {}
