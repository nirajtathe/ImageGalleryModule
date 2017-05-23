var imageGalleryPage= require('../pages/galleryPage.js');
var data=require('../data/data.js');

var loginMethod=require('../common_methods/login_method.js');
var logoutMethod=require('../common_methods/logout_method.js');

describe('Delete Images', function() {

    //login
    beforeAll(function() {
      loginMethod(browser);
    });

    //logout
    afterAll(function(){
      logoutMethod(browser);
    });

    it('Delete -unused images', function(){

        //filter unused images
        filterUnusedImages();
      
        imageGalleryPage.elements.message.getText().then(function(result) {
          //if the unused images are greater than zero, then moving it to trash  
          if ( (parseInt(result.split(" ")[0])) > 0 ) {
              selectMultipleImagesAndDelete(parseInt(result.split(" ")[0]));                      
          } 
          else{
              console.log("No unused images available for deletion !!")
          }

        }); 
        
    });

    function filterUnusedImages(){
        //go to image gallery
        imageGalleryPage.elements.gallery.click();

        //filter to select unused images
        imageGalleryPage.elements.gallery_filter.click();
        imageGalleryPage.elements.selectImage.click();
        imageGalleryPage.elements.unusedImage.click();
        imageGalleryPage.elements.apply_filter.click();

        browser.sleep(2000);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(imageGalleryPage.elements.message),5000);
    }

    function selectMultipleImagesAndDelete(total){

        browser.actions().mouseMove(imageGalleryPage.elements.firstImage).perform();
        //check first image
        imageGalleryPage.elements.checkFirstImage.click();        
        
        var EC = protractor.ExpectedConditions;

        //if images count is greater than 1, then select all images
        if(total!=1){
          browser.wait(EC.elementToBeClickable(imageGalleryPage.elements.selectAll),5000);
          //check multiple images
          imageGalleryPage.elements.selectAll.click();
        }

        browser.wait(EC.elementToBeClickable(imageGalleryPage.elements.deleteSelectedImages), 5000);
        //click on delete 
        imageGalleryPage.elements.deleteSelectedImages.click();
        browser.sleep(200);

        //wait for confirmation popup
        browser.wait(EC.elementToBeClickable(imageGalleryPage.elements.confirmDeletes), 5000);
        //Accept the confirmation. Click on yes
        imageGalleryPage.elements.confirmDeletes.click();

        browser.sleep(200);
    }

});