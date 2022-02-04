// 01 - Format

function formatDate(dateString){

    let date = new Date(dateString)

    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth()+1).toString().padStart(2, "0");
    let year = date.getFullYear();

    console.log("la date est: " + day + "/" + month + "/" + year);

}

formatDate("1990-06-23");

// 02 - Age

function calculateAge(birthday){

    let dates = new Date(birthday);
    let ans = new Date(new Date() - dates);
    let age = ans.getFullYear() - 1970;
    console.log(age); 
}

calculateAge("1990-01-02");


// 03 - Validator

var prompt = require("prompt");

var schema = {
  properties: {
    email: { 
        pattern: /^\S+@\S+.\S+$/, required: true, message:"Email non valide" },
    username: {
        pattern: /^[a-zA-Z-]+$/, required: true, message:"Username non valide"},
    password: {
        required: true, message:"Password non valide", conform: function (value) {
        if (value.search(/.{6,}/) === -1) {
            return false;
        }

        if (value.search(/[a-zA-Z]/) === -1) {
            return false;
        }

        if (value.search(/[0-9]/) === -1) {
            return false;
        }

        if (value.search(/[^a-zA-Z0-9-]/) > -1) {
            return false;
        }
        return true;
    }}
  },
};

prompt.start();
prompt.get(schema, (err, res) => {
    console.log(res);
});
