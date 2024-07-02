// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    // Put your code here...
    i = 1
    while (i<=100) {
        fizz = (i%3 == 0)
        buzz = (i%5 == 0)
        output=""
        if (fizz){
            output = output + "Fizz"
        }
        if (buzz){
            output = output + "Buzz"
        }
        
        if (output == ""){
            console.log(i)
        } else {
            console.log(output)
        }
        i = i + 1

    }
}

// Now, we run the main function:
fizzbuzz();

