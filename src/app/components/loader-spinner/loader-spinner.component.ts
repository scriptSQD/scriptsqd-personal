import { Component } from "@angular/core";

@Component({
    selector: "loader-spinner",
    template: `
        <div class="loader-spinner"></div> `,
    styles: [
        `
          :host {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          .loader-spinner {
            @apply animate-spin;
            width: 35px;
            aspect-ratio: 1;
            background-color: transparent;
            border-radius: 100%;
            border: 4px solid #4a4a4a;
            border-top: 4px solid #fbfbfb;
          }
        `,
    ],
})
export class LoaderSpinnerComponent {
}
