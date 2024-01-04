
var mongoose = require( 'mongoose' );

var dbURI = 'mongodb+srv://esmaozturk:3788@mekanbul.vbkicsi.mongodb.net/mekanbul';
mongoose.connect(dbURI);

mongoose.connection.on("connected",function() {
	console.log(dbURI + "adresindeki veritabanına bağlanıldı!\n");
});

mongoose.connection.on("error",function(err) {
	console.log("Mongoose bağlantı hatası\n" + err);
});

mongoose.connection.on("disconnected",function() {
	console.log("Mongoose bağlantısı kesildi!\n");
});

process.on("SIGINT",function(){
	mongoose.connection.close();
	console.log("Bağlantı kapatıldı.");
	process.exit(0);
});
require("./venue");


