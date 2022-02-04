// 06 - Cakes

let cake = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

let cakeAvailibles = cake.filter(function(cakes){

return cakes.flavor === "chocolate";

});

console.log(cakeAvailibles);

let stock = cakeAvailibles.map(function(nocakes){

    nocakes.status =  " is sold out";
    //  nocakes["status"] =  " is sold out";
    return  nocakes
})

console.log(stock);