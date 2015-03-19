App.UserCollection = Backbone.Collection.extend({
	model: App.User,
	localStorage: new Backbone.LocalStorage('user_store'),
	createNewUser: function (data)
	{	
		var regexp = new RegExp('[A-Za-z0-9]+'); // regex for user
		var regexp_pswd = new RegExp('[A-Za-z0-9]{7,20}$'); // regex for password
		
		if (!this.ifExist(data)){
			// data is a litary object data === {}
			
			// becareful if you use id property, .add() is sensitive to id custom property
			// advice: let Backbone to add the identifier "cid" to every model that you will create
			/* The collection simply prevents you from adding models that have the same id. If you were to add models with 
			 * different ids everything should work just fine. In your case if you really don't intend to manage the ids by 
			 * yourself you could omit them upon model instantiation and have backbone generate them for you
			 */
			if (regexp.test(data.mail) && regexp_pswd.test(data.pass)){
				
				if (data.mail === 'spike@gmail.com'){
					data.esAdmin = true;
				}
				
				data.id = this.nextOrder();
				var user = new App.User(data);
				this.add(user);
				user.save();
				this.fetch();
				return true;
			}
			return false;
		}else{
			console.log(data,' already exist');
		}
	},
	
	ifExist: function (data){ return this.findWhere(data); },
	
	comparator: function (user)
	{
		return user.get('mail');
	},
	
	nextOrder: function (){
		if (!this.length){
			return 1;
		}
		return this.last().get('id') + 1;
	}
	
});


App.usr_collection = new App.UserCollection();
App.usr_collection.fetch();