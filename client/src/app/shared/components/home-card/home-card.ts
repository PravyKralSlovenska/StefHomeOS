import { Component, input } from '@angular/core';
import { Router } from '@angular/router';

interface I_HomeCard {
  title: string,
  svg_image: string,
  router_path: string
};

const CARD_MAP: Record<string, I_HomeCard> = {
  home: { title: 'Home', svg_image: 'home', router_path: 'home' },
  cloud: { title: 'Cloud', svg_image: 'cloud', router_path: 'cloud' },
  calendar: { title: 'Calendar', svg_image: 'calendar', router_path: 'calendar' },
  notes: { title: 'Notes', svg_image: 'notes', router_path: 'notes' },
  ai: { title: 'AI', svg_image: 'ai', router_path: 'ai' },
  email: { title: 'Email', svg_image: 'email', router_path: 'email' },
  books: { title: 'Books', svg_image: 'book', router_path: 'books' },
  journal: { title: 'Journal', svg_image: 'journal', router_path: 'journal' },
  'smart home': { title: 'Smart Home', svg_image: 'smart-home', router_path: 'smart-home' },
  'habit tracker': { title: 'Habit Tracker', svg_image: 'habit-tracker', router_path: 'habit-tracker' },
  ideas: { title: 'Ideas', svg_image: 'lightbulb', router_path: 'ideas' },
  tasks: { title: 'Tasks', svg_image: 'tasks', router_path: 'tasks' },
  encyclopedia: { title: 'Encyclopedia', svg_image: 'encyclopedia', router_path: 'encyclopedia' },
};

@Component({
  selector: 'app-home-card',
  imports: [],
  templateUrl: './home-card.html',
  styleUrl: './home-card.css',
})
export class HomeCard {
  constructor(private router: Router) { }

  card_type = input.required<string>();

  card: I_HomeCard = {
    title: '',
    svg_image: '',
    router_path: ''
  }

  ngOnInit() {
    this.card = this.set_card(this.card_type());
  }

  onClick() {
    console.log(this.card.title)
    this.router.navigate([this.card.router_path]);
  }

  set_card(card_type: string): I_HomeCard {
    const def: I_HomeCard | undefined = CARD_MAP[card_type.toLowerCase()];

    if (!def) {
      return {
        title: "Error",
        svg_image: "svg/circle_xmark.svg",
        router_path: "error"
      };
    }

    return {
      ...def,
      svg_image: `svg/${def.svg_image}.svg`
    }
  }
}

