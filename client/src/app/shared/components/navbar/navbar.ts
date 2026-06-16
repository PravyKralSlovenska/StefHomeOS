import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { ThemeButton } from '../theme-button/theme-button';
import { HomeButton } from '../home-button/home-button';
import { Dots } from '../dots/dots';

@Component({
  selector: 'app-navbar',
  imports: [Menu, ThemeButton, HomeButton, Dots],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar { }
