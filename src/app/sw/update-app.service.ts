import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Injectable({
    providedIn: "root",
})
export class UpdateAppService {
    constructor(
        private updater: SwUpdate,
        @Inject(PLATFORM_ID) private pid: any
    ) {
        if (updater.isEnabled) this.checkUpdates();
    }
    checkUpdates(): void {
        this.updater.versionUpdates.subscribe(() => {
            this.update();
        });
    }

    update(): void {
        console.log("New version found! Updating application.");
        this.updater.activateUpdate().then(updated => {
            if (isPlatformBrowser(this.pid))
                if (updated) document.location.reload();
        });
    }
}
