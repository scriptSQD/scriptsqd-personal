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
        private viewportCheckerService: ViewportCheckerService,
    ) {
    }

    pos = { top: 0, left: 0, x: 0, y: 0 };

    mouseDown: boolean = false;
    currentEl!: number;
    draggingToLeft?: boolean;

    mouseDownHandler(e: MouseEvent) {
        let children = this.container.children;

        for (let i = 0; i < children.length; i++) {
            let visible = this.viewportCheckerService.isVisible(
                children.item(i) as HTMLElement,
                95,
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

        if (dx > 0) this.draggingToLeft = false;
        else if (dx < 0) this.draggingToLeft = true;

        this.container.scrollLeft = this.pos.left - dx;
    }

    mouseUpHandler() {
        this.mouseDown = false;

        let children = this.container.children;

        if (this.draggingToLeft) {
            if (
                this.viewportCheckerService.isVisible(
                    children.item(this.currentEl + 1) as HTMLElement,
                    18,
                )
            )
                this.ss.scrollToDirection(1);
            else {
                this.ss.scrollToPage(this.currentEl);
            }
        } else {
            if (
                this.viewportCheckerService.isVisible(
                    children.item(this.currentEl - 1) as HTMLElement,
                    18,
                )
            )
                this.ss.scrollToDirection(-1);
            else {
                this.ss.scrollToPage(this.currentEl);
            }
        }

        this.container.style.cursor = "grab";
        this.container.style.removeProperty("user-select");
    }
}
