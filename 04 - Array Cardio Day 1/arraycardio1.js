var inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
var people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
var fifteen = inventors.filter(function (inventor) {
    return inventor.year > 1499 && inventor.year < 1600;
});
// console.table(fifteen);
var fifteendiv = document.querySelector("#fifteen");
fifteen.forEach(function (inventor) {
    fifteendiv.innerHTML += "<li> ".concat(inventor.first, " ").concat(inventor.last, " born in ").concat(inventor.year, ".</li>");
});
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
var firstlast = inventors.map(function (inventor) {
    return inventor.first + " " + inventor.last;
});
// console.table(firstlast)
var fullnamelist = document.querySelector("#fullname");
firstlast.forEach(function (inventor) { return fullnamelist.innerHTML += "<li>".concat(inventor, "</li>"); });
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort(function (a, b) { return a.year - b.year; });
var sortList = document.querySelector("#sort");
inventors.forEach(function (inventor) {
    return sortList.innerHTML += "<li>".concat(inventor.first, " ").concat(inventor.last, " - born in ").concat(inventor.year, "</li>");
});
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
var yearsLived = inventors.reduce(function (accum, current) {
    return accum + (current.passed - current.year);
}, 0);
var yearsPara = document.querySelector("#years");
yearsPara.innerHTML = yearsLived.toString() + " years lived in total.";
// 5. Sort the inventors by years lived
inventors.sort(function (a, b) {
    var ageA = a.passed - a.year;
    var ageB = b.passed - b.year;
    return (ageA - ageB);
});
var livedList = document.querySelector("#lived");
inventors.forEach(function (inventor) {
    var age = inventor.passed - inventor.year;
    livedList.innerHTML += "<li>".concat(inventor.first, " ").concat(inventor.last, " lived for ").concat(age, " years</li>");
});
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const linksArray= Array.from(document.querySelectorAll('#mw-pages a'));
// const boulevardsArray = linksArray.map((link) => {return link.innerText;});
// const de = boulevardsArray.filter((link)=>link.includes('de'));
// 7. sort Exercise
// Sort the people alphabetically by last name
people.sort();
var lastNameList = document.querySelector("#lastname");
people.forEach(function (person) { return lastNameList.innerHTML += "<li>" + person + "</li>"; });
// 8. Reduce Exercise
// Sum up the instances of each of these
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
// const results: Record<string,number> = {};
// //Record - generic for objects - then define the types of the key and the value
// data.forEach((type: string): void => {
//     if (type in results) {
//         results[type] = results[type] + 1;
//     } else {
//         results[type] = 1;
//     }
// })
var results = data.reduce(function (accum, current) {
    if (!accum[current]) {
        accum[current] = 0;
    }
    accum[current]++;
    return accum;
}, {});
console.table(results);
