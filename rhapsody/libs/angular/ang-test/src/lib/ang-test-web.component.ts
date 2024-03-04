import { Component, Injector } from '@angular/core';

import { AngTestComponent } from './ang-test.component';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'my-element',
  standalone: true,
  imports: [CommonModule, AngTestComponent],
  template: '<rhapsody-ang-test></rhapsody-ang-test>',
})
export class AngTestWebComponent {
  constructor(private injector: Injector) {
    const angTestComponent = createCustomElement(AngTestComponent, { injector: this.injector });
    customElements.define('rhapsody-ang-test-web-component', angTestComponent);
  }
}
