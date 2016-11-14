var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser());
app.post('/user', function (req, res) {
	//res.send ('Donnees envoyées avec success');
	var post = req.body;

	var ident = {
		userName :'mymail@yahoo.fr',
		passeWord :'motdepasse',
	};
		if(ident.userName === post.userName && ident.passeWord === post.passeWord){
			res.sendFile(__dirname +'/public/connexionValide.html');

		} else {
			res.send('Erreur de connection');
		}
});

// app.get('/', function(req,res){
// 	res.send('well Done');

// });

app.listen(1984,function() {
	console.log('serveur en marche sur le port 1984');
})