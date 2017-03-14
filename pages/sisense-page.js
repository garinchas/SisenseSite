'use strict';

module.exports = {

    //Base collection of selectors
    getSelector: {
        checkLogo: $('#logo'),
        demoButton: element(by.xpath('//a[text()="Demo"]')),
        linkSisenseDashboard: element(by.xpath('//a[text()="Sisense Dashboard"]')),
        openDashboardButton : element(by.xpath('//a[text()="open dashboard"]')),
        startFreeTrialButton: element(by.id('rtpbutton1')),
        iframeDashboard: $('.fancybox-iframe'),
        widgetCaptionAthens: element(by.cssContainingText('tspan', 'Athens')),
        marketingWidget: $('.prism-widget-preview'),
        fullScreenButton: $$('.widget-toolbar-icons').get(10)
    },

    /**
     * @param promise Check caption Staked Bar
     */
    expectNameStakedBar: function (promise) {
        promise.map(function (item) {
            let selector = element(by.cssContainingText('tspan', item)).getText();
            selector.then(function (promiseValue) {
                expect(promiseValue).toEqual(item);
            })
        });
    },

    /**
     * @param promise Check that the element is visible
     */
    checkStakedBarIsVisible: function (promise) {
        return promise.map(function (item) {
            return browser.wait(EC.and(
                EC.visibilityOf(element(by.cssContainingText('tspan', item)))
            ), 20000, 'On the widget does not display Staked Bars caption');
        })
    },

    /**
     * @param promise Switch to Iframe
     */
    switchToIframe: function (promise) {
        return browser.switchTo().frame(element(by.css(promise)).getWebElement());
    }
};