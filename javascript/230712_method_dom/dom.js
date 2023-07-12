console.log("----Date----");
let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);   // 얘만 +1 해야됨
console.log(now.getDate());
console.log(now.getDay());  // 월화수목금토일 1234560
console.log(now.getTime()); // 19970.01.01 기준 
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// getTime 활용 : 만료일 계산
let expired = new Date('2023-06-07');
console.log(expired.getTime() < now.getTime()); // 만료일이 지난것

// 활용 : 원하는 형식으로 출력하기
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
console.log(`${year}-${month >= 10 ? month : "0"+month}-${date >= 10 ? date : "0"+date}`);

console.log("");
console.log("----Math----");
console.log(Math.PI);
console.log(Math.E);
console.log(Math.random()); // 0~1 사이의 실수
console.log(Math.round(7.5), Math.round(7.2));  // 반올림

// 활용
// Math.random() * (최대값 - 최소값) + 최소값
console.log(Math.floor(Math.random() * (100-1) + 1));

//
console.log("");
console.log("----document----");
const redBoxById = document.getElementById("red");
console.log(redBoxById);
// id를 제외하고는 요소가 하나만 있을거라고 보장되지 않기 때문에 배열에 담긴다
const boxes = document.getElementsByClassName("box");
console.log(boxes); 
const boxesByTag = document.getElementsByTagName("div");
console.log(boxesByTag);
const input = document.getElementsByName("aaa");
console.log(input);

// querySelector는 무조건 하나만 선택함, 문서에서 만나는 제일 첫번째 요소를 반환
const boxesBySelector = document.querySelector(".box");
console.log(boxesBySelector);
// querySelectorAll이니까 배열, 얘는 id 선택자여도 배열이다 근데 이렇게 안쓸듯?
const boxesBySelctorAll = document.querySelectorAll(".box");
console.log(boxesBySelctorAll);

document.write("안녕?");
console.log(redBoxById.innerText);  // 글자 가져오기
console.log(redBoxById.innerHTML);  // 태그 가져오기
console.log(redBoxById.textContent);    // 글자 가져오기

redBoxById.innerText = "텍스트가 바뀐 빨간 상자";
// redBoxById.innerText += "텍스트가 추가된 빨간 상자";
redBoxById.innerHTML = "<span>스팬 태그</span>";

console.log(`className : ${redBoxById.className}`);
// redBoxById.className = "box yellow"  빨간 상자 -> 노란 상자

// 각각의 클래스를 배열로 반환 : classList
console.log(redBoxById.classList);

// const redToggle = () => {
//     if(redBoxById.classList.contains("red"))
//         redBoxById.classList.remove("red");
//     else
//         redBoxById.classList.add("red");
// }

const redToggle = () => {
    redBoxById.classList.toggle("red"); // 위 함수의 기능과 동일
}

// redBoxById.setAttribute("class", "box orange");
input[0].setAttribute("placeholder", "통합검색");

let container = document.querySelector(".container")
console.log(container.children);
console.log(redBoxById.parentNode); // 부모 선택
console.log(redBoxById.nextElementSibling); // 다음 형제 선택
console.log(redBoxById.nextElementSibling.nextElementSibling);  // 다음 다음 형제 선택

const orangeBoxById = document.getElementById("orange");
console.log(orangeBoxById.previousElementSibling);  // 이전 형제 선택
const createGreenBox = () => {
    let createBox = document.createElement('div');
    createBox.className = "box green";
    // container.append(createBox);    // append에는 문자열도 올 수 있음
    // container.appendChild(createBox);   // appendChild 안에는 무조건 노드 객체만 옴
    // container.prepend(createBox);    // 맨 앞쪽에 요소 추가
    // orangeBoxById.before(createBox); // 바로 앞쪽에 요소 추가
    orangeBoxById.after(createBox); // 바로 뒤쪽에 추가
}

const removeBox = () => {
    // orangeBoxById.remove();
    container.removeChild(orangeBoxById);
}