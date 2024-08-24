import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  units = signal(['Meter', 'Kilometer', 'Centimeter', 'Millimeter']);
  inputValue = signal(0);
  fromUnit = signal('Meter');
  toUnit = signal('Meter');
  result = signal<number | null>(null);
  errorMessage = signal<string | null>(null);

  meta = inject(Meta);

  constructor() {
    this.meta.addTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.meta.addTag({
      rel: 'icon',
      type: 'image/x-icon',
      href: 'favicon.ico',
    });
    this.meta.addTag({
      rel: 'canonical',
      href: 'https://unit-converter-app-manthanank.vercel.app/',
    });
    this.meta.addTag({ property: 'og:title', content: 'Unit Converter App' });
    this.meta.addTag({ name: 'author', content: 'Manthan Ankolekar' });
    this.meta.addTag({ name: 'keywords', content: 'angular' });
    this.meta.addTag({ name: 'robots', content: 'index, follow' });
    this.meta.addTag({
      property: 'og:description',
      content:
        'A simple unit converter app built using Angular that converts units like meter, kilometer, and more.',
    });
    this.meta.addTag({
      property: 'og:image',
      content: 'https://unit-converter-app-manthanank.vercel.app/image.jpg',
    });
    this.meta.addTag({
      property: 'og:url',
      content: 'https://unit-converter-app-manthanank.vercel.app/',
    });
  }

  convert() {
    if (!this.validateInput()) {
      return;
    }

    const conversionRates: { [key: string]: number } = {
      Meter: 1,
      Kilometer: 0.001,
      Centimeter: 100,
      Millimeter: 1000,
    };

    const fromRate = conversionRates[this.fromUnit()];
    const toRate = conversionRates[this.toUnit()];

    this.result.set((this.inputValue() * fromRate) / toRate);
  }

  reset() {
    this.inputValue.set(0);
    this.fromUnit.set('Meter');
    this.toUnit.set('Meter');
    this.result.set(null);
    this.errorMessage.set(null);
  }

  swapUnits() {
    const temp = this.fromUnit();
    this.fromUnit.set(this.toUnit());
    this.toUnit.set(temp);
  }

  validateInput(): boolean {
    if (this.inputValue() < 0) {
      this.errorMessage.set('Input value cannot be negative.');
      return false;
    }
    this.errorMessage.set(null);
    return true;
  }
}
