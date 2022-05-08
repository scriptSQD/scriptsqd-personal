import { isPlatformBrowser } from "@angular/common";
import {
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    PLATFORM_ID,
    QueryList,
    ViewChild,
    ViewEncapsulation,
} from "@angular/core";
import * as shortid from "shortid";
import { ScrolleerSlideDirective } from "src/app/directives/scrolleer-slide.directive";
import { ScrolleerDragscrollService } from "src/app/services/scrolleer-dragscroll.service";
import { ScrolleerService } from "src/app/services/scrolleer.service";
import { ViewportCheckerService } from "src/app/services/viewport-checker.service";

@Component({
    selector: "scrolleer",
    template: `
        <div class="scrolleer">
            <div
                #scrolleer_container
                class="scrolleer__container"
                id="scrolleer_container_{{ scrolleer_uuid }}"
                (mousedown)="scrolleer_dragscroll.mouseDownHandler($event)"
                (mouseup)="scrolleer_dragscroll.mouseUpHandler()"
                (mousemove)="scrolleer_dragscroll.mouseMoveHandler($event)"
            >
                <div class="scrolleer__slide" *ngFor="let slide of slides">
                    <ng-template [ngTemplateOutlet]="slide.template">
                    </ng-template>
                </div>
            </div>
            <span class="scrolleer__nav__container">
                <button
                    class="group scrolleer__nav left-1.5 sm:left-3"
                    (click)="scrollable.scrollToDirection(-1)"
                    aria-label="Scroll to previous project"
                >
                    <svg
                        width="18"
                        height="32"
                        viewBox="0 0 18 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.4058 31.4441C17.9383 30.9116 17.9867 30.0783 17.551 29.4911L17.4058 29.3228L4.46714 16.3835L17.4058 3.44414C17.9383 2.91161 17.9867 2.07828 17.551 1.49106L17.4058 1.32282C16.8733 0.790291 16.0399 0.741879 15.4527 1.17759L15.2845 1.32282L1.28448 15.3228C0.751946 15.8554 0.703533 16.6887 1.13924 17.2759L1.28448 17.4441L15.2845 31.4441C15.8703 32.0299 16.82 32.0299 17.4058 31.4441Z"
                            fill="#909090"
                            class="fill-[#909090] group-hover:fill-[hsl(0,0%,85%)] transition-all"
                        />
                    </svg>
                </button>

                <button
                    class="group scrolleer__nav right-1.5 sm:right-3 -scale-100"
                    (click)="scrollable.scrollToDirection(1)"
                    aria-label="Scroll to next project"
                >
                    <svg
                        width="18"
                        height="32"
                        viewBox="0 0 18 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.4058 31.4441C17.9383 30.9116 17.9867 30.0783 17.551 29.4911L17.4058 29.3228L4.46714 16.3835L17.4058 3.44414C17.9383 2.91161 17.9867 2.07828 17.551 1.49106L17.4058 1.32282C16.8733 0.790291 16.0399 0.741879 15.4527 1.17759L15.2845 1.32282L1.28448 15.3228C0.751946 15.8554 0.703533 16.6887 1.13924 17.2759L1.28448 17.4441L15.2845 31.4441C15.8703 32.0299 16.82 32.0299 17.4058 31.4441Z"
                            fill="#909090"
                            class="fill-[#909090] group-hover:fill-[hsl(0,0%,85%)] transition-all"
                        />
                    </svg>
                </button>
            </span>

            <div
                class="scrolleer__pag"
                id="scrolleer_{{ scrolleer_uuid }}_pag"
            ></div>
        </div>
    `,
    styleUrls: ["./scrolleer.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class ScrolleerComponent implements AfterViewInit {
    constructor(@Inject(PLATFORM_ID) private platformId: any) {}

    scrolleer_uuid = shortid.generate();
    scrollable = new ScrolleerService(this.scrolleer_uuid);

    @ViewChild("scrolleer_container")
    scrolleer_container!: ElementRef;
    scrolleer_dragscroll!: ScrolleerDragscrollService;

    @HostBinding("style.--pagColor")
    @Input("scrolleer-pag-color")
    pag_color: string = "hsl(285, 100%, 80%)";

    @HostBinding("style.--slidesPerView")
    @Input("scrolleer-slides-per-view")
    slidesPerView: number = 1;

    @Input("scrolleer-justify-slides")
    justifySlides: "center" | "start" | "end" = "center";

    @ContentChildren(ScrolleerSlideDirective)
    slides?: QueryList<ScrolleerSlideDirective>;

    ngAfterViewInit(): void {
        this.scrolleer_dragscroll = new ScrolleerDragscrollService(
            this.scrolleer_container.nativeElement,
            this.scrollable,
            new ViewportCheckerService()
        );

        this.scrollable.justifySlides = this.justifySlides;
        if (isPlatformBrowser(this.platformId)) this.scrollable.initCarousel();
    }
}
