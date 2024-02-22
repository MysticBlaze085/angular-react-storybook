import { Component, Injector, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Your component template goes here -->
    <p>angular-ui works!</p>
  `,
  styles: [`
    /* Your component styles go here */
    :host {
      display: block;
    }
  `]
})
export class AngularUiComponent implements OnChanges, OnDestroy {
  @Input() content!: string; // Example input property

  constructor(private injector: Injector) {
    // Check if the custom element has already been defined
    if (!customElements.get('rhapsody-angular-ui')) {
      // Register the component as a custom element
      const AngularUiElement = createCustomElement(AngularUiComponent, { injector: this.injector });
      customElements.define('rhapsody-angular-ui', AngularUiElement);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Handle input changes
  }

  ngOnDestroy(): void {
    // Cleanup
  }
}


