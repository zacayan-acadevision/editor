import { CssLoader } from "./CssLoader.js";
import Events from "./Events.js";
import { JavascriptLoader } from "./JavascriptLoader.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeHandler from "./NodeHandler.js";
import UiEditor from "./ui/ui-editor.js";

export const InitEditor = async () => {
    // await Promise.all([
    //     JavascriptLoader('js/prism.js'),
    //     JavascriptLoader('js/line-number.js'),
    //     JavascriptLoader('js/showdown.js'),
    //     CssLoader('css/editor/prism.css'),
    //     CssLoader('css/editor/print.css'),
    //     CssLoader('css/editor/line-number.css'),
    // ])

    const editor = new UiEditor();
    const nodeHandler = new NodeHandler('#container');
    const nodeBuilder = new NodeBuilder(nodeHandler);

    const events = new Events(nodeHandler, nodeBuilder);
    if (location.origin.slice(0,16) === 'http://127.0.0.1') {
        const promise = editor.start();
        promise.then(() => {
            events.start();
        })
    }
    // events.loadData();
}

