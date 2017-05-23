module.exports = { 
	elements:{
		//elements for checking an image
		gallery: element(by.css('.menu.ng-scope>li>a[ui-sref="home.sell.gallery"]')),
		firstImage: element(by.css('#gridView div:nth-child(2)>img')),
		checkFirstImage: element(by.css('.gallery-checkbox>label[for="image-0"]')),
		//selectAllForDelete: element(by.css('.label-s.ng-binding')),
		deleteSelectedImages: element(by.css('.multiselect-middlesection>ul li:nth-child(2)>a')),
		confirmDeletes: element(by.css('#confirmDeleteAllModal div:nth-child(2)>a[ng-click="galleryImagesTab.deleteAllImages()"]')),
		//getTotalImages: element(by.css('.gallery-search-text.ng-binding')),
		
		//elements for unused images filter
		gallery_filter: element(by.css('#gallery-filter')),
		selectImage: element(by.css('.col.no-padding.filters.s5>ul li:nth-child(1)')),
		unusedImage: element(by.css('.ng-scope>label[for=new]')),
		apply_filter: element(by.css('.col.s6.apply>span')),

		message: element(by.css('.gallery-search-text.ng-binding')),

		//catalog creation
		createCatalog: element(by.css('.multiselect-middlesection>ul>li>a[ng-click="galleryImagesTab.openCreateCatalouge()"]')),
		//catalog parameters
		catalogName: element(by.css('#gcatalog-name')),
		catalogCode: element(by.css('#gcode')),
		catalogDescription: element(by.css('#gdescription')),
		catalogTotalImages: element(by.css('#totalnumber')),
		catalogPrice: element(by.css('#gprice')),
		//createButton
		createCatalogButton: element(by.css('.right.btn-flat.createCatalogBuuton')),

		//image restore test 
		trashTab: element(by.css('.left.gallery-tab-content.ng-binding[ng-click="sGallery.goToDeletedImagesTab()"]')),
		firstTrashImage: element(by.css('#gridView div:nth-child(1)>img')),
		checkImage: element(by.css('label[for="image-0"]')),
		selectAll: element(by.css('.label-s.ng-binding')),
		restore: element(by.css('.multi-select-icons>a[ng-click*="restoreAllImages()"]')),

		//delete images from trash
		deleteAll: element(by.css('.multi-select-icons>a[ng-click*="deleteImages()"]'))
									
	}

};