import * as functions from "firebase-functions";

/* eslint-disable-next-line */
const universal = require("../dist/scriptsqd/server/main").app;

export const ssr = functions
    .runWith({
        memory: "128MB",
        timeoutSeconds: 15,
    })
    .https.onRequest(universal());
