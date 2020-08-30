function greet(person: any) {
  alert(`Hello, ${person.firstName}`);
}
const person = { firstName : "Frank" };
greet(person);


function greet(person: { firstName: string }) {
  alert(`Hello, ${person.firstName}`);
}
const person = { name : "Frank" };
greet(person);


interface IPerson {
  firstName: string;
};

function greet(person: IPerson) {
  alert(`Hello, ${person.firstName}`);
}
function greetLouder(person: IPerson) {
  alert(`HELLO, ${person.firstName}!!!!`);
}
const person = { firstName : "Frank", hairColor : "Black" };
greet(person);
greetLouder(person);


function greet(person: IPerson) {
  alert(`Hello, ${person.firstName}`);
}
function greetLouder(person: IPerson) {
  alert(`HELLO, ${person.firstName}!!!!`);
}
greet({ firstName : "Frank", hairColor : "Black" });


interface IPerson {
  firstName: string;
  age?: number;
};
function greet(person: IPerson) {
  alert(`Hello, ${person.firstName}`);
}
greet({ firstName : "Frank" }); // Okay


interface IPerson {
  firstName: string;
  getGreeting(lastName: string): string;
};
const person = {
  firstName : "Frank",
  getGreeting(lastName: string) {
    return `Hello, ${this.firstName} ${lastName}`;
  }
};
function greet(person: IPerson) {
  alert(person.getGreeting("Zammetti"));
}
greet(person);


interface IPerson {
  firstName: string;
  greet(): void;
};
class Person implements IPerson {
  firstName: string;
  constructor(inFirstName: string) {
    this.firstName = inFirstName;
  }
  greet() {
    alert(`Hello, ${this.firstName}`);
  }
}
const p = new Person("Frank");
p.greet();


interface IPerson {
  firstName: string;
}
interface INinja extends IPerson {
  numberOfSwords: number;
}
let ninja = {} as INinja;
ninja.firstName = "Ryuki";
ninja.numberOfSwords = 2;

namespace MyFirstNamespace {
export let homeworld = "Jakku";
export function sayName() { alert("Rey"); };
}


alert(MyFirstNamespace.homeworld);
MyFirstNamespace.sayName();
You can also export classes and interfaces from a namespace:
namespace MyFirstNamespace {
  export class Jedi { }
  export interface RebelScum { }
}


namespace MyFirstNamespace {
  export let homeworld = "Jakku";
}
const homeworld = "Coruscant";
alert(MyFirstNamespace.homeworld); // Jakku
alert(homeworld); // Coruscant

namespace SomeNS { export someFunc1() { } }