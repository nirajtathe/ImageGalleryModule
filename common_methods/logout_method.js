module.exports=function(browser){
	
    var logoutPage= require('../pages/logoutPage.js');
	var data=require('../data/data.js');
	var loginPage= require('../pages/loginPage.js');

	var EC = protractor.ExpectedConditions;

	browser.wait(EC.elementToBeClickable(logoutPage.elements.logoutButtonIcon), 5000);
	logoutPage.elements.logoutButtonIcon.click();

	browser.wait(EC.elementToBeClickable(logoutPage.elements.logoutButton),5000);
	browser.sleep(600);
	logoutPage.elements.logoutButton.click();

	//expect login page element
	browser.sleep(800);
	expect(loginPage.elements.usernameField.isDisplayed()).toBe(true);
	
};