let person = {
    person1: {
        firstName: "john",
        lastName: "doe",
        age: 25,
    },
    person2: {
        firstName: "jane",
        lastName: "doen",
        age: 28,

    },
    person3: {
        firstName: "ellen",
        lastName: "mane",
        age: 35,

    },
    getPersonName: function() {
        let result = [];
        for (let i = 1; i < Object.keys(this).length; i++) {
            let placeholder = "person" + i;
            result.push(this[placeholder].firstName);
            result.push(this[placeholder].lastName);
            result.push(this[placeholder].age);


        }
        return result;
    }
}
console.log(person.getPersonName())
    // var person ={
    //     firstName: "john",
    //     lastName: "doe",
    //     age: 25,
    //     fullName: function() {
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // }
    // var person1 = {
    //     firstName: "jane",
    //     lastName: "doen",
    //     age: 28,
    //     fullName1: function() {
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // }
    // var person2 = {
    //     firstName: "ellen",
    //     lastName: "mane",
    //     age: 35,
    //     fullName2: function() {
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // }
    // console.table(person)
    // console.table(person1)
    // console.table(person2)
    // document.getElementById('result').innerHTML = "Our employees are " + person.fullName() + " and " + person1.fullName1() + " and " + person2.fullName2() + '<br>'
    //     // instead of printing it all in a separate div use += to add and not rewrite


var animal = {
    animalType: "cat",
    animalSound: "meow",
    animalProperty: "fluffy",
    animalPrint: function() {
        return this.animalType + ' ' + this.animalProperty
    }
}
var animal1 = {
    animalType: "dog",
    animalSound: "bark",
    animalProperty: "guard",
    animalPrint1: function() {
        return this.animalType + ' ' + this.animalProperty
    }
}
var animal2 = {
    animalType: "mouse",
    animalSound: "fieps",
    animalProperty: "small",
    animalPrint2: function() {
        return this.animalType + ' ' + this.animalProperty
    }
}
console.table(animal)
console.table(animal1)
console.table(animal2)
document.getElementById('result').innerHTML += "Our animals are " + animal.animalPrint() + " and " + animal1.animalPrint1() + " and " + animal2.animalPrint2() + '<br>'

var car = {
    brand: "Mazda",
    model: "CX-3",
    color: "red",
    carPrint: function() {
        return this.brand + ' ' + this.model + ' ' + this.color
    }
}
var car1 = {
    brand: "Renault",
    model: "Clio",
    color: "grey",
    carPrint1: function() {
        return this.brand + ' ' + this.model + ' ' + this.color
    }
}
var car2 = {
    brand: "Infinity",
    model: "QX70",
    color: "purple",
    carPrint2: function() {
        return this.brand + ' ' + this.model + ' ' + this.color
    }
}
console.table(car)
console.table(car1)
console.table(car2)
document.getElementById('result').innerHTML += "Our cars are " + car.carPrint() + " and " + car1.carPrint1() + " and " + car2.carPrint2()

// var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
// var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

var sandwiches = `{
    "sandwich": "hamburger",
    "calories": "260"
}`
var fries = `{
    "fries_size": "Large French Fries",
    "calories": "570"
}`
var sandwiches = JSON.parse(sandwiches)
var fries = JSON.parse(fries)
    // console.log(sandwiches)
document.getElementById('food').innerHTML = 'My favorite sandwich is a ' + sandwiches.sandwich + ' which has approximately ' + sandwiches.calories + ' calories, along with it I enjoy eating ' + fries.fries_size + ' which have about ' + fries.calories + ' calories.'
    // console.log('My favorite sandwich is a ' + sandwiches.sandwich + ' which has approximately ' + sandwiches.calories + ' calories, along with it I enjoy eating ' + fries.fries_size + ' which have about ' + fries.calories + ' calories.')

// intermediate
let mydata = JSON.parse(employees);
console.log(mydata)
for (let val of mydata) {

    document.getElementById('table').innerHTML += `
    <tr>
    <td>${val.firstName}</td>
    <td>${val.lastName}</td>
    <td>${val.userId }</td>
    <td>${val.emailAddress }</td>
    <td>${val.jobTitleName }</td>
    <td>${val.salary }</td>
    </tr>
    `
}

let theWitcher = JSON.parse(books);
console.log(theWitcher)
for (let ciri of theWitcher) {
    let color = "";
    if (ciri.read == true) {
        color = "green";
    } else {
        color = "red";
    }
    document.getElementById('witcher').innerHTML += `
    <p style="color: ${color}">${ciri.title}</p>
    <p>${ciri.author}</p>
    <img src='${ciri.img}'>
    `

}