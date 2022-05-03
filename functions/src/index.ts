import * as functions from "firebase-functions";

const universal = require(`${process.cwd()}/dist/scriptsqd/server/main`).app;
export const ssr = functions
    .runWith({
        memory: "128MB",
        timeoutSeconds: 90,
    })
    .region("europe-central2")
    .https.onRequest(universal());
