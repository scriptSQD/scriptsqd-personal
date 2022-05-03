import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ScrollableService {
    constructor() {}

    currentElement: number = 0;
    itemsLength: number = 0;
    initCarousel() {
        let els = document.getElementsByClassName("scrollable__child");
        let pag_container = document.getElementById("scrollable__pag");

        this.itemsLength = els.length;
        for (let i = 0; i < els.length; i++) {
            let dot = document.createElement("button");
            dot.classList.add("scrollable__pag__dot");
            if (i === 0) dot.classList.add("active");
            dot.id = `scrollable_page_${i}`;
            dot.ariaLabel = `Scroll to project number ${i + 1}`;
            dot.setAttribute("data-scroll-to-page", i.toString());

            pag_container?.appendChild(dot);
        }

        this.updateDots();

        pag_container?.addEventListener("click", e => {
            let target = e.target as HTMLElement;
            if (!target.classList.contains("scrollable__pag__dot")) return;
            this.scrollToPage(parseFloat(target.dataset["scrollToPage"]!));
        });
    }

    clearDots(): void {
        let active_dots = document.getElementsByClassName(
            "scrollable__pag__dot active"
        );

        for (let i = 0; i < active_dots.length; i++) {
            active_dots.item(i)?.classList.remove("active");
        }
    }
    updateDots(): void {
        this.clearDots();

        let dot = document.getElementById(
            `scrollable_page_${this.currentElement}`
        );
        dot?.classList.add("active");
    }

    scrollToPage(page: number) {
        let container = document.getElementById("scrollable_container");
        container?.children.item(page)?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
        this.currentElement = page;
        this.updateDots();
    }
    scrollToDirection(direction: number) {
        const element = this.currentElement + direction;
        if (element < 0) {
            this.currentElement = this.itemsLength - 1;
            this.scrollToPage(this.currentElement);
            return;
        } else if (element >= this.itemsLength) {
            this.currentElement = 0;
            this.scrollToPage(this.currentElement);
            return;
        }
        this.scrollToPage(this.currentElement + direction);
    }
}
