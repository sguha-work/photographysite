//handles all request for main site

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
	homePageRequest : function() {
		var outputObject = {
			isFile : 1, // determining that the return value holds a file path and the response will be a file
			filePath : 'Frontend/MainSite/html/index.html'
		};
		console.log("Mainsite home page request processed");
		return outputObject;
	}
}