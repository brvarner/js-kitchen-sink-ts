// Step 4: Creating a variable and attaching my name.
var myName = /** @class */ (function () {
    function myName(name) {
        this.name = name;
    }
    return myName;
}());
var theName = new myName('Brandon Varner');
// Step 5: Assigning a variable to the number of states 
var States = /** @class */ (function () {
    function States(numberofStates) {
        this.numberofStates = numberofStates;
    }
    return States;
}());
var us = new States(50);
console.log(us);
// Step 6 Adding 5 and 4 together
var Sum = /** @class */ (function () {
    function Sum(x, y) {
        this.x = x;
        this.y = y;
    }
    Sum.prototype.add = function () {
        var newSum = this.x + this.y;
        console.log(newSum);
    };
    return Sum;
}());
var nine = new Sum(5, 4);
nine.add();
console.log(nine);
// Step 8: Creating sayHello function and calling its method 
var sayHello = /** @class */ (function () {
    function sayHello(message) {
        this.message = message;
    }
    sayHello.prototype.howdy = function () {
        alert(this.message);
    };
    return sayHello;
}());
var hola = new sayHello('Hello World!');
hola.howdy();
// Step 9: CheckAge Function 
var CheckAge = /** @class */ (function () {
    function CheckAge(name, age) {
        this.name = name;
        this.age = age;
    }
    CheckAge.prototype.call = function () {
        if (this.age < 21) {
            alert("Sorry " + this.name + ", you're not old enough to view this page!");
        }
    };
    return CheckAge;
}());
var Charles = new CheckAge('Charles', 21);
Charles.call();
var Abby = new CheckAge('Abby', 27);
Abby.call();
var James = new CheckAge('James', 18);
James.call();
var John = new CheckAge('John', 17);
John.call();
// Step 10 Veggie Array
var veggies;
veggies = ["broccoli", "asparagus", "spinach", "collard greens", "bell peppers"];
veggies.forEach(function (veggie) { return console.log(veggie); });
var Pet = /** @class */ (function () {
    function Pet(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    Pet.prototype.call = function () {
        console.log(this.name + " is a " + this.breed);
    };
    return Pet;
}());
var katsu = new Pet("Katsu", "cat");
katsu.call();
var tortoises;
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
];
var turtleAge = function (tortoise) {
    if (tortoise.age < 21) {
        alert("Sorry " + tortoise.name + ", you're not old enough to view this page!");
    }
};
tortoises.forEach(function (tortoise) { return turtleAge(tortoise); });
var Word = /** @class */ (function () {
    function Word(word) {
        this.word = word;
    }
    Word.prototype.getLength = function () {
        return this.word.length;
    };
    return Word;
}());
var helloCounter = new Word('Hello World');
var counterCounter = helloCounter.getLength();
var divider = function (number) {
    if (number % 2 === 1) {
        console.log('The world is an odd place!');
    }
    else {
        console.log('The world is nice and even!');
    }
};
divider(counterCounter);
