'use strict';

module.exports = {

    //Base collection of selectors
    getSelector: {
        searchField: element(by.id('lst-ib')),
        captionField: $$('.r > a'),
        linkField: $$('._Rm'),
        extraField: $$('.st'),
        checkFirstPage: $('.cur'),
        expectExtraText: "Business Intelligence software by Sisense, the industry leader in BI for complex data - easily prepare, analyze & explore growing data from multiple sources."
    },

    /**
     *
     * @param item Fill value in the search field
     */
    searchValue: function(item) {
        let selector = this.getSelector;
        return browser.actions().mouseMove(selector.searchField)
            .sendKeys(item)
            .sendKeys(protractor.Key.ENTER)
            .perform();
    },

    //Click on the search page to first link
    clickFirstLink: function () {
        let selector = this.getSelector.captionField.first();
        return selector.click();
    },

    //Get the first row selector
    getFirstExtraField: function () {
        return this.getSelector.extraField.first();
    },

    //Get the first row selector
    getFirstLinkField: function () {
        return this.getSelector.linkField.first();
    },

    //Get the first row selector
    getFirstCaptionField: function () {
        return this.getSelector.captionField.first();
    }
};