import { isPlatformBrowser } from "@angular/common";
import {
    AfterViewInit,
    Component,
    HostListener,
    Inject,
    PLATFORM_ID,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import gsap from "gsap";
import { filter } from "rxjs";
import { fadeInOut } from "./animations/fadeInOut.anim";
import { UpdateAppService } from "./sw/update-app.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    animations: [fadeInOut],
})
export class AppComponent implements AfterViewInit {
    constructor(
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: any,
        private swupd: UpdateAppService
    ) {
        // TODO: Add "intro" screen

        this.swupd.checkUpdates();

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

    atBottom: boolean = false;
    @HostListener("window:scroll", ["$event"]) handleScroll() {
        if (!isPlatformBrowser(this.platformId)) return;

        const scroll_h = document.documentElement.scrollHeight;
        const scroll = document.documentElement.scrollTop;

        if (scroll_h - scroll <= document.documentElement.clientHeight + 100)
            this.atBottom = true;
        else this.atBottom = false;
    }

    menu!: HTMLElement;
    menuState: boolean = false;
    animRunning: boolean = false;

    toggleMenu(force?: boolean) {
        if (this.animRunning && !force) return;

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
                    this.animRunning = true;
                },
                onComplete: () => {
                    this.animRunning = false;
                },
                runBackwards: this.menuState,
                immediateRender: false,
            }
        );

        this.menuState = !this.menuState;

        anim.play();
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId))
            this.menu = document.getElementById("menu") as HTMLElement;
    }
}
