# scriptSQD

My personal website, written with Angular (+SSR).

Deployed on Firebase Cloud Functions + Firebase Hosting.

# Usage

To run regular dev server:

```
npm start
```

To test SSR on Firebase cloud functions
(keep in mind you should have `firebase-tools` package installed and logged in):

```bash
npm run build:ssr-firebase

firebase serve
```
