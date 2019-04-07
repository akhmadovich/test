let soldiers = {
	health: 400,
	armor: 100
}

let john = {
	health: 100
};



john.__proto__ = soldiers;
console.log(john)