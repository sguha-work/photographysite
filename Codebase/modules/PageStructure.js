/**
* This file holds the all page structures.
* Whenever initializing a page this format should be followed
*/

// only holds the minimal information needed for login used for password checking in the login time
var db_USER_LOGIN = {
	user_id : "",
	user_email : "",
}

// responsible for storing the history of the login of any user	
var db_USER_LOGIN_HISTORY = {
	user_login_counter : "",
	user_id : "",
	user_login_time : "",
	user_login_ip : "",
	user_login_agent_id : "",
	user_login_lat : "",
	user_login_long : "",
	user_logout_time : "",
}

// holds the details of the login agent the user is using to be logged in
var  db_USER_LOGIN_AGENT = {
	user_agent_id : "",
	user_agent_name : "",
	user_agent_key : "",
}

// keeps the password list of the user
var db_USER_PASSWORD = {
	user_password_id : "",
	user_id : "",
	user_password : "",
	user_password_active_from : "",
	user_password_is_active : ""
}