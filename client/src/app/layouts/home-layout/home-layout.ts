import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  imports: [RouterOutlet],
  templateUrl: './home-layout.html',
  styleUrls: ['./home-layout.css', '../../shared/styles/default_layout.css']
})
export class HomeLayout { }
