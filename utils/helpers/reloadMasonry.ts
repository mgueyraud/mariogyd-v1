export const reloadMasonryScript = (url: URL) => {
    if (url.toString() === "/" || url.toString() === "/blog") {
        const body = document.body;
        const scriptMasonry = body.querySelector("#masonry-script");
        if (scriptMasonry) {
            body.removeChild(scriptMasonry);
        }

        const newScriptMasonry = document.createElement("script");
        newScriptMasonry.src = "./assets/js/masonry.min.js";
        newScriptMasonry.id = "masonry-script";
        newScriptMasonry.defer = true;
        newScriptMasonry.onload = () => {
            const $masonryLayout = document.querySelector(".masonry-layout");
            //@ts-ignore
            const msnry = new Masonry($masonryLayout, {
                itemSelector: "article",
                columnWidth: 520,
            });
        };

        body.appendChild(newScriptMasonry);
    }
}