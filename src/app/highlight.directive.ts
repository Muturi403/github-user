import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective {
	constructor(private elem: ElementRef) {
		this.elem.nativeElement.style.backgroundColor = 'yellow';
	}
}
