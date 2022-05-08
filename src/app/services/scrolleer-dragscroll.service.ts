import { Inject, Injectable } from "@angular/core";
import { ScrolleerService } from "./scrolleer.service";
import { ViewportCheckerService } from "./viewport-checker.service";

@Injectable({
    providedIn: "root",
})
export class ScrolleerDragscrollService {
    constructor(
        @Inject("container") private container: HTMLElement,
        @Inject("scrolleer") private ss: ScrolleerService,
        private vpcs: ViewportCheckerService
    ) {}

    // WIP
    // WIP
    // WIP

    pos = { top: 0, left: 0, x: 0, y: 0 };

    mouseDown: boolean = false;

    currentEl!: number;

    mouseDownHandler(e: MouseEvent) {
        let children = this.container.children;

        for (let i = 0; i < children.length; i++) {
            let visible = this.vpcs.isVisible(
                children.item(i) as HTMLElement,
                95
            );
            if (visible) {
                this.currentEl = i;
                break;
            }
        }

        this.mouseDown = true;

        this.pos = {
            left: this.container.scrollLeft,
            top: this.container.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };

        this.container.style.cursor = "grabbing";
        this.container.style.userSelect = "none";
    }

    mouseMoveHandler(e: MouseEvent) {
        if (!this.mouseDown) return;

        const dx = e.clientX - this.pos.x;
        this.container.scrollLeft = this.pos.left - dx;
    }

    mouseUpHandler() {
        this.mouseDown = false;

        let children = this.container.children;

        let closest: HTMLElement | undefined;

        for (let i = 0; i < children.length; i++) {
            if (this.currentEl === i) continue;

            let visible = this.vpcs.isVisible(
                children.item(i) as HTMLElement,
                25
            );
            if (visible) {
                closest = children.item(i) as HTMLElement;
                break;
            }
        }

        if (closest) this.ss.scrollIntoElement(closest as HTMLElement);

        this.container.style.cursor = "grab";
        this.container.style.removeProperty("user-select");
    }
}
