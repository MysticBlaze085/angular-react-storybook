import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactComponents } from '../../../libs/combined-libs/index';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './react-wrapper.component.html',
  styleUrl: './react-wrapper.component.scss'
})
export class ReactWrapperComponent implements OnInit {
  @Input() name?: string;

  ngOnInit() {
    const container = this.elementRef.nativeElement.querySelector('#reactContainer');
    if (container && (window as any).MyReactComponent) {
      const MyReactComponent = (window as any).ReactComponents;
      MyReactComponent(container, { name: this.name });
    } else {
      console.error('Container not found or MyReactComponent not available globally.');
    }
  }

  constructor(private elementRef: ElementRef) { }
}
