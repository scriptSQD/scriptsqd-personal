import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output,
} from "@angular/core";

@Directive({
    selector: "[isInViewport]",
})
export class IsVisibleDirective {
    @Output() insideViewport = new EventEmitter();
    constructor(private elementRef: ElementRef) {}

    @HostListener("body:scroll", ["$event"])
    public onScrollBy(): any {
        const windowHeight = window.innerHeight;
        const boundedRect =
            this.elementRef.nativeElement.getBoundingClientRect();

        if (boundedRect.top >= 0 && boundedRect.bottom <= windowHeight) {
            this.insideViewport.emit(true);
        } else {
            this.insideViewport.emit(false);
        }
    }
}
