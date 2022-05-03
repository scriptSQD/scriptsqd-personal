const fs = require("fs-extra");

fs.copy("../dist", "./dist")
    .then(() => {
        fs.remove("../dist/scriptsqd/browser/index.html").catch(e =>
            console.error("Removal error: ", e)
        );
    })
    .catch(err => {
        console.error("Copying error: ", err);
    });
