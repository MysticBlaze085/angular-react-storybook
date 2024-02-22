import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    template: `<ng-container *ngComponentOutlet="MyReactComponent"></ng-container>`,
  })
  export class ReactWrapperComponent {
    MyReactComponent = MyReactComponent;
  }