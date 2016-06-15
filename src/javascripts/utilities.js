module.exports = {
    /*
     * Returns the viewport dimensions. Works with older browsers
     * @param {Object} win - the `window` element
     * @param {Object} doc - the `document` element
     * @returns {Object} the viewport dimensions: { with, height }
     */
    updateViewportDimensions(win, doc) {
        const docE = doc.documentElement;
        const body = doc.getElementsByTagName('body')[0];

        return {
            width: win.innerWidth || docE.clientWidth || body.clientWidth,
            height: win.innerHeight || docE.clientHeight || body.clientHeight,
        };
    },
};
