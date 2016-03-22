Accounts.onCreateUser(function(user){
//console.log(opt);
//console.log(user);
if (user.profile.gender=='m'){
	user.profile.avatar='ava2.png';
}else{
user.profile.avatar='ava1.png';	
}
	return user;
});