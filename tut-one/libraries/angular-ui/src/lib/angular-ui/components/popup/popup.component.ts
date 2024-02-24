import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  standalone: true,
  selector: 'my-popup',
  template: `
    <span>Popup: {{ message }}</span>
    <button type="button" (click)="closed.next()">&#x2716;</button>
  `,
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ]),
  ],
  styles: [
    `
      :host {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: #009cff;
        height: 48px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid black;
        font-size: 24px;
      }

      button {
        border-radius: 50% !important;
        background-color: rgb(34, 36, 38);
        border-color: initial;
        color: rgb(232, 230, 227);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
      }
    `,
  ],
})
export class PopupComponent {
  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get message(): string {
    return this._message;
  }
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }
  private _message = '';

  @Output()
  closed = new EventEmitter<void>();
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/