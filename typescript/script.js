// Datove typy sting, number a boolean
// let student: string= 'David';
// student = 'Harry';
// console.log(student.toLowerCase());
// Data z formulare
var user1 = {
    name: 'John',
    yearOfBirth: 1990,
    email: 'john@example.com'
};
var user2 = {
    name: 'Jane',
    yearOfBirth: 1995,
};
var calculateAge = function (myUser) {
    var currentYear = new Date().getFullYear();
    return currentYear - myUser.yearOfBirth;
};
// Funkce pro zobrazení informací o uživateli
var displayUserInfo = function (myUser) {
    var userAge = calculateAge(myUser);
    return "U\u017Eivatel ".concat(myUser.name, ", V\u011Bk: ").concat(myUser.yearOfBirth, ", Email: ").concat(myUser.email || 'není k dispozici');
};
console.log(displayUserInfo(user2));
