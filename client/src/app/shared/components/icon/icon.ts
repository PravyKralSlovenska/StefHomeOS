import { Component, computed, input } from '@angular/core';

type IconSize = "s" | "m" | "l" | 'xl' | 'xxl' | 'xxxl';

const ICON_SIZE_MAP: Record<IconSize, string> = {
  s: '1rem',
  m: '2rem',
  l: '3rem',
  xl: '4rem',
  xxl: '5rem',
  xxxl: '6rem',
};

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  host: {
    '[style.--icon_size]': 'icon_size()',
  }
})
export class Icon {
  type = input.required<string>();
  size = input<IconSize>("l");

  icon_size = computed(() => ICON_SIZE_MAP[this.size()]);
};
