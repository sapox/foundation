

/*
 * HOME VIEW
 */




app.homeView = Backbone.View.extend({
	
	el: '#app_content',
	template: $('#tpl_home').html(),
    render: function () {
    	$('#app_content').addClass('col-md-9');
        var tmpl = _.template(this.template); //tmpl is a function that takes a JSON object and returns html
	
        this.$el.html(tmpl); //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        return this;
    }
});



app.home_view = new app.homeView();

