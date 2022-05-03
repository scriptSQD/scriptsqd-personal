import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ViewportCheckerService {
    constructor() {}

    percVisible: number = 45;

    isInViewport(el: HTMLElement): boolean {
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;

        return topShown && bottomShown;
    }

    isVisible(el: HTMLElement, percent?: number): boolean {
        if (!el) return false;
        let rect = el.getBoundingClientRect(),
            windowHeight =
                window.innerHeight || document.documentElement.clientHeight;

        return !(
            Math.floor(
                100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100
            ) < (percent || this.percVisible) ||
            Math.floor(
                100 - ((rect.bottom - windowHeight) / rect.height) * 100
            ) < (percent || this.percVisible)
        );
    }
}
