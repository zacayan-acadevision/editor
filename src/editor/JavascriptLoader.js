export const JavascriptLoader = (url) => {
    return new Promise((res, rej) => {
        const id = url.replaceAll('/', '-')
        const bool = document.head.querySelector("#" + id)
        if (!bool) {
            var js = document.createElement("script");
            js.src = url;
            js.id = id
            document.head.appendChild(js);
            js.onload = () => { res("JS loaded"); };
            js.onerror = (e) => { rej("Error loading JS"); };
        } else {
            rej("#" + id + " already loaded!");
        }
    })
}