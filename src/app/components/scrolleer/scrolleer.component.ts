import { isPlatformBrowser } from "@angular/common";
import {
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    HostBinding,
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
    templateUrl: "./scrolleer.component.html",
    styleUrls: ["./scrolleer.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class ScrolleerComponent implements AfterViewInit {
    constructor(@Inject(PLATFORM_ID) private platformId: any) {
    }

    @ViewChild("scrolleer_container")
    scrolleer_container!: ElementRef<HTMLDivElement>;
    scrolleer_dragscroll!: ScrolleerDragscrollService;

    @HostBinding("style.--pagColor")
    @Input("scrolleer-pag-color")
    pag_color: string = "hsl(285, 100%, 80%)";

    @HostBinding("style.--slidesPerView")
    @Input("scrolleer-slides-per-view")
    slidesPerView: number = 1;

    @Input("scrolleer-loop") loop: boolean = true;

    @Input("scrolleer-justify-slides")
    justifySlides: "center" | "start" | "end" = "center";

    @ContentChildren(ScrolleerSlideDirective)
    slides?: QueryList<ScrolleerSlideDirective>;

    scrolleer_uuid = shortid.generate();
    scrollable = new ScrolleerService({
        scrolleerUuid: this.scrolleer_uuid,
        paginationColor: this.pag_color,
        slidesPerView: this.slidesPerView,
        justifySlides: this.justifySlides,
        loop: this.loop,
    });

    ngAfterViewInit(): void {
        this.scrolleer_dragscroll = new ScrolleerDragscrollService(
            this.scrolleer_container.nativeElement,
            this.scrollable,
            new ViewportCheckerService(),
        );

        if (isPlatformBrowser(this.platformId)) this.scrollable.initCarousel();
    }
}
