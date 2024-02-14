import { Component, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { PopupService } from "./popup.service";
import { PopupComponent } from "./popup.component";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
      <input #input value="Message" />
      <button type="button" (click)="popup.showAsComponent(input.value)">Show as component</button>
      <button type="button" (click)="popup.showAsElement(input.value)">Show as element</button>
    `,
    styleUrl: './popup.component.css',
    providers: [PopupService],
    imports: [PopupComponent],
  })
  export class PopupContainerComponent {
    popupElementName = 'popup-element';
    popupElement: HTMLElement | null = null;
  
    constructor(
      injector: Injector,
      public popup: PopupService,
    ) {
      // Check if the custom element has already been defined
      if (!customElements.get(this.popupElementName)) {
        // Convert `PopupComponent` to a custom element if it hasn't been defined yet.
        const PopupElement = createCustomElement(PopupComponent, {injector});
        // Register the custom element with the browser.
        customElements.define(this.popupElementName, PopupElement);
      }
    }
  }
  