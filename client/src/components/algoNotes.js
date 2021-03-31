

//////regex method

var str   = "my car is red";
var stringArray = str.split(/(\s+)/);

console.log(stringArray); // ["my", " ", "car", " ", "is", " ", "red"] 


//////

function splitter(string, randomNum)
{
    string = string.split(" ");
    var stringArray = [];
    for(var i =0; i < string.length; i++)
    {
        stringArray.push(string[i]);
        if(i !== string.length-1)
        {
            stringArray.push(" ");
        }
        else{
            return stringArray
        }
    }
}

// need to create 2 random numbers, set them as a variable

// pass that veriable into the splitter function

// after the string is put into an array, we need to use those random numbers to locate the index where the "swap" will happen

// we need to swap the users inputs with the ramon indices 

// turn the array back into a string .join

// return the new string


// Login.js
// make sure that for returning users (the login section) their username and password match what is in the db
// style

// dashboard.js
// 