import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    ViewChild,
} from "@angular/core";

@Component({
    selector: "GlassmorphCard",
    templateUrl: "./glassmorph-card.component.html",
    styleUrls: ["./glassmorph-card.component.scss"],
})
export class GlassmoprhCardComponent implements AfterViewInit {
    @ViewChild("card") card!: ElementRef<HTMLElement>;

    @Input("image")
    image?: string;
    @Input("alt") imageAlt?: string;
    @Input("text") text?: string;
    @Input("tooltip") tooltip?: string;
    @Input("size") size?: number;

    ngAfterViewInit(): void {
        if (this.size) {
            this.card.nativeElement.style.transform = `scale(${
                this.size / this.card.nativeElement.clientWidth
            })`;
        }
    }
}
