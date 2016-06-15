require('svgxuse')();

const util = require('./utilities');

document.addEventListener('DOMContentLoaded', () => {
    const viewport = util.updateViewportDimensions(window, document);
    console.log(viewport);
});
