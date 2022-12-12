import {
    animate,
    query, sequence,
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
                    minWidth: "100vw",
                    minHeight: "100vh",
                }),
            ],
            { optional: true }
        ),

        sequence([
            query(
                ":leave",
                [
                    style({ opacity: 1 }),
                    animate("425ms ease-in-out", style({ opacity: 0 })),
                ],
                { optional: true },
            ),
            query(
                ":enter",
                [
                    style({ opacity: 0 }),
                    animate(
                        "425ms ease-in-out",
                        style({ opacity: 1, position: "relative" }),
                    ),
                ],
                { optional: true },
            ),
        ])
    ]),
]);
