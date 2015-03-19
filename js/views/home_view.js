

/*
 * HOME VIEW
 */




App.homeView = Backbone.View.extend({
	
	el: '#con-tent',
	template: $('#tpl_home').html(),
    render: function () {
    	$('#con-tent').addClass('col-md-9');
        var tmpl = _.template(this.template); //tmpl is a function that takes a JSON object and returns html
	
        this.$el.html(tmpl); //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        return this;
    }
});



App.home_view = new App.homeView();

