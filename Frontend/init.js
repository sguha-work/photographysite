// this files handle all the requests for frontend


module.exports = {
	mainSite  : require("./main_site/init"),
	adminSite : require("./admin_panel/init"),
	processRequest : function(requestURL) {
		if(requestURL == '/') {
			return this.homePageRequest('main');
		}
	},
	homePageRequest : function(siteIdentity) {
		if(siteIdentity=="main") {
			return this.mainSite.homePageRequest();
		} else if(siteIdentity=="admin") {
			return this.adminSite.homePageRequest();
		}
	},
};