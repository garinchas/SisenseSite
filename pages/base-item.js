'use strict';

module.exports = {

    url: function(value) {
        browser.get(value); //overrides baseURL
        browser.waitForAngular();
    },
};
