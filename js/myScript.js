// index    0            1          2       3


let str = prompt("Inserisci 5 nomi separati da una virgola", 'Stefania,Sandro,Maria,Giacomo,Giorgia');
let arr = str.split(',');
arr.push("Franco", "Valentina");



arr[3] = "Marta";
console.log(arr); 
arr.unshift("Giacomo");


let arrAge = [32,21,47,12,78];
arrAge.unshift(12);
arrAge[4]= 6;
arrAge.push(54,32);
console.log(arrAge);

let container = [];
container.push(arr, arrAge)
console.log(container);

//[12, 32, 21, 47, 6, 78, 54, 32]