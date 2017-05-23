var imageGalleryPage= require('../pages/galleryPage.js');

var loginMethod=require('../common_methods/login_method.js');
var logoutMethod=require('../common_methods/logout_method.js');

describe('Delete all images permanently', function() {

    //login
    beforeAll(function() {
      loginMethod(browser);
    });

    //logout
    afterAll(function(){
      logoutMethod(browser);
    });

    it('Delete All Images from Trash',function(){
    	//go to gallery
    	imageGalleryPage.elements.gallery.click();

    	expect(imageGalleryPage.elements.trashTab.isPresent()).toBe(true);
    	//go to trash tab
    	imageGalleryPage.elements.trashTab.click();
    	browser.sleep(500);
    	//get total images count in trash

    	var total=0;
    	imageGalleryPage.elements.trashTab.getText().then(function(result) {
          
          var res=result.split('(');
          var res1=res[1].split(')');
          total=parseInt(res1[0]);
          browser.sleep(500);
    	  //delete only if images are present in trash
		  if( total > 0){	
		    	deleteImage(total);
		  }
		  else{
		    	console.log('No images present in trash to restore !!');
		  }
		  browser.sleep(700);

        }); 
	
	});

    function deleteImage(total){
    	
    	//move to first image
    	browser.sleep(100);
    	browser.actions().mouseMove(imageGalleryPage.elements.firstTrashImage).perform();
    	//select first image
    	imageGalleryPage.elements.checkImage.click();
    	browser.sleep(100);
    	var EC = protractor.ExpectedConditions;

    	if(total>1){
    		browser.wait(EC.elementToBeClickable(imageGalleryPage.elements.selectAll),5000);
    		//select all images
    		imageGalleryPage.elements.selectAll.click();
    	}

    	browser.wait(EC.elementToBeClickable(imageGalleryPage.elements.deleteAll),5000);

    	//click on permanently delete
    	imageGalleryPage.elements.deleteAll.click();

    	browser.sleep(500);
    	expect(browser.getCurrentUrl()).toBe('http://blubox.shoppinpal.com/seller/sell/gallery/images');
    }

});