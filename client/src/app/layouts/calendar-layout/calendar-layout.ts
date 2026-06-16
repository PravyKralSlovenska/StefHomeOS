import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-calendar-layout',
  imports: [RouterOutlet],
  templateUrl: './calendar-layout.html',
  styleUrls: ['./calendar-layout.css', '../../shared/styles/default_layout.css']
})
export class CalendarLayout { }
