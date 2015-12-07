Meteor.startup(function(){
	if (Accounts.find().count() === 0) {
		var accounts = [
			{
				'username': 'joseph.hsieh@gmail.com',
				'password': '12343142341'
			},
			{
				'username': 'caroline.chang@hotmail.com',
				'password': 'ksfjlasfj'
			},
			{
				'username': 'sylvie.huang@qq.cn',
				'password': 'jjjjjj'
			},
			{
				'username': 'daphne.lin@yahoo.com.tw',
				'password': 'jkl3kj3l2j3'
			}
		];

		for (var i=0; i<accounts.length; i++) {
			Accounts.insert({
				username: accounts[i].username,
				password: accounts[i].password
			});
		}
	}
});