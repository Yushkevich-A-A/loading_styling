import ControllerWidget from './ControllerWidget/ControllerWidget';
import DrawWidget from './DrawWidget/DrawWidget';
// 
const url = 'https://yushkevich-loading-styling.herokuapp.com/';

const widget = new DrawWidget(document.body);
const controller = new ControllerWidget(widget, url);
