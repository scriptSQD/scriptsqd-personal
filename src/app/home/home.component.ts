import { isPlatformBrowser } from "@angular/common";
import {
    AfterViewInit,
    Component,
    HostListener,
    Inject,
    OnInit,
    PLATFORM_ID,
} from "@angular/core";
import { ScrollableService } from "../services/scrollable.service";
import { ViewportCheckerService } from "../services/viewport-checker.service";
import { Project } from "./project.interface";
import { Skills } from "./skills.interface";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit {
    constructor(
        public scrollable: ScrollableService,
        private vpcs: ViewportCheckerService,
        @Inject(PLATFORM_ID) private platformId: any
    ) {}

    @HostListener("window:resize") handleResize() {
        let scrollable_container = document.getElementById(
            "scrollable_container"
        )!;

        if (this.vpcs.isVisible(scrollable_container))
            this.scrollable.scrollToPage(this.scrollable.currentElement);
    }

    skills: Skills = {
        front: [
            {
                icon: "/assets/icons/angular.svg",
                tooltip: "Angular v13+",
            },
            {
                icon: "/assets/icons/tailwindcss.svg",
                tooltip: "Tailwind CSS",
            },
        ],
        back: [
            {
                icon: "/assets/icons/nestjs.svg",
                tooltip: "NestJS",
            },
            {
                icon: "/assets/icons/strapi.svg",
                tooltip: "Strapi",
            },
        ],
        general: [
            {
                icon: "/assets/icons/mongodb.svg",
                tooltip: "MongoDB",
            },
            {
                icon: "/assets/icons/git.svg",
                tooltip: "Git / GitHub",
            },
            {
                icon: "/assets/icons/linux.svg",
                tooltip: "Linux (esp. Arch)",
            },
        ],
    };

    projects: Project[] = [
        {
            title: "Personal website",
            description:
                "The one you're on right now. It's also a big part of my portfolio as well as a symbol of my dedication.",
            image: "portfolio.webp",
            stack: {
                front: ["Angular (SSR)", "Tailwind CSS"],
            },
        },
        {
            title: "TuneStory",
            description:
                "Personal blog about music, written during 1-week vacations.",
            image: "tunestory.webp",
            link: "https://tunestory.vercel.app",
            stack: {
                front: ["Angular", "Tailwind CSS"],
                back: ["Strapi"],
            },
        },
        {
            title: "Tyzenguide",
            description:
                "School project dedicated to Antoni Tyzenhaus. Grodno's very famous figure.",
            image: "tyzenguide.webp",
            link: "https://tyzenguide.web.app",
            stack: {
                front: ["Angular", "Tailwind CSS", "HyperUI (UIKit)"],
            },
        },
    ];

    ngOnInit(): void {}
    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) this.scrollable.initCarousel();
    }
}
