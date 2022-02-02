
// // 01 - Calculator

var info = process.argv.slice(2);

for(var i = 0; i < info.length; i++){

    if ( info[i] !== "+" && info[i] !== "-" && info[i] !== "x" && info[i] !== "/" && info[i] !== "%"){

        info[i]= parseInt(info[i]);
    }
}

function calculte(num1, ope, num2){
    
    if( ope === "x"){

        total = num1 * num2;
        console.log(total);
    }

    else if( ope === "+"){

        total = num1 + num2;
        console.log(total);
    }
    else if( ope === "-"){

        total = num1 - num2;
        console.log(total);
    }
    else if( ope === "/"){

        total = num1 / num2;
        console.log(total);
    }
    else if( ope === "%"){

        total = num1 % num2;
        console.log(total);
    }
    else{
        console.log("error calcule")
    }
}

calculte(info[0], info[1], info[2]);
console.log(info);



