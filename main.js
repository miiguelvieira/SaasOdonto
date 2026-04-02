const messege = "Hello World!";
let primeironome = "Miguel";
let segundonome = "Araujo";
console.log(messege);   

console.log(`meu nome é ${primeironome} ${segundonome}`);
console.log(primeironome.split(''));



console.log("======NOTHIN TO DECLAIRE =====");

const pearson = {
    name: "Miguel",
    age: 30,
    city: "rio de janeiro",
    hobbie: ["programar", "jogar", "viajar"],
    dog: {
        name: "Eddie",
        age: 5,
        breed: "Bulldog",
        pelo: "curto",
    },
};

//const hobbyes = pearson.hobbie;
//const firstname = pearson.name;

const { hobbie, name, age, city, dog } = pearson;


console.log(name);
console.log(age);
console.log(city);
console.log(hobbie);

console.log(pearson.dog.name);
console.log(pearson.dog);


console.log("==============================");
console.log("======NOTHIN TO DECLAIRE =====");
console.log("==============================");

const list =[
    {
        id: 1,
        description: "Comprar pão",
        completed: false,
    },
    {
        id: 2,
        description: "Estudar JavaScript",
        completed: true,
    },
    {
        id: 3,
        description: "Fazer exercícios",
        completed: false,
    },
]

const descriptionmap = list[1].description;
console.log(descriptionmap);

const completed = list[2].completed;
console.log(completed);

const listJson = JSON.stringify(list);
const listList = JSON.parse(listJson);
console.log(listJson);
console.log(listList);

console.log("================================");
console.log("======NOTHIN TO DECLAIRE 2 =====");
console.log("================================");

for (let i = 0; i <= 18; i++) {
    console.log(i); 

}

const cars = ["Ford", "Chevrolet", "Toyota", "Honda", "Nissan"];

//for (let i = 0; i < cars.length; i++) {
//    console.log(cars[i]);
//}

for (let car of cars) {
    console.log(car);
}

console.log("================================");
console.log("======NOTHIN TO DECLAIRE 2 =====");
console.log("================================");

const sum =  1 + 1; 
console.log(`essa é a soma: ${sum}`);

let num = sum === 2 ? "rajadade mec mec" : "vrau vrau";
console.log("utilizzei '?' como if e  ':' como esle " + num);

console.log("================================");
console.log("======NOTHIN TO DECLAIRE 2 =====");
console.log("================================");

const carro = "hh";

switch (carro) {
    case "Ford":
        console.log("O carro é um Ford");
        break;
    case "Chevrolet":
        console.log("O carro é um Chevrolet");
        break;
    case "Toyota":
        console.log("O carro é um Toyota");
        break;
    case "BYD":
        console.log("O carro é um BYD song pplus blaster master");
        break;
    case "Nissan":
        console.log("O carro é um Nissan");
        break;
    default:
        console.log("Carro não encontrado");
}   



console.log("================================");
console.log("======NOTHIN TO DECLAIRE 2 =====");
console.log("================================");


function sum1(a, b) {
    return a + b;
};

const result = sum1(5, 10);
console.log(`O resultado da soma é: ${result}`);    

console.log("================================");
console.log("======NOTHIN TO DECLAIRE 2 =====");
console.log("================================");    