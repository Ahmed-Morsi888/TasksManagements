import { Iuser } from './../../services/user-service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { TranslocoDirective } from '@jsverse/transloco';
@Component({
  selector: 'app-navbar',
  imports: [TranslocoDirective],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  userData = signal<Iuser | null>(null);

  _userService = inject(UserService);
}
