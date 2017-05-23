module.exports={
	elements:{
		usernameField: element(by.model('login.email')),
		passwordField: element(by.model('login.password')),
		submit: element(by.css('input[type="submit"]')),
		checkUser: expect(element(by.css('.user-name')).getText())

	},
	get : function() {  
        browser.get('http://blubox.shoppinpal.com/seller/login'); //overrides baseURL  
        browser.driver.manage().window().maximize();
        browser.waitForAngular();  
    }

};