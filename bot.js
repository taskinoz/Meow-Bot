// Our Twitter library
var Twit = require('twit');

// We need to include our configuration file
var T = new Twit(require('./config.js'));

// This is the URL of a search for the latest tweets on the '#mediaarts' hashtag.
// Example
//var mediaArtsSearch = {q: "#mediaarts", count: 10, result_type: "recent"}; 

function makeMeow(){
	
	//Seconds Random
	var sec = (Math.floor(Math.random()*60));
	//Minutes Random
	var mins = (Math.floor(Math.random()*60));
	//Hours Random
	var hours = (Math.floor(Math.random()*4));
	
	//Assigns a random number to use for the amount of meows
	var meowRand = (Math.floor(Math.random()*20));
	//Meow for the beginning of the tweet
	var meowCap = "Meow ";
	//Body of the tweet
	var str = "meow ";
	//This will be the composition of the tweet
	//var tweet = meowCap + meow;
	
	String.prototype.repeat = function( num )
	{
    return new Array( num + 1 ).join( this );
	}
	var tweet = meowCap + ( str.repeat(meowRand) );
	
	//tweeting
	T.post('statuses/update', {
        status: tweet
      }, function (err, reply) {});
}


// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60

setInterval(function () {
  try {
    makeMeow();
  }
  catch (e) {
    console.log(e);
  }
}, 1000 * 21 * 123 * 14);
