interface Inventor {
    first: string;
    last: string;
    year: number;
    passed: number
}

const inventors: Array<Inventor> = [
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

const people: Array<string> = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen: Array<Inventor> = inventors.filter((inventor: Inventor):boolean => {
    return inventor.year > 1499 && inventor.year < 1600;
})
// console.table(fifteen);
const fifteendiv = document.querySelector<HTMLElement>("#fifteen");
fifteen.forEach((inventor:Inventor): void => {
    fifteendiv.innerHTML += `<li> ${inventor.first} ${inventor.last} born in ${inventor.year}.</li>`;
})

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstlast: Array<string> = inventors.map((inventor: Inventor) => {
    return inventor.first + " " + inventor.last;
})
// console.table(firstlast)
const fullnamelist = document.querySelector<HTMLUListElement>("#fullname");
firstlast.forEach((inventor: string): string => fullnamelist.innerHTML += `<li>${inventor}</li>`);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort((a: Inventor, b: Inventor): number => a.year - b.year);
const sortList = document.querySelector<HTMLOListElement>("#sort")
inventors.forEach((inventor:Inventor): string =>
    sortList.innerHTML += `<li>${inventor.first} ${inventor.last} - born in ${inventor.year}</li>`);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearsLived: number = inventors.reduce((accum: number, current: Inventor) => {
    return accum + (current.passed - current.year);
}, 0)
const yearsPara = document.querySelector<HTMLParagraphElement>("#years");
yearsPara.innerHTML = yearsLived.toString() + " years lived in total.";

// 5. Sort the inventors by years lived
inventors.sort((a: Inventor, b: Inventor): number => {
    const ageA: number = a.passed - a.year;
    const ageB: number = b.passed - b.year;
    return (ageA - ageB);
})
const livedList = document.querySelector<HTMLOListElement>("#lived");
inventors.forEach((inventor: Inventor): void => {
    const age: number = inventor.passed - inventor.year;
    livedList.innerHTML += `<li>${inventor.first} ${inventor.last} lived for ${age} years</li>`;
})

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const linksArray= Array.from(document.querySelectorAll('#mw-pages a'));
// const boulevardsArray = linksArray.map((link) => {return link.innerText;});
// const de = boulevardsArray.filter((link)=>link.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
people.sort();
const lastNameList = document.querySelector<HTMLUListElement>("#lastname");
people.forEach((person: string): string => lastNameList.innerHTML += "<li>" + person + "</li>");

// 8. Reduce Exercise
// Sum up the instances of each of these
const data: Array<string> = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// const results: Record<string,number> = {};
// //Record - generic for objects - then define the types of the key and the value
// data.forEach((type: string): void => {
//     if (type in results) {
//         results[type] = results[type] + 1;
//     } else {
//         results[type] = 1;
//     }
// })

const results: Record<string, number> = data.reduce(
    (accum: Record<string, number>, current:string) => {
    if (!accum[current]) {
        accum[current] = 0;
    }
    accum[current]++;
    return accum;
}, {})

console.table(results);
