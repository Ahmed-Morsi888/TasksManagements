import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-wrapper-layout',
  imports: [Sidebar, Navbar, RouterOutlet],
  templateUrl: './wrapper-layout.html',
})
export class WrapperLayout {}
