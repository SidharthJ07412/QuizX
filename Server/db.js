import pg from 'pg';
var conString =
	"postgres://btneohyg:DK6Bkm0ePKGblH86-DJmFFQ-TLfCGlzH@trumpet.db.elephantsql.com/btneohyg";
var client = new pg.Client(conString);
client.connect(function (err) {
	if (err) {
		return console.error("could not connect to postgres", err);
	}
});

export default client;