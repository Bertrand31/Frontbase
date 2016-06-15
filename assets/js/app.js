const util = require('./utilities');

document.addEventListener('DOMContentLoaded', () => {
    const viewport = util.updateViewportDimensions(window, document);
    document.getElementById('dumb').innerHTML = viewport.height;
});
