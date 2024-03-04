import { Component, Injector } from '@angular/core';
import { AngTestComponent } from './ang-test.component';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import * as i0 from "@angular/core";
export class AngTestWebComponent {
    constructor(injector) {
        this.injector = injector;
        const angTestComponent = createCustomElement(AngTestComponent, { injector: this.injector });
        customElements.define('rhapsody-ang-test-web-component', angTestComponent);
    }
    static { this.ɵfac = function AngTestWebComponent_Factory(t) { return new (t || AngTestWebComponent)(i0.ɵɵdirectiveInject(i0.Injector)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AngTestWebComponent, selectors: [["my-element"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 0, template: function AngTestWebComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "rhapsody-ang-test");
        } }, dependencies: [CommonModule, AngTestComponent], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngTestWebComponent, [{
        type: Component,
        args: [{
                selector: 'my-element',
                standalone: true,
                imports: [CommonModule, AngTestComponent],
                template: '<rhapsody-ang-test></rhapsody-ang-test>',
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5nLXRlc3Qtd2ViLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYW5ndWxhci9hbmctdGVzdC9zcmMvbGliL2FuZy10ZXN0LXdlYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQVF4RCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1RixjQUFjLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDN0UsQ0FBQztvRkFKVSxtQkFBbUI7b0VBQW5CLG1CQUFtQjtZQUZuQixvQ0FBdUM7NEJBRHhDLFlBQVksRUFBRSxnQkFBZ0I7O3VGQUc3QixtQkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxRQUFRLEVBQUUseUNBQXlDO2FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmdUZXN0Q29tcG9uZW50IH0gZnJvbSAnLi9hbmctdGVzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWVsZW1lbnQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBBbmdUZXN0Q29tcG9uZW50XSxcbiAgdGVtcGxhdGU6ICc8cmhhcHNvZHktYW5nLXRlc3Q+PC9yaGFwc29keS1hbmctdGVzdD4nLFxufSlcbmV4cG9ydCBjbGFzcyBBbmdUZXN0V2ViQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBhbmdUZXN0Q29tcG9uZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudChBbmdUZXN0Q29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncmhhcHNvZHktYW5nLXRlc3Qtd2ViLWNvbXBvbmVudCcsIGFuZ1Rlc3RDb21wb25lbnQpO1xuICB9XG59XG4iXX0=