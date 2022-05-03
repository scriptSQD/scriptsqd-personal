import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { LoaderSpinnerComponent } from "../components/loader-spinner/loader-spinner.component";

@Directive({
    selector: "[isloading]",
})
export class IsloadingDirective {
    constructor(
        private tempRef: TemplateRef<any>,
        private ref: ViewContainerRef
    ) {}

    @Input("isloading") set isloading(isloading: boolean | null) {
        console.log("isloading now:", isloading);
        if (isloading || isloading === null) {
            this.ref.clear();
            this.ref.createComponent(LoaderSpinnerComponent);
        } else {
            this.ref.clear();
            this.ref.createEmbeddedView(this.tempRef);
        }
    }
}
