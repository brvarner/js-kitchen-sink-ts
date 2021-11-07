var myName = "Brandon Varner"

// Added my Name

const numberOfStates = 50

var sumFiveAndFour = 5 + 4

// variables and const defined

function sayHello() {
     alert('Hello World!')
}

sayHello()

// sayHello function added and tested

function checkAge(name, age) {
    if(age < 21) {
        alert("Sorry " + name + " you aren't old enough to view this page!")
    }

}

checkAge ("Charles", 21)
checkAge ("Abby", 27)
checkAge ("James", 18)
checkAge ("John", 17)

// checkAge function added and tested

var vegetables = ["broccoli", "asparagus", "spinach", "collard greens", "bell peppers"]

vegetables.forEach (value => console.log (value))

// Displaying each vegetable in the array

var pet = {
        name: "Katsu",
        breed: "cat"
}

console.log(pet.name, pet.breed)

// Showing pet name and breed on console

var tortoises = [
    {
        name: "Bart",
        age: 33
    },
    {
        name: "Case",
        age: 15
    },
    {
        name: "Texas",
        age: 20
    },
    {
        name: "Stinky",
        age: 23
    },
    {
        name: "Methuselah",
        age: 153
    }
]

for (var i = 0; i < tortoises.length; i++) {
    checkAge(tortoises[i].name, tortoises[i].age);
}

// the i variable allows you to check each thing individually, while the forEach function is more for calling a function once for each element in an array in order

function getLength(word) {
    return(word.length)
}

getLength("Hello World")

var helloLength = getLength("Hello World")

if (helloLength % 2 == 0){
     console.log("The world is nice and even!")
} else {
    console.log ("The world is an odd place!")
}

// Checked if string had an even number of characters by dividing and checking for a remainder of zero, since the console returns the else statement's condition, we can infer that it's true, meaning that the number of characters in "Hello World" is odd.

