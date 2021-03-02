// Angular
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

export interface OffcanvasOptions {
	baseClass: string;
	overlay?: boolean;
	closeBy: string;
	toggleBy?: any;
}

/**
 * Setup off Convas
 */
@Directive({
	selector: '[appOffcanvas]',
	exportAs: 'appOffcanvas',
})
export class OffcanvasDirective implements AfterViewInit {
	// Public properties
	@Input() options: OffcanvasOptions;
	// Private properties
	private offcanvas: any;

	/**
	 * Directive Constructor
	 * @param el: ElementRef
	 */
	constructor(private el: ElementRef) { }

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * After view init
	 */
	ngAfterViewInit(): void {
		// setTimeout(() => {
		// 	this.offcanvas = new AppOffcanvas(this.el.nativeElement, this.options);
		// });
	}

	/**
	 * Returns the offCanvas
	 */
	getOffcanvas() {
		return this.offcanvas;
	}
}
