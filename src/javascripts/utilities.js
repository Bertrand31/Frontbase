function updateViewportDimensions(win, doc) {
    const docE = doc.documentElement;
    const body = doc.getElementsByTagName('body')[0];

    return {
        width: win.innerWidth || docE.clientWidth || body.clientWidth,
        height: win.innerHeight || docE.clientHeight || body.clientHeight
    };
}

module.exports = {
    updateViewportDimensions
}
