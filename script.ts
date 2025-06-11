// Datove typy sting, number a boolean
// let student: string= 'David';
// student = 'Harry';
// console.log(student.toLowerCase());

// let age: number = 20;
// age = 50;
// console.log(age.toFixed(2));

// let isAdult: boolean = true;
// isAdult = false;
// console.log(isAdult);

// const hasParkingLotT = {
//     has: true,
//     has_no: false
// }

// let schoolName: string = 'Obchodní akademie České Budějovice';
// let studentCount: number = 286;
// let isCertified: boolean = true;
// let teacherCount: number = 52;
// let schoolStreet: string = 'Teronova 26';
// let hasParkingLot: boolean = true;

// Null a undefined
// let firstName: null = null
// let bankAccount: undefined = undefined;

// Any
// let anything: any = 'Hello';
// anything = 42;
// anything = true;

// Type inference
// let secondName = 'Kokta';

// Type interface vs Zadání datového typu
// let firstName: string;
// let secondName: string = 'Kokta';

// let names = ['David', 'Harry', 'Karel', 'Alois', 'Petr'];
// for (let oneName of names){
    // firstName = oneName;
    // console.log(`${firstName} ${secondName}`);
// }

// Funkce

// const sum = (num1: number, num2: number) => {
//     return num1 + num2;
// }
// console.log(sum(10, 20));
// console.log(sum(10, 30));

// const introduction = (firstName: string, secondName: string): string => {
//     return `${firstName} ${secondName}`;
// }

// console.log(introduction('David', 'Kokta'));
// console.log(introduction('Harry', 5));

// const crimeDescription = (
//     firstName: string | null,
//     secondName:string = 'nezadáno',
//     crime:string
// ):string => {
//     return `${firstName} ${secondName} spáchal zločin ${crime}.`;
// }

// console.log(crimeDescription('David', 'Kokta', 'krádež'));

// Funkce a návratové typy
// const square = (num: number): number => {
//     return num * num;
// }
// console.log(square(5));

// Funkce a navratovy typ
// const division = (num1: number, num2: number): number => {
//     return num1 / num2;
// }

// console.log(division(10, 2));
// console.log(division(10, 0));

//Funkce a contextual typing
// const students = ['David', 'Harry', 'Karel'];

// const newStudents = students.map((oneStudent):string => oneStudent.toUpperCase());

// console.log(newStudents);

// const sayHello = ():void =>
//     console.log('Ahoj')

// sayHello();

// const showMessage = (message: string): void => {
//     const output = document.getElementById('output');
//     if (output) {
//         output.textContent = message;
//     }
// }
// showMessage ('Vitaj, Bohusu')

//Funkce a never
// const errorFunction = (errorText: string): never => {
//     throw new Error(errorText);
// }

// const result = errorFunction('Nastala chyba!');
// console.log(result);

// const gameScreen = ():never => {
//     while(true) {
//         console.log('Obrazovka hry se vykresluje...');
//     }
// }

// gameScreen()

//Objekty
// const student: {first:string, second:string, age:number} = {
//     first: 'Harry',
//     second: 'Potter',
//     age: 12,
// }

// console.log(student.first);
// console.log(student.second);
// console.log(student.age);

// const printName = (person:{first:string, second:string}):void => {
//     console.log(`${person.first} ${person.second}`);
// }

// printName(student)

//Objekt jako navratova hodnota
// const randomCoordinate = ():{x:number, y:number} => {
//     return {
//         x: Math.random(),
//         y: Math.random()
//     };
// }

// console.log(randomCoordinate());
// console.log(randomCoordinate().x);
// console.log(randomCoordinate().y);

//Type alias

// type User = {
//     name: string,
//     age: number,
//     email: string
// }

// const john: User = {
//     name: 'John Doe',
//     age: 30,
//     email: 'john@example.com'
// }

// console.log(john.name);
// console.log(john.age);
// console.log(john.email);

// const anna: User = {
//     name: 'Anna Doe',
//     age: 28,
//     email: 'anna.doe@example.com'
// }

// console.log(anna.name);
// console.log(anna.age);
// console.log(anna.email);

// type Address = {
//     street: string;
//     city: string;
//     postalCode: string;
// }

// type Person = {
//     name: string;
//     age: number;
//     address: Address;
// }

// const alice: Person = {
//     name: 'Alice Smith',
//     age: 28,
//     address: {
//         street: '123 Main St',
//         city: 'Springfield',
//         postalCode: '12345'
//     }
// }

// console.log(alice.address.street)

// type Point = {
//     firstPart: number;
//     secondPart: number;
// }

// const testResults = (myPoint:Point):Point => {
//     return {
//         firstPart: myPoint.firstPart * 2,
//         secondPart: myPoint.secondPart * 2,
//     }
// }

// console.log (testResults({firstPart: 80, secondPart: 90}));

 // type UserId = number;

// const getUser = (id: UserId) => {

// }

// Union typy

// type Status = 'loading' | 'success' | 'error';

// const showStatus = (situationStatus:Status) => {
//     if (situationStatus === 'loading') {
//         console.log('Načítání dat...');
//     } else if (situationStatus === 'success') {
//         console.log('Data byla úspěšně načtena.');
//     } else if (situationStatus === 'error') {
//         console.log('Nastala chyba při načítání dat.');
//     } else {
//         return null
//     }
// }

//Type alias / optional properties
// type Website = {
//     title: string;
//     url: string;
//     pages?: number;
//     author: string;
// }

// const firstWebsite: Website = {
//     title: 'hacknibudoucnost',
//     url: 'hacnibudoucnost.cz',
//     pages: 38,
//     author: 'David Setek',
// }

// console.log(firstWebsite.title)
// console.log(firstWebsite.url)
// console.log(firstWebsite.pages)
// console.log(firstWebsite.author)

// type Book = {
//     title: string;
//     author: string;
//     yearPublished?: number;
//     genre?: string;
// }

// const firstBook: Book = {
//     title: 'Hobbit',
//     author: 'J.R.R. Tolkien',
//     genre: 'fantasy',
// }

// type Car = {
//     brand: 'string',
//     model: 'string',
//     year?: number,
//     color: 'string',
// }

// const firstCar : Car = {
//     brand: 'Tesla',
//     model: 'Model S',
//     color: 'Red',
// }

// type Website = {
//     title: string;
//     url: string;
//     pages?: number;
//     author: string;
// }
//
// const firstWebsite: Website = {
//     title: 'david',
//     url: 'david.cz',
//     // pages: 8,
//     author: 'David Setek',
// }
//
// const websiteInfo = (internetWebsite: Website): string => {
//     // const pagesNumber = internetWebsite.pages === undefined ? 'neznámý počet' : internetWebsite.pages;
//     const pagesNumber = internetWebsite.pages ?? 'neznámý počet';
//
//     return `Webová stránka ${internetWebsite.title} má URL ${internetWebsite.url}, obsahuje ${pagesNumber} stránek a autorem je ${internetWebsite.author}.`;
// }
//
// console.log(websiteInfo(firstWebsite));

// type Website = {
//     readonly title: string;
//     url: string;
//     pages?: number;
//     author: string;
// }
//
// const firstWebsite: Website = {
//     title: 'david',
//     url: 'david.cz',
//     // pages: 8,
//     author: 'David Setek',
// }
//
// consol.log (firstWebsite.title);
// // firstWebsite.title = 'novy title';
// console.log(firstWebsite.title);

// Type alias / intersection types
// type Person = {
//     name: string;
//     age: number;
// }
//
// type Employee = {
//     company: string;
//     jobTitle: string;
// }
//
// type PersonEmployee = Person & Employee;
//
// const employee1: PersonEmployee = {
//     name: 'John',
//     age: 28,
//     company: 'Some Factory',
//     jobTitle: 'handyman',
// }

// type BankAccount = {
//     pin: number;
//     accountNumber: number;
// }
//
// type OtherProperties = {
//     loan: boolean;
//     retirementSavings: boolean;
// }
//
// type ComplexBankAccount = BankAccount & OtherProperties & {insurence?: boolean};
//
// const bankAccount1: ComplexBankAccount = {
//     pin: 1234,
//     accountNumber: 567890,
//     loan: true,
//     retirementSavings: false,
//     insurence: true,
// }
//
// console.log(bankAccount1.pin);
// console.log(bankAccount1.accountNumber);
// console.log(bankAccount1.loan);
// console.log(bankAccount1.retirementSavings);

// Komplexni uloha
// type User = {
//     name: string;
//     yearOfBirth: number;
//     email?: string;
// }

// Data z formulare
// const user1: User = {
//     name: 'John',
//     yearOfBirth: 1990,
//     email: 'john@example.com'
// }

// const user2: User = {
//     name: 'Jane',
//     yearOfBirth: 1995,
// }
//
// const calculateAge = (myUser: User): number => {
//     const currentYear = new Date().getFullYear();
//     return currentYear - myUser.yearOfBirth;
// }
//
// Funkce pro zobrazení informací o uživateli
// const displayUserInfo = (myUser: User): string => {
//     const userAge = calculateAge(myUser);
//     return `Uživatel ${myUser.name}, Věk: ${myUser.yearOfBirth}, Email: ${myUser.email || 'není k dispozici'}`;
// }
//
// console.log(displayUserInfo(user2));

//Pole

// const students:string[] = ['David', 'Harry', 'Karel', 'Alois', 'Petr'];
// students.push('Ron');
// console.log(students);

// let testResults:number [] = [80, 90, 75, 85, 95];
// testResults.push(5);
// console.log(testResults);

// let boolArray: boolean[] = [true, false, true, true, false];
// console.log(boolArray);

// Pole - alternativni zapisy

// const strings: string[] = ['Harry', 'Ron', 'Uwe'];
// const strings:Array<string> = ['Harry', 'Ron', 'Uwe'];

// const numbers: number[]= [80, 90, 75, 85, 95];
// const numbers: Array<number> = [80, 90, 75, 85, 95];

// const booleans:boolean[] = [true, false, true, true, false];
// const booleans: Array<boolean> = [true, false, true, true, false];

// Pole objektu
// type TestResults = {
//     firstPart: number;
//     secondPart: number;
// }

// const allResults: TestResults[] = [
//     { firstPart: 80, secondPart: 90 },
//     { firstPart: 75, secondPart: 85 },
//     { firstPart: 95, secondPart: 100 }
// ];

// console.log(allResults[0].firstPart);

// Multidimenzionalni pole

// const table:string [][] = [
//     ['Jméno', 'Věk', 'Město'],
//     ['David', '30', 'Praha'],
//     ['Karel', '25', 'Brno'],
//     ['Petr', '28', 'Ostrava']
// ]

// console.log(table[0][0]);

// const table2:number [][][] = [
//     [
//         [2, 3, 4],
//         [4, 4, 1],
//     ],
//     [
//         [5, 6, 7],
//         [8, 9, 10],
//     ]
// ]

// Union types
// const getValue = (num:number): number | string => {
//     if (num % 2 == 0) {
//         return num * 2
//     } else {
//         return `Cislo ${num} je liche.`;
//     }
// }
//
// console.log(getValue(1));
// console.log(getValue(7));

// let students:string|string[];
// students = 'David';
// console.log(students);
//
// students = ['David', 'Harry', 'Karel'];
// console.log(students);

type

