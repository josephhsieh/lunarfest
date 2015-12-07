README


* Setup

* Craete app (at parent folder)
meteor create lunarfest

* Run the server (at lunarfest folder)
meteor

* Adds Angular package
meteor add angular

* Removing template packages to avoid the Angular package conflict 
meteor remove blaze-html-templates 
meteor remove ecmascript

(option) * Adds account password
meteor add accounts-password

* List out all users (in Chrome console)
Meteor.users.find().fetch();

* Adds account login UI
meteor add accounts-ui

* Database UI Control for Meteor (ctrl+m to toggle function)
meteor add meteortoys:allthings

* Adds ui-router
meteor add angularui:angular-ui-router



* Open Mongo database from console
meteor mongo

* Insert into database from console in Mongo
db.tasks.insert( { text: "hello world", createdAt: new Date() });



