console.log('Hello World');

class Token {

	constructor(player, zone, played) {
		this.player = player // which player the token belongs to
		this.zone = zone // which zone the token is in 
		this.played = false // has the token been played yet
	}

} 

class Row {

	constructor(number, full) {
		this.number = number // where the row is in relation to the others
		this.full = false // is the row full with tokens or not
	}

}



const game = {

}
