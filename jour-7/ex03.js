// 03 - Map Names

const longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

const shortNames = longNames.map((person) => {

    const final = { 
        
        name: person.firstName + " " + person.lastName 
    
    }
    return final;
});

console.log(shortNames);