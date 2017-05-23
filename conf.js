exports.config = {

  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    //browserName: 'firefox'
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },
  
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
  
  suites: {
    deleteImagesFromGallery: 'tests/deleteImageSpec.js',
    deleteImagesFromTrash: 'tests/deleteAllImageFromTrashSpec.js',
    restoreImages: 'tests/imageRestoreSpec.js',
    createCatalog: 'tests/createCatalogSpec.js'
  }

  /*multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],*/
}