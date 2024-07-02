// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    // Put your code here...
    i = 1
    while (i<=100) {
        // FizzBuzz checks
        const fizz = (i%3 == 0)
        const buzz = (i%5 == 0)
        const bang = (i%7 == 0)
        const bong = (i%11 == 0)
        const fezz = (i%13 == 0)
        const reverse = (i%17 == 0)

        // Creates the output
        var output="";
        if (reverse){

        }
        output = outputConstructor(fizz,buzz,bang,bong,fezz)
        
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
function outputConstructor(fizz,buzz,bang,bong,fezz){
    var output="";

        if (fizz){
            output = output + "Fizz"
        }
        if (buzz){
            output = output + "Buzz"
        }
        if (bang){
            output = output + "Bang"
        }
        if (bong){
            output = "bong"
        }
        if (fezz){
            output = fezz_add(output)
        }
    return output
}



//Find B in the string and puts Fezz behind it
//Puts Fezz at the end if no B in string
function fezz_add(string){
    const len =string.length
    var output = ""
    var fezz = false;
    for (var i = 0; i < len; i++){
        if (string[i] == "B"){
            output = output + "Fezz"
            fezz = true
        }
        output = output + string[i]
    }
    if (!fezz){
        return (output + "Fezz")
    }
    return output
}

// Now, we run the main function:
fizzbuzz();

