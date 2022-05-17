import {
    animate,
    group,
    query,
    style,
    transition,
    trigger,
} from "@angular/animations";

export const fadeInOut = trigger("transitionRoutes", [
    // transition("* <=> *", [
    //     query(":leave, :enter", [style({})], { optional: true }),

    //     query(
    //         ":leave",
    //         [
    //             animate(
    //                 "800ms ease",
    //                 style({
    //                     opacity: 0,
    //                 })
    //             ),
    //         ],
    //         { optional: true }
    //     ),
    //     query(
    //         ":enter",
    //         [
    //             style({
    //                 opacity: 0,
    //             }),
    //             animate(
    //                 "800ms ease",
    //                 style({
    //                     opacity: 1,
    //                 })
    //             ),
    //         ],
    //         { optional: true }
    //     ),
    // ]),
    transition("* => *", [
        query(
            ":enter, :leave",
            [
                style({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }),
            ],
            { optional: true }
        ),

        query(":enter", [style({ opacity: 0, "z-index": -1 })], {
            optional: true,
        }),

        query(
            ":leave",
            [
                style({ opacity: 1 }),
                animate("0.65s ease-in-out", style({ opacity: 0 })),
            ],
            { optional: true }
        ),
        query(
            ":enter",
            [
                style({ opacity: 0 }),
                animate(
                    "0.65s ease-in-out",
                    style({ opacity: 1, position: "relative" })
                ),
            ],
            { optional: true }
        ),
    ]),
]);
