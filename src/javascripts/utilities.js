function updateViewportDimensions() {
    const docE = document.documentElement;
    const body = document.getElementsByTagName('body')[0];

    return {
        width: window.innerWidth || docE.clientWidth || body.clientWidth,
        height: window.innerHeight || docE.clientHeight || body.clientHeight
    };
}

module.exports = {
    updateViewportDimensions
}
