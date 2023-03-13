export const CssLoader = (url) => {
    return new Promise((res, rej) => {
        const id = url.replaceAll('/', '-')
        const bool = document.head.querySelector("#" + id)
        if (!bool) {
            var stylesheet = document.createElement("link");
            stylesheet.rel = "stylesheet";
            stylesheet.type = "text/css";
            stylesheet.href = url;
            stylesheet.id = id
            document.head.appendChild(stylesheet);
            stylesheet.onload = () => { res("CSS loaded"); };
            stylesheet.onerror = (e) => { rej("Error loading CSS"); };
        } else {
            rej("#" + id + " already loaded!");
        }
    })

}