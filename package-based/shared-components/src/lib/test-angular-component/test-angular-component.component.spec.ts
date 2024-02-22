import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestAngularComponentComponent } from './test-angular-component.component';

describe('TestAngularComponentComponent', () => {
  let component: TestAngularComponentComponent;
  let fixture: ComponentFixture<TestAngularComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAngularComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestAngularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
