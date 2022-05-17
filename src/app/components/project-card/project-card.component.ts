import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "ProjectCard",
    template: `
        <div
            class="flex p-3 border-2 border-[#404040] bg-[#282828] bg-opacity-75 rounded-xl mx-6 sm:mx-14 m-14 w-fit"
        >
            <article
                class="flex flex-col md:flex-row prose prose-invert gap-2.5"
            >
                <div>
                    <img
                        src="/assets/projects/{{ img }}"
                        [alt]="imgAlt"
                        class="rounded-md m-0 max-w-[260px] max-h-[260px] sm:max-w-xs sm:max-h-80"
                    />
                </div>
                <div class="flex flex-col prose-headings:mb-2 prose-p:my-1">
                    <h1 class="text-center">{{ title }}</h1>
                    <p class="text-justify">
                        <strong>General: </strong>{{ general }}
                    </p>
                    <p *ngIf="executedIn">Executed in: {{ executedIn }}</p>
                    <p *ngIf="additional">Additional: {{ additional }}</p>
                    <div
                        class="flex flex-col prose-li:my-0.5 prose-li:marker:text-[#dedede]"
                        *ngIf="front || back"
                    >
                        <p><strong>Tech stack</strong></p>
                        <ul *ngIf="front">
                            <li *ngFor="let tech of front">{{ tech }}</li>
                        </ul>
                        <ul *ngIf="back">
                            <li *ngFor="let tech of back">{{ tech }}</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    `,
    styles: [],
})
export class ProjectCardComponent implements OnInit {
    constructor() {}

    @Input("pc-title") title!: string;
    @Input("pc-image") img!: string;
    @Input("pc-imageAlt") imgAlt!: string;
    @Input("pc-general") general!: string;

    @Input("pc-stack-front") front?: string[];
    @Input("pc-stack-back") back?: string[];

    @Input("pc-executedIn") executedIn?: string;
    @Input("pc-additional") additional?: string;

    ngOnInit(): void {}
}
