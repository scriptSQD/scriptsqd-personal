import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Injectable({
    providedIn: "root",
})
export class AppUpdaterService {
    constructor(
        private swUpdate: SwUpdate,
        @Inject(PLATFORM_ID) private platformId: any,
    ) {
        if (swUpdate.isEnabled) this.checkUpdates();
    }

    checkUpdates(): void {
        this.swUpdate.versionUpdates.subscribe({
            next: () => {
                this.update();
            },
        });
    }

    update(): void {
        console.log("New version found! Updating application.");
        this.swUpdate.activateUpdate().then(updated => {
            if (isPlatformBrowser(this.platformId) && updated)
                document.location.reload();
        }).catch(err => console.error("Error while updating application:", err));
    }
}
