/*
	classs
*/
// class78 classs intro
class car {
	constructor(x) {
		this.x = x;
		// this.y = y;
	}
	run(y) {
		console.log(this.x + ' this is ' + y)
	}
}
// const audi = new car('audi');
// audi.run('nice car')

// class79 inheritance
class model extends car {
	constructor(x, z) {
		super(x)
		this.model = z;
		// this.y = y;
	}
	show(y) {
		console.log(this.run() + ' it is a ' + this.model);
	}
}
let myCar = new model('ford', 'mustang');
myCar.show();