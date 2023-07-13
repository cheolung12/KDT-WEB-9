// // 기본 문법 : $(선택자).동작함수();
// const changeInput = () => {
//     $("#id").val("changed");
// }

// // JQuery의 경우 자동으로 모든 태그를 선택해준다
// // $("input").val("default");

// // css 변경하기
// // $("div").css("background-color", "blue");
// $("div").css("border-radius", "20%");

// // 속성 변경
// $("input").attr("placeholder", "아이디 입력하세요");

// // innerText 변경
// // $("div").text("안녕");

// // html 변경
// $("div").html("<p>Hi</p>")

// // 요소 추가 - append : 자식 요소 중 마지막으로 추가
// $("div").append('<h1>안녕</h1>');

// // prepend, before, after 등등 있음
// $("div").prepend('<h1>prepend</h1>');   // 자식요소 중 첫번째로 추가
// $("div").before('<h1>before</h1>');     // 이전 형제 추가
// $("div").after('<h1>after</h1>');       // 다음 형제 추가

// // 요소 삭제 : remove
// // $("div").remove();

// // 자식 요소 모두 삭제 : empty 
// // $("div").empty();

// // 요소 탐색
// $("h1").parent().css("border", "dashed");
// // parent, next, prev, next, children

// // 클래스 조작
// // $("div").addClass("red");
// // $("div").removeClass("red");

// const handleColor = () => {
//     $("div").toggleClass("orange");
// }


// 로딩 이벤트 (페이지 로드 후 실행)
$(() => {
    $(".container").append(`<h1>안녕</h1>`);
})

// 마우스 이벤트
 $("button").on("click", () => {
    alert("클릭!");
 })

// $("button").click(() => {
//     alert("클릭!");
// })

// 이외에도 mouseover, hover, scroll 등이 있다

$("input").keydown((e) => {
    console.log(e.key);
})
