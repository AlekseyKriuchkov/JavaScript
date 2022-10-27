
// let admin;
// let name = "Джон";
// admin = name
// alert (admin);

// let isGreat = (4 > 1);
// alert (isGreat);

// let userName = prompt('Ваше имя', "jon");

// alert (`hello ${userName}`);

// let quvestion = prompt ("Какое «официальное» название JavaScript?");

// if (quvestion == "ECMAScript") {
//     alert ("Верно!");
// } else {
//     alert ("Не знаете? ECMAScript")
// }

// let value = prompt ("Ведите число!");

// if (value == 0) {
//     alert ("Значение равно нулю");
// } else if (value < 0) {
//     alert ("значение меньше нуля");
// } else {
//     alert ("значение больше нуля")
// }

// let age = prompt ("Ваш возраст?");

// if (prompt ("Ваш возраст?") <= 90 && prompt ("Ваш возраст?") >= 14) {
//     alert ("Das")
// } else {
//     prompt ("Ваш возраст?")
// }

// let user = prompt ("Вы кто?")

// if (user === "Админ") {
//     let pass = prompt ("введите пароль")
//     if (pass == "Я главный!") {
//         alert ("Здравствуйте");
//     } else if(pass == "" || pass != "Я главный!") {
//         alert ("Неверный пароль")
//     } else if (pass == null) {
//         alert ("Отмена")
//     }
// } else if (user == "" || user == null) {
//     alert ("Отмена")
// } else {
//     alert ("Я Вас не знаю!")
// }

// let i = 1

// for (; i <= 10; i++) {
//     if (i % 2 == 0)
//     console.log(i)
// }

// let i = 0
// while (i<3) {
//     alert (`number ${i}!`)
//     i++
// }

// let i;
// do {i = prompt ("Введите число больше 100")}
// while(i <= 100 && i)

// let i = 10;

// finish:for (let a = 2; a <= i; a++) {
//     for (let b = 2; b < a; b++) {
//         if (a % b == 0) continue finish;
//     }
//     console.log (a);
// }

// function min (a,b) {
//     if (a < b){
//         return (console.log (a))
//     } return (console.log (b))

// }

// min (6,6)

// let a = prompt("Введите число");
// let x = prompt("Введите степень");
// let sum = 1;
// function pow(a, x) {
//     for (i = 1; i <= x; i++) {
//         sum *= a
//     }; return sum;
// }
// console.log(pow(a, x));

// function ask (quvestion,yes,no) {
//     if (confirm(quvestion)) yes()
//     else no();
// }

// ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => {alert ("Вы отказались")}
// );    
// let one = document.querySelector(".one");
// for (let i = 1; i < 10; i++) {
//     for (let k = 1; k < 10; k++) {
//         one.cre += `${i}*${k}=${i * k}<br>`
//     }
//     one.innerHTML += "<hr>";
// }

// let one = document.querySelector(".one");

// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k <= 5; k++) {
//         one.innerHTML += "*"
//     }
//     one.innerHTML += "_"
// }

// let one = document.querySelector(".one");

// for (i = 1; i <= 3; i++) {
//     one.innerHTML += `${i}<br>`;
//     for (let k = 0; k < 3; k++) {
//         one.innerHTML += "*_";
//     }
//     one.innerHTML += "<br>"
// }
// let one = document.querySelector(".one")
// let arr = ["apple","orange","lime","strawbery","tomato"];

// for (let i = 0; i < arr.length; i++) {
//     one.innerHTML += `${arr[i]}<br>`;
// }

// let one = document.querySelector(".one");
// let i = 0;

// while(i <= 50) {
//     one.innerHTML += `${i}<br>`
//     i++
// }

// let a = +prompt ("введите число");
// let b = +prompt ("введите число");

// function min (a,b) {
//     return a < b ? alert(a) : alert(b)
// }

// min(a,b)

// function pow (x,n) {
//     let result = x;
//     for (i = 1; i < n; i++) {
//         result *= x
//     }
//     return result;
// }

// let x = prompt("");
// let n = prompt("");

// if (n < 1) {
//     alert ("Степень должна быть больше 1");
// } else {
//     alert (pow(x,n))
// }