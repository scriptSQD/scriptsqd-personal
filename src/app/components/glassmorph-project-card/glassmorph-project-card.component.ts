import { Component, Input } from "@angular/core";
import { IProject } from "../../home/project.interface";

@Component({
    selector: "GlassmorphProjectCard",
    templateUrl: "./glassmorph-project-card.component.html",
    styleUrls: ["./glassmorph-project-card.component.scss"],
})
export class GlassmorphProjectCardComponent {
    @Input("project") project!: IProject;
}
