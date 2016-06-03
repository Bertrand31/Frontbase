require('svgxuse')();

const util = require('./utilities');

let viewport = util.updateViewportDimensions();

document.addEventListener('DOMContentLoaded', () => {
    console.log(viewport);
});
