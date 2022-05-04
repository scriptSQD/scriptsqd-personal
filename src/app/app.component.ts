import { isPlatformBrowser } from "@angular/common";
import {
    AfterContentInit,
    AfterViewInit,
    Component,
    HostListener,
    Inject,
    PLATFORM_ID,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import gsap from "gsap";
import { filter } from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                width: 100%;
                overflow-x: hidden;
                overflow-y: auto;
            }
            .link {
                color: #fff;
                opacity: 0.35;
                text-decoration: none;
                transition: all 0.2s ease-in-out;
                font-size: 2rem;
                font-weight: 500;
            }
            .link:hover,
            .link__active {
                opacity: 1;
            }
            #menu {
                clip-path: inset(0 0 0 100vw);
            }
        `,
    ],
})
export class AppComponent implements AfterViewInit, AfterContentInit {
    constructor(
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: any
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
                duration: 0.65,
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

    pageLoaded: boolean = false;
    ngAfterContentInit(): void {
        this.pageLoaded = true;
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId))
            this.menu = document.getElementById("menu") as HTMLElement;
    }
}
