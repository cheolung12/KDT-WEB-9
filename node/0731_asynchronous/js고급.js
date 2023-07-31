// 구조분해할당 (배열)
const lists = ['apple', 'grape'];
[item1, item2, item3 = 'peach'] = lists;
console.log(item1);
console.log(item2); 
console.log(item3);

// 교환
let x = 1, y =3;
[x,y] = [y,x];
console.log(x, y);

// 구조분해할당 (객체)
let Person = {
    name: '철웅',
    age: 20,
    gender: 'M',
    hello: () => console.log('hello'),
    friends: ['Alex', 'Kevin'],
    'kdt-9': 'abcd',
}

console.log(Person.name);
console.log(Person.friends[0]);
console.log(Person['kdt-9']);

const {name, gender, age: myAge} = Person;
console.log(name, gender);
console.log(myAge);

// spread 연산자
const a = [1,2,3];
const b = [4,5];
console.log(a.concat(b));
const spread = [...a, ...b];
console.log(spread);

const c = [..."Hello"];
console.log(c);

// 객체에 추가
Person = {...Person, city: "Paris"};
console.log(Person);

// rest 파라미터
const values = [10,20,30];
function get(a, ...rest){
    console.log(rest);
    console.log(...rest);
}
get(...values);
get(values, 10);

// 클래스
class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // 클래스에서는 함수에 function 키워드 x
    mew() {
        console.log(`${this.name} 야옹`);
    }
    eat() {
        console.log("먹이를 먹습니다")
    }
}

let cat1 = new Cat('나비', 1);
let cat2 = new Cat('냥이', 2);

cat1.mew();
cat1.eat();

cat2.mew();



