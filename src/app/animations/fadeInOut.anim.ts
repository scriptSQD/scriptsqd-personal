import {
    animate,
    query,
    style,
    transition,
    trigger,
} from "@angular/animations";

export const fadeInOut = trigger("transitionRoutes", [
    transition("* => *", [
        query(":enter", [style({ opacity: 0, "z-index": -1 })], {
            optional: true,
        }),
        query(":leave", [style({ opacity: 0, "z-index": 1 })], {
            optional: true,
        }),

        query(
            ":enter, :leave",
            [
                style({
                    position: "absolute",
                    width: "100%",
                    height: "fit-content",
                }),
            ],
            { optional: true }
        ),

        query(
            ":leave",
            [
                style({ opacity: 1 }),
                animate("0.5s ease-in-out", style({ opacity: 0 })),
            ],
            { optional: true }
        ),
        query(
            ":enter",
            [
                style({ opacity: 0 }),
                animate(
                    "0.5s ease-in-out",
                    style({ opacity: 1, position: "relative" })
                ),
            ],
            { optional: true }
        ),
    ]),
]);
