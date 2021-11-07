// Step 4: Creating a variable and attaching my name.
class myName {
    constructor(private name: string) {
    }
}

let theName = new myName('Brandon Varner');

// Step 5: Assigning a variable to the number of states 
class States {
    constructor(private numberofStates: number) {
    }
}

let us = new States(50);

console.log(us)

// Step 6 Adding 5 and 4 together
class Sum {
    constructor(private x: number, private y: number) {
    }

    add() {
        let newSum = this.x + this.y;
        console.log(newSum)
    }
}

let nine = new Sum(5, 4)
nine.add()
console.log(nine)

// Step 8: Creating sayHello function and calling its method 
class sayHello {
    constructor(private message: string) { }

    howdy() {
        alert(this.message)
    }
}

let hola = new sayHello('Hello World!')
hola.howdy()

// Step 9: CheckAge Function 
class CheckAge {
    constructor(private name: string, private age: number) { }

    call() {
        if (this.age < 21) {
            alert(`Sorry ${this.name}, you're not old enough to view this page!`)
        }
    }
}

let Charles = new CheckAge('Charles', 21)
Charles.call()

let Abby = new CheckAge('Abby', 27)
Abby.call()

let James = new CheckAge('James', 18)
James.call()

let John = new CheckAge('John', 17)
John.call()

// Step 10 Veggie Array
let veggies: string[]

veggies = ["broccoli", "asparagus", "spinach", "collard greens", "bell peppers"]

veggies.forEach(veggie => console.log(veggie))

class Pet {
    constructor(private name: string, private breed: string){
    }

    call(){
        console.log(`${this.name} is a ${this.breed}`)
    }
}

let katsu = new Pet("Katsu", "cat")
katsu.call()

interface Tortoise {
    name: string;
    age: number
}

let tortoises : Array<Tortoise>
tortoises = [
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

let turtleAge = (tortoise: Tortoise) =>{
    if(tortoise.age < 21){
        alert(`Sorry ${tortoise.name}, you're not old enough to view this page!`)
    }
}

tortoises.forEach(tortoise => turtleAge(tortoise))

class Word {
    constructor(private word: string){}

    getLength(){
        return this.word.length
    }
}

let helloCounter = new Word('Hello World')
let counterCounter = helloCounter.getLength()

let divider = (number: number) => {
    if(number % 2 === 1){
        console.log('The world is an odd place!')
    } else {
        console.log('The world is nice and even!')
    }
}

divider(counterCounter)