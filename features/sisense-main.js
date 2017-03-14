let sisensePage = require('../pages/sisense-page.js');
let baseItem = require('../pages/base-item');

describe ('Sisense main page', function() {

    let  EC = protractor.ExpectedConditions;

    beforeEach(function() {
        browser.ignoreSynchronization = true;
    });

    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

    it('Test opening rhe DEMO tab', function() {
        baseItem.url('https://www.sisense.com');
        expect(sisensePage.getSelector.checkLogo.getText()).toContain('Sisense');
        browser.wait(EC.and(
            EC.visibilityOf(sisensePage.getSelector.startFreeTrialButton),
            EC.visibilityOf(sisensePage.getSelector.demoButton)
        ), 3000, 'Start Free Trial and Demo buttons should appear');
        sisensePage.getSelector.linkSisenseDashboard.click();
        browser.wait(EC.and(
            EC.visibilityOf(sisensePage.getSelector.openDashboardButton)
        ), 3000, 'Open dashboard button should appear');
    });

    it('Browser at www.sisense.com/demo/', function() {
        baseItem.url('https://www.sisense.com/demo/');
        sisensePage.getSelector.openDashboardButton.click();
        sisensePage.switchToIframe('.fancybox-iframe');
        sisensePage.checkStakedBarIsVisible(['Athens','Berlin','Cape Town','London','Paris']);
    });

    it('Test selection on chart from demo dashboard.', function() {

        baseItem.url('https://www.sisense.com/demo/');
        sisensePage.getSelector.openDashboardButton.click();
        sisensePage.switchToIframe('.fancybox-iframe');
        sisensePage.checkStakedBarIsVisible(['Athens','Berlin','Cape Town','London','Paris']);
        sisensePage.getSelector.fullScreenButton.click();
        browser.wait(EC.and(
            EC.visibilityOf(sisensePage.getSelector.marketingWidget)
        ), 10000, 'Marketing widget should appear');
        sisensePage.expectNameStakedBar(['Athens','Berlin','Cape Town','London','Paris']);
    });

});
