import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";

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
    @Input("gmp-link") link?: string;
    @Input("gmp-image-alt") imageAlt!: string;
    @Input("gmp-front-tech") frontTech?: string[];
    @Input("gmp-back-tech") backTech?: string[];

    ngOnInit(): void {}
}
