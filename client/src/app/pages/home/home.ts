import { Component } from '@angular/core';
import { HomeCard } from '../../shared/components/home-card/home-card';

@Component({
  selector: 'app-home',
  imports: [HomeCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css', '../../shared/styles/default_page.css']
})
export class Home { }
