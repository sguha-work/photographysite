// this files handle all the requests for frontend

/**
*	points to be noted
*	the final return value mast be a json object like the following
*	{
*		isFile : 1,
*		filePath : 'Frontend/main_site/html/index.html'
*	}
*	based on the object the output will be placed on browser
*
*/
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
			isFile : 1, // determining that the return value holds a file path and the response will be a file
			filePath : 'Frontend/main_site/html/index.html'
		};
		return outputObject;
	}

};