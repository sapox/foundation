var App = App || {};

App.Routers = Backbone.Router.extend({

	routes:{
		''			: 'login',
		'register'  : 'register',
		'home'      : 'home',
		'User'		: 'User'
	},
	login : function () {
		$('#sidebar').addClass('hidden');
		App.auth_usr.render();
	},
	register: function ()
	{
		App.register_view.render();
	},
	home: function()
	{
		var login = App.session_collection.check_login();
		App.home_view.render();
	}
});

App.auth_usr = new App.Auth_usr();
App.router = new App.Routers();
Backbone.history.start(); 