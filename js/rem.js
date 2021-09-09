//移动端适配
(function (doc, win) {
    let uAgent = window.navigator.userAgent,
        isIOS = uAgent.match(/iphone/i),
        docEle = doc.documentElement,
        mDpr = 1,
        mFsize;
    let resizeEvent = "orientationchange" in window ? "orientationchange" : "resize"
    function SetRootFontSize() {
        let mWidth = docEle.clientWidth
        if (navigator.appVersion.substring(navigator.appVersion.length - 6) < 537 && !isIOS) {
            document.ready = function () {
                mWidth = docEle.clientWidth
            };
        }
        mDpr = window.devicePixelRatio
        if (window.devicePixelRatio) {
            console.log('')
        } else {
            mDpr = isIOS ? mWidth > 818 ? 3 : mWidth > 480 ? 2 : 1 : 1
        }
        docEle.dataset.dpr = mDpr
        mFsize = mWidth > 1080 ? 120 : mWidth / 7.5
        mFsize = mWidth > 300 ? mFsize : 26
        docEle.style.fontSize = mFsize + "px"
    }
    SetRootFontSize();
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvent, SetRootFontSize, false)
})(document, window);
