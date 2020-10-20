// Angular
import { ElementRef, Injectable } from '@angular/core';
import { animate, AnimationBuilder, style } from '@angular/animations';

@Injectable()
export class SplashScreenService {
	// Private properties
	private el: ElementRef;
	private stopped: boolean;

	/**
	 * Service constctuctor
	 *
	 * @param animationBuilder: AnimationBuilder
	 */
	constructor(private animationBuilder: AnimationBuilder) {
	}

	/**
	 * Init
	 *
	 * @param element: ElementRef
	 */
	init(element: ElementRef) {
		this.el = element;
	}

	/**
	 * Hide
	 */
	hide() {
		if (this.stopped) {
			return;
		}
	}
}
