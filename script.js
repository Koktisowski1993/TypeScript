// Datove typy sting, number a boolean
// let student: string= 'David';
// student = 'Harry';
// console.log(student.toLowerCase());
;
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
