require('svgxuse')();

const util = require('./utilities');

let viewport = util.updateViewportDimensions(window, document);

document.addEventListener('DOMContentLoaded', () => {
    console.log(viewport);
});
