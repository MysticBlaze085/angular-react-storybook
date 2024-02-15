import {ApplicationRef, createComponent, EnvironmentInjector, Injectable} from '@angular/core';
import {NgElement, WithProperties} from '@angular/elements';
import {PopupComponent} from './popup.component';

@Injectable()
export class PopupService {
  constructor(
    private injector: EnvironmentInjector,
    private applicationRef: ApplicationRef,
  ) {}

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  showAsComponent(message: string) {
    // Create element
    const popup = document.createElement('popup-component');

    // Create the component and wire it up with the element
    const popupComponentRef = createComponent(PopupComponent, {
      environmentInjector: this.injector,
      hostElement: popup,
    });

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listen to the close event
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    popupComponentRef.instance.message = message;

    // Add to the DOM
    document.body.appendChild(popup);
  }

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement(message: string) {
    if (!document.querySelector('popup-element')) {
      // Create element
      const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement(
        'popup-element',
      ) as any;

      // Listen to the close event
      popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
      const isCheck = customElements.get('popup-element');
      console.debug('IsChecker service: ', isCheck)

      // Set the message
      popupEl.message = message;

      // Add to the DOM
      document.body.appendChild(popupEl);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/