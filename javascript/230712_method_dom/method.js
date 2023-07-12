// 배열 만들기
const arr =[];
for(let i=1; i<=100; i++){
    arr.push(i);
}

// for
let sum = 0;
for (let i=0; i<arr.length; i++){
    sum += arr[i];
}

// for of
let sum2 = 0;
for (let number of arr){
    sum2 += number;
}

// forEach
let sum3 = 0;
arr.forEach((e) => sum3 += e);

let sum4 = 0;
arr.forEach((_,i) => sum4 += (i+1));

console.log(sum);
console.log(sum2);
console.log(sum3);
console.log(sum4);

let str = " Happy Day~!  ";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf('p'));
console.log(str.indexOf('@'));
console.log(str.lastIndexOf('p'));
console.log(str.slice(5,9));
console.log(str.replace('p', 'a'));
console.log(str.replaceAll('p', 'a'));
console.log(str.repeat(3));
// 검색어 입력 받을때 유용하게 사용 : trim
console.log(str.trim());
console.log(str.split(''));
console.log(str.split(' '));
console.log(str.split('').reverse().join('/'));


