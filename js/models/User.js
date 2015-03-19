//var App = App || {};

App.User = Backbone.Model.extend({
	defaults:{
	id:0,
	mail:'',
	pass:'',
	esAdmin: false
	},
});
