


// Angular
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

export interface ToggleOptions {
	target?: string;
	targetState?: string;
	togglerState?: string;
}

/**
 * Toggle
 */
@Directive({
	selector: '[appToggle]',
	exportAs: 'appToggle'
})
export class ToggleDirective implements AfterViewInit {
	// Public properties
	@Input() options: ToggleOptions;
	toggle: any;


	constructor(private el: ElementRef) { }



	ngAfterViewInit(): void {
		// this.toggle = new AppToggle(this.el.nativeElement, this.options);
	}
}
