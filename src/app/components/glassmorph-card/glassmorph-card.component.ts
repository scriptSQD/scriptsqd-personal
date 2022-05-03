import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from "@angular/core";

@Component({
    selector: "GlassmorphCard",
    templateUrl: "./glassmorph-card.component.html",
    styleUrls: ["./glassmorph-card.component.scss"],
})
export class GlassmoprhCardComponent implements AfterViewInit {
    constructor() {}

    @ViewChild("card") card!: ElementRef<HTMLElement>;

    @Input("gm-image")
    image?: string;
    @Input("gm-imageAlt") imageAlt?: string;
    @Input("gm-text") text?: string;
    @Input("gm-tooltip") tooltip?: string;
    @Input("gm-size") size?: number;

    ngAfterViewInit(): void {
        if (this.size) {
            this.card.nativeElement.style.transform = `scale(${
                this.size / this.card.nativeElement.clientWidth
            })`;
        }
    }
}
