Chats = new Mongo.Collection("chats");
Chats.allow({
	
	remove:function(userId, doc){
		if (Meteor.user()){ // they logged in
		if ((userId == doc.user1Id) || (userId == doc.user2Id)){ // the user owned that image
				return true;
			}else{
				return false;
			}
		}else { // user not logged in
			return false;
		}
	},// end remove;
	// set update security for rating image
	update:function(){
		if (Meteor.user()){ // they logged in
			return true;
		}else { // user not logged in
			return false;
		}
	}
	
});