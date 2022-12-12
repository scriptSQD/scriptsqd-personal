import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    HostListener,
    Inject,
    PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { filter } from "rxjs";
import { fadeInOut } from "../animations/fadeInOut.anim";
import gsap from "gsap";

@Component({
    selector: "app-wrapper",
    templateUrl: "./wrapper.component.html",
    styleUrls: ["./wrapper.component.scss"],
    animations: [fadeInOut],
})
export class WrapperComponent implements AfterViewInit {
    @HostListener("window:scroll", ["$event"]) handleScroll() {
        if (!isPlatformBrowser(this.platformId)) return;

        const scroll_h = document.documentElement.scrollHeight;
        const scroll = document.documentElement.scrollTop;

        this.pageAtBottom = scroll_h - scroll <= document.documentElement.clientHeight + 45;
    }

    pageAtBottom = false;
    menu!: HTMLElement;
    menuOpened = false;
    animationRunning = false;

    constructor(
        private readonly router: Router,
        @Inject(PLATFORM_ID) private readonly platformId: any,
        private readonly changeRef: ChangeDetectorRef,
    ) {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe({
                next: () => {
                    setTimeout(() => {
                        this.handleScroll();
                    }, 1);
                },
            });
    }

    getTransitionRoutes(outlet: RouterOutlet) {
        if (!outlet.isActivated)
            return "";

        return outlet.activatedRoute;
    }

    toggleMenu(force?: boolean) {
        if (this.animationRunning && !force) return;

        let anim = gsap.fromTo(
            "#menu",
            {
                clipPath: `inset(0px 0px 0px 100vw)`,
            },
            {
                clipPath: "inset(0px 0px 0px 0px)",
                duration: 0.625,
                ease: "expo.inOut",
                onStart: () => {
                    this.animationRunning = true;
                },
                onComplete: () => {
                    this.animationRunning = false;
                },
                runBackwards: this.menuOpened,
                immediateRender: false,
            },
        );

        this.menuOpened = !this.menuOpened;

        anim.play();
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId))
            this.menu = document.getElementById("menu") as HTMLElement;

        this.changeRef.detectChanges();
    }
}
