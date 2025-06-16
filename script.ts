
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

// type StudentResults = {
//     firstPart: number;
//     secondPart: number;
// }
//
// type TeacherResults = {
//     firstPart: number;
//     secondPart: number;
//     thirdPart: number;
// }
//
// const allResults: StudentResults[] | TeacherResults[] = [
//     {firstPart: 0, secondPart: 0},
//     {firstPart: 0, secondPart: 0}
// ]

// Union types - praxe
// const clearNumber = (price: string | number): number => {
//     if (typeof price === 'string') {
//         if (price.includes('$')) {
//             const newPrice = parseFloat(price.replace('$', ''));
//             return newPrice;
//         }
//         throw new Error('Invalid price format: missing "$"');
//     }
//     return price;
// };
//
// console.log(clearNumber(100));
// console.log(clearNumber('$100'))

// Literar types
// type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
//
// const today: DayOfWeek = 'Monday';
// const yesterday: DayOfWeek = 'Sunday';

// type Direction = 'North' | 'South' | 'East' | 'West';
//
// const myDirection: Direction = 'North';

// type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
//
// const actualRoll: DiceRoll = 4;

// Type assertion
// const value: unknown = 'Data z jine appky';
//
// const myString = value as string;


// Type assertion a html prvky
// const imageTag = document.getElementById("myImage") as HTMLImageElement;
// const inputElemet = document.getElementById("input") as HTMLInputElement;
//
// console.log(imageTag);
// console.log(inputElemet);

// type assertion a html prvky a type guard
// const imageTag = document.getElementById("myImage") as HTMLImageElement;
// console.log(myImage.src);
// console.log(myImage.value);


// const imageTag = document.getElementById("myImage");
//
// if (imageTag instanceof HTMLImageElement) {
//     console.log(imageTag.src);
// } else {
//     console.log('Neni to IMG!');
// }


// const isImageElement = (element:Element | null):element is HTMLImageElement => {
//     return element instanceof HTMLImageElement;
// }
//
// const isInputElement = (element:Element | null):element is HTMLInputElement => {
//     return element instanceof HTMLInputElement;
// }
//
// const imageTag = document.getElementById("myImage");
//
// if (isImageElement(imageTag)) {
//     console.log(`Mam obrazek ${imageTag.src}`);
// } else if (isInputElement(imageTag)) {
//     console.log(`Mam input s hodnotou ${imageTag.value}`);
// } else {
//     console.error(`Neznamy typ prvku`)
// }

// definite assignment assertion

// let firstName: string;
//
// console.log(firstName);
//
// const initialize = () => {
//     firstName = "John";
// }
// initialize();
//
// console.log(firstName);

// Non-null assertion

// const inputElement = document.getElementById("userNameInput") as HTMLInputElement;
//
// inputElement!.value = 'John Doe';

// type User = {
//     name: string;
//     email?: string;
// }
//
// const myUser: User = {
//     name: 'John',
//     email: 'john.doe@nothing.com'
// }
//
// console.log(myUser.email!.length);

// --------------------------------------------------------------------------------------------------------------------
// Komplexni uloha
// type User = {
//     name: string;
//     yearOfBirth: number;
//     email?: string;
// }

// const calculateAge = (myUser: User): number => {
//     const currentYear = new Date().getFullYear();
//     return currentYear - myUser.yearOfBirth;
// }

// Funkce pro zobrazení informací o uživateli
// const displayUserInfo = (myUser: User): string => {
//     const userAge = calculateAge(myUser);
//     return `Uživatel ${myUser.name}, Věk: ${myUser.yearOfBirth}, Email: ${myUser.email || 'není k dispozici'}`;
// }
//
//  Funkce pro zpracovani formulare

// document.getElementById('userForm')!.addEventListener('submit', e => {
//     e.preventDefault(); // Zabrani vychozo chovani formulare = znovunacteni

// Ziskani hodnot z formulare
//     const name = (document.getElementsById('name') as HTMLInputElement).value;
//     const yearOfBirth = parseInt((document.getElementById('yearOfBirth') as HTMLInputElement).value);
//     const email = (document.getElementById('email') as HTMLInputElement).value | null;
// });

// vytvoreni objektu uzivatele

// const user: User = {
//     name,
//     yearOfBirth,
//     email,
// }
// zobrazeni informaci o uzivateli
// const createUserInfoParagraph = ():HTMLParagraphElement => {
//     const p = document.createElement('p');
//     p.textContent = displayUserInfo(user);
//     return p;
// }

// const userInfo = document.getElementById('userForm') as HTMLDivElement | null;
// userInfo?.append(createUserInfoParagraph());
//
// Vycisteni formulare
// (document.getElementById('userForm') as HTMLFormElement).reset();
// --------------------------------------------------------------------------------------------------------------------

// Tuple - kdyz nadefinuju typy v poli, cekaji se 3 polozky s danymi typy
// const person: [string, number, boolean] = ['Alice', 30, true];

// const book: [string, string, number] = ['Hobbit', 'J.R.R. Tolkien', 1937];
//
// Destructuring tuple
// const [title, author, publishedYear] = book;
//
// console.log(title);
// console.log(author);
// console.log(publishedYear);

// let car: [string, string, number, boolean];
// car = ['Tesla', 'Model 3', 2020, true];

// const [brand, model, year, isElectric] = car;

// console.log(`Znacka ${brand}`);
// console.log(`Model ${model}`);
// console.log(`Rok vyroby: ${year}`);
// console.log(`Je elektricky: ${isElectric ? 'Ano' : 'Ne'}`);

// Tuple a type alias
// type HTTPresponse = [number, string];
//
// const response1: HTTPresponse = [200, 'OK'];
// const response2: HTTPresponse = [404, 'Stranka nenalezena'];
// const response3: HTTPresponse = [500, 'Server error'];

// Tuple a jeho problemy
// type userInfo = [string, number, boolean];
//
// const user1: userInfo = ['Alice', 30, true];
// const user2: userInfo = ['Bob', 25, false];
// const user3: userInfo = ['Milos', 40, true];

// user1.push('text'); // Toto je povoleno, ale neni to spravne

// Vypis do konzole
// console.log(user1);
// console.log(user2);
// console.log(user3);

//ENUM
// const barvy = ['cervena, zelena, modra'] as const;
// let mojeBarva = barvy[0];
// console.log(mojeBarva);

// enum Barva {
//     Cervena,
//     Zelena,
//     Modra
// }

// let mojeBarva2: Barva = Barva.Cervena;
// console.log(mojeBarva2);

// enum trafficLights {
//     RED = 'red',
//     YELLOW = 'yellow',
//     GREEN = 'green'
// }

// console.log(trafficLights.RED);

// enum Days {
//     MONDAY = 'Monday',
//     TUESDAY = 'Tuesday',
//     WEDNESDAY = 'Wednesday',
//     THURSDAY = 'Thursday',
//     FRIDAY = 'Friday',
//     SATURDAY = 'Saturday',
//     SUNDAY = 'Sunday'
// }

// const isWeekend = (day: Days): boolean => {
//     return day === Days.SATURDAY || day === Days.SUNDAY;
// }

// console.log(isWeekend (Days.MONDAY))

// enum UserRole {
//     ADMIN = 'admin',
//     USER = 'user',
//     GUEST = 'guest',
// }

// const getPermissions = (role: UserRole): string => {
//     switch (role) {
//         case UserRole.ADMIN:
//             return 'Plný přístup ke všem funkcím.';
//         case UserRole.USER:
//             return 'Omezený přístup k některým funkcím.';
//         case UserRole.GUEST:
//             return 'Pouze prohlížení obsahu.';
//         default:
//             return 'Neznámá role.';
//     }
// }
//
//  NOOOICE// enum OrderState {
//     WAITING = 'ceka',
//     SEND = 'odeslana',
//     DELIVERED = 'dorucena',
//     CANCELED = 'zrusena'
// }

// const stateIntro = 'Objednavka je ve stavu:';

// const getOrderStatus = (state: OrderState): string => {
//     switch (state) {
//         case OrderState.WAITING:
//             return `${stateInfo} ${OrderState.WAITING}`;
//         case OrderState.SEND:
//             return `${stateInfo} ${OrderState.SEND}`
//         case OrderState.DELIVERED:
//             return `${stateInfo} ${OrderState.DELIVERED}`
//         case OrderState.CANCELED:
//             return `${stateInfo} ${OrderState.CANCELED}`
//         default:
//             return 'Neznámý stav objednávky.';
//     }
// }
//
// consol.log(getOrderStatus(OrderState.WAITING));
