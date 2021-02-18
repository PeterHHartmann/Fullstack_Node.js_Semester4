// -------------------------------------------
// create a function call myFirstFunction which returns a greeting.

function myFirstFunction (){
    return "greetings my friend";
}

// -------------------------------------------

function sayHiLater(anyFunctionReference) {
    // simulate some code running
    // ... 5 seconds later ...
    anyFunctionReference();
};

// call sayHiLater and pass a callback that says "Hi"

const sayHi = () => {
    console.log("Hi");
};

sayHiLater(sayHi);

// call sayHiLater and pass a callback that says "Hello"

const sayHello = () => {
    console.log("Hello");
};

sayHiLater(sayHello);

// -------------------------------------------

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

// call interact and let it interact with a person of name
// example: "poke " + name

const pokePerson = (name) => {
    return "Poke " + name;
}

interact(pokePerson, "Peter");

// call interact and in a single line make sure that the following is achieved
// example: "lick " + name

interact((name) => "Lick " + name, "Peter");