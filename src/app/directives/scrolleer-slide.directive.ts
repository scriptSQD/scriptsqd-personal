import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: "[scrolleerSlide]",
})
export class ScrolleerSlideDirective {
    constructor(public template: TemplateRef<any>) {}
}
