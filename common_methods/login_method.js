module.exports=function(browser){
	
    var loginPage= require('../pages/loginPage.js');
	var data=require('../data/data.js');

	loginPage.get();
    
    expect(browser.getTitle()).toEqual('Welcome to Bnext');

    loginPage.elements.usernameField.sendKeys(data.username);
    loginPage.elements.passwordField.sendKeys(data.password);

    loginPage.elements.submit.submit();

    loginPage.elements.checkUser.toEqual(data.user);
   
};