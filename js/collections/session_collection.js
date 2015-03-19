/* ********************************* */
//var App = App || {};

App.SessionCollection = Backbone.Collection.extend({
	
	model: App.SessionModel, // always say what model belongs to this collection
	localStorage: new Backbone.LocalStorage('session_store'), // sth that you need to 
	
	login: function ( data ) 
	{	
		
		// GET USER DATA
		var user = App.usr_collection.ifExist(data);
		// CHECK IF EXIST
		if (user){
			this.fetch();
			var session = this.get(0);
			if(!session)
			{
				session = new App.SessionModel({ 
					session	: true, 
					id_user	: user.get('id') 
				});
				
				this.add(session);
				session.save();
				this.fetch();
			}

			return true;
		}
		// LOGIN FAIL
		return false;
		
	},
	
	check_login: function () {
		
		// GET SESSION DATA
		this.fetch();
		return session = this.get(0);
	},

	logout: function () {

		// GET USER DATA
		this.fetch();
		var session = this.get(0);
		console.log(session);
		if (session.get('session')){
			// CHANGE STATUS TO FALSE
			session.destroy();
		//	this.fetch();
			return true;
		}
		return false;

	}
});

App.session_collection = new App.SessionCollection();
App.session_collection.fetch();