import { Component, OnInit } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Component({
    selector: "app-fof",
    templateUrl: "./fof.component.html",
    styleUrls: ["./fof.component.scss"],
})
export class FofComponent implements OnInit {
    constructor(private meta: Meta) {
        this.meta.addTag({
            name: "description",
            content: "404 Page not found.",
        });
    }

    ngOnInit(): void {}
}
