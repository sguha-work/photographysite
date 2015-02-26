// this files handle all the requests for frontend
module.exports = {
	processRequest : function(requestURL) {
		if(requestURL == '/') {
			return this.homePageRequest('main');
		}
	},
	homePageRequest : function(siteIdentity) {
		if(siteIdentity=="main") {
			return this.mainSiteHomePageRequest();
		}
	},
	mainSiteHomePageRequest : function() {
		var outputObject = {
			isFile : 1,
			filePath : 'Frontend/main_site/html/index.html'
		};
		return outputObject;
	}

};