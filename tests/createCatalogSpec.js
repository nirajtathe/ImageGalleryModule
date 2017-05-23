var imageGalleryPage= require('../pages/galleryPage.js');
var data=require('../data/data.js');

var loginMethod=require('../common_methods/login_method.js');
var logoutMethod=require('../common_methods/logout_method.js');

describe('Create Catalog', function() {

    //login
    beforeAll(function() {
      loginMethod(browser);
    });

    //logout
    afterAll(function(){
      logoutMethod(browser);
    });

    it('Create Catalog from all unused images', function(){
        //first filer unused images
        filterUnusedImages();
      
        imageGalleryPage.elements.message.getText().then(function(result) {
          //if unused image count is greater than zero, then only we are creating a catalog
          if ( (parseInt(result.split(" ")[0])) > 0 ) {
              selectMultipleImagesAndCreateCatalog(parseInt(result.split(" ")[0]));                      
          } else{
            console.log("No unused images available for creating a catalog !!")
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

    function selectMultipleImagesAndCreateCatalog(total){
        
        browser.actions().mouseMove(imageGalleryPage.elements.firstImage).perform();
        //check first image
        imageGalleryPage.elements.checkFirstImage.click();        
        
        var EC = protractor.ExpectedConditions;
        if(total!=1){
          browser.wait(EC.elementToBeClickable(imageGalleryPage.elements.selectAll),5000);
          //check multiple images
          imageGalleryPage.elements.selectAll.click();
        }

        browser.wait(EC.elementToBeClickable(imageGalleryPage.elements.createCatalog), 5000);
        //click on create catalog
        imageGalleryPage.elements.createCatalog.click();
        browser.sleep(200);

        imageGalleryPage.elements.catalogName.sendKeys(data.catalogName);
        imageGalleryPage.elements.catalogCode.sendKeys(data.code);
        imageGalleryPage.elements.catalogDescription.sendKeys(data.description);
        
        //total taken from actual unused images
        imageGalleryPage.elements.catalogTotalImages.sendKeys(total);
        
        imageGalleryPage.elements.catalogPrice.sendKeys(data.price);

        //create catalog
        imageGalleryPage.elements.createCatalogButton.click();
        
        browser.sleep(700);

    }

});