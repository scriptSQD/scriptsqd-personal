import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ScrolleerService {
    constructor(@Inject("scrolleer_uuid") private scrolleer_uuid: string) {}

    // scrolleer_uuid?: string;

    // TODO: add drag 'n' scroll
    justifySlides: "center" | "start" | "end" = "center";

    currentElement: number = 0;
    currentDot: number = 0;
    itemsLength: number = 0;

    initCarousel() {
        let els = document.getElementById(
            `scrolleer_container_${this.scrolleer_uuid}`
        )!.children;
        let pag_container = document.getElementById(
            `scrolleer_${this.scrolleer_uuid}_pag`
        );

        this.itemsLength = els.length;
        for (let i = 0; i < els.length; i++) {
            let dot = document.createElement("button");

            dot.classList.add("scrolleer__pag__dot");

            if (i === 0) dot.classList.add("active");

            dot.id = `scrolleer_${this.scrolleer_uuid}_page_${i}`;
            dot.ariaLabel = `Scroll to project number ${i + 1}`;

            dot.setAttribute("data-scroll-to-page", i.toString());

            pag_container?.appendChild(dot);
        }

        this.currentDot = 0;
        this.updateDots(this.currentDot);

        pag_container?.addEventListener("click", e => {
            let target = e.target as HTMLElement;
            if (!target.classList.contains("scrolleer__pag__dot")) return;
            this.scrollToPage(parseFloat(target.dataset["scrollToPage"]!));
        });
    }

    clearDots(): void {
        let active_dot = document.getElementById(
            `scrolleer_${this.scrolleer_uuid}_page_${this.currentDot}`
        );

        active_dot?.classList.remove("active");
    }
    updateDots(viewPage: number): void {
        this.clearDots();

        this.currentElement = viewPage;
        this.currentDot = viewPage;

        let dot = document.getElementById(
            `scrolleer_${this.scrolleer_uuid}_page_${this.currentElement}`
        );
        dot?.classList.add("active");
    }

    scrollToPage(page: number) {
        let container = document.getElementById(
            `scrolleer_container_${this.scrolleer_uuid}`
        );
        container?.children.item(page)?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: this.justifySlides,
        });
        // this.currentElement = page;
        this.updateDots(page);
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
    scrollIntoElement(element: HTMLElement) {
        let els = document.getElementById(
            `scrolleer_container_${this.scrolleer_uuid}`
        )!.children;

        for (let i = 0; i < els.length; i++) {
            if (els.item(i)?.isEqualNode(element)) {
                this.updateDots(i);
                break;
            }
        }

        element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: this.justifySlides,
        });
    }
}
