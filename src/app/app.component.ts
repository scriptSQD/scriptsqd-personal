import { Component } from "@angular/core";
import { AppUpdaterService } from "./service-worker/app-updater.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],

})
export class AppComponent {
    constructor(private appUpdaterService: AppUpdaterService) {
        // TODO: Add "intro" screen
        this.appUpdaterService.checkUpdates();
    }
}
