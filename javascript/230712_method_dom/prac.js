// const cal = () => {
//     let num1 = Number(document.getElementById("value1").value);
//     let num2 = Number(document.getElementById("value2").value);
//     let oper = document.getElementById("operator").value;
//     let result = document.getElementById("result");

//     if (oper === '+')
//         result.value = num1 + num2;
//     else if (oper === '-')
//         result.value = num1 - num2;
//     else if (oper === '/')
//         result.value = num1 / num2;
//     else if (oper === '*')
//         result.value = num1 * num2;
// }

// const reset = () => {
//     document.getElementById("value1").value = "";
//     document.getElementById("value2").value = "";
//     document.getElementById("operator").value = "";
//     document.getElementById("result").value = "";
// }

let number = 1;
let now = new Date()
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let day = `${year}-${month >= 10 ? month : "0"+month}-${date >= 10 ? date : "0"+date} ${now.getHours()} : ${now.getMinutes()}`;


const addPost = () => {
    let table = document.querySelector("table > tbody");
    let author = document.getElementById("author").value;
    let contents = document.getElementById("contents").value;
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${number}</td>
        <td>${author}</td>
        <td>${contents}</td>
        <td>${day}</td>
    `;

    table.append(tr);
    number++;
    
    document.getElementById("author").value = "";
    document.getElementById("contents").value = "";
    
}
    