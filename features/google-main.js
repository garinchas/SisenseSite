let googlePage = require('../pages/google-page.js');
let sisensePage = require('../pages/sisense-page');
let baseItem = require('../pages/base-item');

describe ('Google search sisense main page', function() {
    let EC = protractor.ExpectedConditions;

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        baseItem.url('https://google.co.uk');
    });

    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });


    it('Search first result and caption', function() {

        googlePage.searchValue('sisense Business Intelligence (BI) Software');
        browser.wait(EC.and(
            EC.visibilityOf(googlePage.getSelector.checkFirstPage)
        ), 3000, 'Page appear');
        expect(googlePage.getFirstCaptionField().getText()).toContain('Sisense: Business Intelligence (BI) Software', 'Element should contain "Sisense: Business Intelligence (BI) Software" in it');
    });

    it('Search result link', function() {

        googlePage.searchValue('sisense Business Intelligence (BI) Software');
        browser.wait(EC.and(
            EC.visibilityOf(googlePage.getSelector.checkFirstPage)
        ), 3000, 'Page appear');
        expect(googlePage.getFirstLinkField().getText()).toContain('https://www.sisense.com/', 'Sisense link in search results is "https://www.sisense.com/"');
    });

    it('Search result extra text', function() {

        googlePage.searchValue('sisense Business Intelligence (BI) Software');
        browser.wait(EC.and(
            EC.visibilityOf(googlePage.getSelector.checkFirstPage)
        ), 3000, 'Page appear');
        expect(googlePage.getFirstExtraField().getText()).toContain(googlePage.getSelector.expectExtraText, 'Should be extra text in Sisense search result');
    });

    it('Test redirection after click on search result.', function() {

        googlePage.searchValue('sisense Business Intelligence (BI) Software');
        browser.wait(EC.and(
            EC.visibilityOf(googlePage.getSelector.checkFirstPage)
        ), 3000, 'Page appear');
        googlePage.clickFirstLink();
        expect(sisensePage.getSelector.checkLogo.getText()).toContain('Sisense');
    });

});