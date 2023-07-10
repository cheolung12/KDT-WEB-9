const colors = ["빨강", "주황", "노랑", "초록", "파랑", "남색", "보라"];
console.log(colors[0], colors[1], colors[2], colors[3]);
console.log(colors[2]);
colors.push("검정");
console.log(colors);
console.log(colors.indexOf("검정"));
console.log(colors.reverse());

let obj = {
    age: 27,
    mbti: 'ESFJ',
    hobby: ['음악감상', '농구'],
}
console.log(obj);

const a = typeof(1);
const b = typeof("a");
const c = typeof(null);
console.log(`${a} isn't ${b} data type`);
console.log(`Typeof를 boolean이나 null에 사용하면, ${c} 결과를 얻을 수 있습니다.`);

const mathScore = "77";
const engScore = "88";
const avg = (Number(mathScore) + Number(engScore)) / 2
console.log(avg);
