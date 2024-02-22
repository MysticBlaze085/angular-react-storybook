import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-test-angular-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-angular-component.component.html',
  styleUrl: './test-angular-component.component.css',
})
export class TestAngularComponentComponent {}
