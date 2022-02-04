// 03 - Map Names

let longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

let shortNames = longNames.map(function(person) {

    let final = { 
        
        name: person.firstName + " " + person.lastName 
    
    }

    return final;
});

console.log(shortNames);