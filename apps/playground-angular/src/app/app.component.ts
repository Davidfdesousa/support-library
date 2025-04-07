import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements AfterViewInit {
  title = 'playground-angular';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const themes = {
        light: 'https://cdnexamples.blob.core.windows.net/storybook/cdn/tokens/css/variables.light.css',
        dark: 'https://cdnexamples.blob.core.windows.net/storybook/cdn/tokens/css/variables.dark.css',
        contrast:
          'https://cdnexamples.blob.core.windows.net/storybook/cdn/tokens/css/variables.contrast.css',
      };

      const styleEl = document.createElement('link');
      styleEl.rel = 'stylesheet';
      styleEl.id = 'theme-tokens';
      styleEl.href = themes['light']; // Tema default
      document.head.appendChild(styleEl);

      document.documentElement.className = 'light'; // Aplica classe default

      const radios = document.querySelectorAll('input[name="theme"]');
      radios.forEach((radio) => {
        radio.addEventListener('change', (event) => {
          const value = (event.target as HTMLInputElement).value;
          document.documentElement.className = value;
          styleEl.href = themes[value as keyof typeof themes];
        });
      });
    }
  }
}
