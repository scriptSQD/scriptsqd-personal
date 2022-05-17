import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "GlassmorphProjectCard",
    templateUrl: "./glassmorph-project-card.component.html",
    styleUrls: ["./glassmorph-project-card.component.scss"],
})
export class GlassmorphProjectCardComponent implements OnInit {
    constructor() {}

    @Input("gmp-title") title!: string;
    @Input("gmp-general") general!: string;
    @Input("gmp-image") image!: string;
    @Input("gmp-source-link") sourceLink?: string;
    @Input("gmp-live-link") liveLink?: string;
    @Input("gmp-image-alt") imageAlt!: string;
    @Input("gmp-front-tech") frontTech?: string[];
    @Input("gmp-back-tech") backTech?: string[];

    ngOnInit(): void {}
}
