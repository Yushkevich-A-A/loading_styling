import ControllerWidget from "./ControllerWidget/ControllerWidget";
import DrawWidget from "./DrawWidget/DrawWidget"

const url = 'http://localhost:7070/'

const widget = new DrawWidget(document.body);
const controller = new ControllerWidget(widget, url);
