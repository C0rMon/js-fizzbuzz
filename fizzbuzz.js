// This is our main function



function fizzbuzz() {


    
    var readlineSync = require("readline-sync")
    var end = readlineSync.question("What number would you like to FizzBuzz to?")

    i = 1
    while (i<=end) {
        
        // Creates the output        
        var output = outputConstructor()
        
        //Checks we dont need to print the number
        if (output == ""){
            console.log(i)
        } else {
            console.log(output)
        }

        // increment
        i = i + 1

    }
}
// Constructs the output string based on previous checks
// Order of if statments allow it to meet the requirements of part 1 and 2
function outputConstructor(){
    const fizz = (i%3 == 0)
    const buzz = (i%5 == 0)
    const bang = (i%7 == 0)
    const bong = (i%11 == 0)
    const fezz = (i%13 == 0)
    const reverse = (i%17 == 0)

    var output=[]

    if (fizz){
        output.push("Fizz")
    }
    if (buzz){
        output.push("Buzz")
    }
    if (bang){
        output.push("Bang")
    }
    if (bong){
        output = ["Bong"]
    }
    if (fezz){
        output = fezz_add(output)
    }
    if (reverse){
        output.reverse()
    }
    return output
}



//Find B in the string and puts Fezz behind it
//Puts Fezz at the end if no B in string
function fezz_add(list){
    const len =list.length
    var output = []
    var fezz = false;

    //if list is empty return Fezz
    if (len == 0){
        return ["Fezz"]
    }

    //Put Fezz before B in list
    for (var i = 0; i < len; i++){
        if (list[i][0] == "B"){
           output.push("Fezz")
            fezz = true
        }
       output.push(list[i])
    }
    //add Fezz at end if no B
    if (!fezz){
        return (output.push("Fezz"))
    }
    return output
}

// Now, we run the main function:
fizzbuzz();

