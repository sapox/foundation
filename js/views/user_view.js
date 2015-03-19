App.userView = Backbone.View.extend({
	
	el:'#con-tent',
	
	initialize: function ()
	{
		App.session_collection.fetch();
	},
	
	renderProfile: function ()
	{
		
	}
});


App.profileView = Backbone.View.extend({
	
	template: $('#tpl_user_profile'),
	
	render: function ()
	{
		var tpl = _.template(this.template);
	}
});

