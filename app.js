
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

// let a = +prompt("");

// function revers (a) {
//     let result = 0
//     for (let i = a.length; i > a.length; i--) {
//         result += result + a
//     }
//     return alert(result);
// }

// revers(a);

// let user = {}

// user.name = "John"
// user.surname = "Smith"
// user.name = "Pete"
// delete user.name;

// console.log(user);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum = 0;

//   for (let key in salaries) {
//     sum += salaries[key];
//   }

//   alert(sum);

// let styles = ["Джаз","Блюз"];

// styles.push ("Rock");
// styles[Math.floor((styles.length -1)/2)] = "Classic";
// console.log(styles);



// function sumInput (){
//     let arr = [];
//     while(true) {
//         let a = prompt("");
//         if (a === "" || a === null || !isFinite(a)) break;

//         arr.push(+a); 
//     }
//     let Sum = 0
//     for (let i of arr ) {
//         Sum += i
//     }
//     return Sum;
// }
// alert(sumInput());

// let a = document.querySelector('.one');
// let b = document.createElement('ul');
// a.append(b);
// while(true){
//     let text = prompt("");
//     if(!text) {
//         break;
//     }
//     let li = document.createElement('li');
//     li.textContent = text;
//     b.append(li);
// }

// let a = document.querySelectorAll('li');

// for (let count of a) {
//     let child = count.querySelectorAll('li').length;
//     if(child === 0) continue;

//     count.firstChild.textContent += `[${child}]`
// }

// let calendar = document.getElementById("calendar");
// console.log(calendar);

// function createCalendar() {
//     let table = '<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr>';

//     for (let i = 1; i <= 31; i++){

//         table += `<td>${i}</td>`;
//         if(i === 7 || i === 14 || i === 21 || i === 28){
//             table += '<tr></tr>';
//         }

//     }
//     for (let i = 0; i < 4; i++){
//         table += "<td></td>"
//     }


//     calendar.innerHTML = table;
// }

// createCalendar();


// function settime(){
//     let clock = document.getElementById('calendar');
//     let date = new Date ();
//     let time = date.toLocaleTimeString();
//     clock.innerHTML = time
// }
// let timeNow;
// function clockStart(){
//     timeNow = setInterval (settime, 1000);
//     settime();
// };

// function clockStop(){
//     clearInterval (timeNow);
// }



// let headArr = [];
// for (let i = 0; i < allTr.length; i++){
//     let arr = [];
//     let tdInTr = allTr[i].querySelectorAll('td');
//     for(let k = 0; k < tdInTr.length; k++){
//         arr.push(tdInTr[k].textContent);
//     }
//     headArr.push(arr);
// }

// headArr.sort();
// table.textContent = (headArr);
// console.log(headArr);

// let arr = [200, 80, 234, 666, 777, 1, 50, 0, 100, 15, 77, 32, 30];
// let newLet;

// for (let i = 0; i < arr.length; i++) {
//     for (let k = i; k >= 0; k--) {
//         if (arr[k] < arr[k - 1]) {
//             newLet = arr[k - 1];
//             arr[k - 1] = arr[k];
//             arr[k] = newLet;
//         } else {
//             break;
//         }
//     }
// }
// console.log(arr);

// let allTr = document.querySelectorAll('tr');

// for (let i = 2; i < allTr.length; i++) {
//      allTr = document.querySelectorAll('tr');
//     for (let k = 0; i-k > 0; k++) {
//         if (allTr[i].firstElementChild.textContent < allTr[i - k].firstElementChild.textContent) {
//             allTr[i - k].before(allTr[i])
//         }
//     }
// }

// function showNotification({top = 0, right = 0, className, html}) {
//     let message = document.createElement('div');
//     message.classList.add ("notification");
//     message.classList.add (className)
//     message.style.top = top + "px";
//     message.style.right = right + "px";
//     message.innerHTML = html;
//     document.body.append(message)
//     setTimeout(() => message.remove(), 1500)
//   }

//   let i = 1;
//   setInterval(() => {
//     showNotification({
//       top: 10,
//       right: 10,
//       html: 'Hello ' + i++,
//       className: "welcome"
//     });
//   }, 2000);

// let ball = document.getElementById('ball');
// let place = document.getElementById('field');
// console.log(ball);
// console.log(field);
// console.log(ball.clientWidth)
// ball.style.clientWidth = 40
// ball.style.clientHeight = 40

// ball.style.left = Math.round(place.clientWidth / 2 - ball.clientWidth / 2) + 'px';
// ball.style.top = Math.round(place.clientHeight / 2 - ball.clientHeight / 2) + 'px';



// let but = document.getElementById('hider');
// let text = document.getElementById('text');

// but.onclick = () => {
//     text.style.display = "none";
// };





// let field = document.getElementById('field');
// let ball = document.getElementById('ball');

// field.addEventListener("click", move);


// function move(event){

//     let fieldCor = field.getBoundingClientRect();
//     let ballCor = ball.getBoundingClientRect();
//     let ballCorTop = event.clientY - fieldCor.top - ball.clientHeight/2 - field.clientTop;
//     let ballCorLeft = event.clientX - fieldCor.left - ball.clientWidth/2 - field.clientLeft;

//     if (ballCorTop < (fieldCor.top - field.clientTop)){
//         ballCorTop = 0;
//     };
//     if(ballCorLeft < (fieldCor.left - field.clientLeft)){
//         ballCorLeft = 0;
//     };
//     if(ballCorLeft + ball.clientWidth > field.clientWidth){
//         ballCorLeft = field.clientWidth - ball.clientWidth;
//     };
//     if(ballCorTop + ball.clientHeight > field.clientHeight){
//         ballCorTop = field.clientHeight - ball.clientHeight;
//     };

//     ball.style.top = (ballCorTop) + "px";
//     ball.style.left = (ballCorLeft) + "px";   
//     console.log(ballCor.x);
// }



// let open = document.querySelector('ul');

// title.onclick = function(){
//     open.classList.toggle("open");
//     title.classList.toggle("come");
// }


// let btn = document.getElementsByClassName("remove-button");
// let text = document.getElementsByClassName("pane");

// function doclose(event) {
//    event.currentTarget.parentElement.classList.toggle("removeMessage");
// };



// let btnRight = document.querySelector(".right");
// let btnLeft = document.querySelector(".left");
// let wrapper = document.querySelector(".wrapper");

// let offset = 3;
// let image = 130
// btnRight.addEventListener('click', moveRight);
// btnLeft.addEventListener('click', moveLeft);

// function moveRight(){

//     wrapper.scrollLeft += image * offset;
// };
// function moveLeft(){
//     wrapper.scrollLeft -= image * offset;
// };


// tree.addEventListener("click", remove);

// function remove(event) {
//     console.log(event.target.nextElementSibling)
//     event.target.nextElementSibling.classList.toggle("removeMessage");
// }

// let grid = document.querySelector('#grid');
// let allTr = document.querySelectorAll("tr");
// grid.addEventListener("click", (event)=>{
//     let target =event.target;
//     if(target.tagName!='TH') return;
//     if(target.type == "Имя"){
//         for (let i = 2; i < allTr.length; i++) {
//             allTr = document.querySelectorAll('tr');
//            for (let k = 0; i-k > 0; k++) {
//                if (allTr[i].lastElementChild.textContent < allTr[i - k].lastElementChild.textContent) {
//                    allTr[i - k].before(allTr[i])
//                }
//            }
//         }
//     }
//     if(target.innerHTML == "Возраст"){
//         for (let i = 2; i < allTr.length; i++) {
//             allTr = document.querySelectorAll('tr');
//            for (let k = 0; i-k > 0; k++) {
//                if (+allTr[i].firstElementChild.textContent < +allTr[i - k].firstElementChild.textContent) {
//                    allTr[i - k].before(allTr[i])
//                }
//            }
//         }
//     }

// });

// let button = document.getElementById("show-button");
// let modal = document.getElementById('prompt-form-container');
// let form = document.getElementById('prompt-form');
// let showMessage = document.getElementById("prompt-message");
// formClose = form.cancel
// let message = "Введите что-нибудь<br>...умное :)";

// button.addEventListener("click", () => showPrompt(message, submity));

// function showPrompt(HTML, sum) {
//     showMessage.innerHTML = HTML
//     modal.style.display = "block"
//     form.onsubmit = (event) => {
//         if (form.text.value) {
//             sum(form.text.value)
//         } else if (!form.text.value) {
//             event.preventDefault()
//         }
//     }
//     formClose.onclick = () => {
//         sum("null")
//         modal.style.display = "none"
//     }
// }

// function submity(value) {
//     alert(value)
// }

// function Calculator () {
//     this.read = function() {
//         a = +prompt()
//         b = +prompt()
//     };
//     this.sum = function(){
//         return a+b
//     };
//     this.mul = function(){
//         return a*b
//     };
// };
// let calculator = new Calculator
// calculator.read();
// alert("Sum=" + calculator.sum() );
// alert("Mul=" + calculator.mul() );

// function Accumulator(startingValue){
//     this.sum = startingValue
//     this.read = function(){
//         this.sum += +prompt('vvedi 4islo')
//     };
// }

// let accumulator = new Accumulator(1)
// accumulator.read();
// accumulator.read();
// alert(accumulator.sum);

// function sum(numbers) {
//     "use strict";
//     let a = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (isFinite(numbers[i])) {
//             a += numbers[i];
//         } else {
//             return 0;
//         };
//     };
//     return a;
// };
// let result = sum();

// function paperwork(n, m) {
//     if(n > 0 && m > 0){
//         return n*m
//     } else {
//         return 0;
//     }
//   }
//  let a = paperwork(3,-3)
//   console.log(a)

// function findAverage(array) {
//     let a = 0;
//     if (array.length != 0) {
//         for (let i = 0; i < array.length; i++) {
//             a += array[i];
//         };
//     } else {
//         return fal;
//     };
//     return a/array.length;
//   }
// let arr = [];
// let result = findAverage(arr);
// console.log(result)

// function smash(words) {
//     let a = "";
//     for (let i = 0; i < words.length; i++) {
//         if (i < words.length - 1) {
//             a += words[i] + " ";
//         } else {
//             a += words[i]
//         }
//     }
//     return a;
// };

// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(x * i)
//     }
//     return z;
// }

// function bmi(weight, height) {
//     index = weight/(height*2)
//     console.log(index)
//     if(index <= 18.5){
//         return "Недостаточный вес"
//     } else if (index <= 25){
//         return "Нормальный"
//     } else if (index <= 30){
//         return "Избыточный вес"
//     } else {
//         return "Ожирение"
//     }

//   }

// function removeEveryOther(arr) {
//     newarr = [];
//     for (let i = 0; i <= arr.length; i+=2) {
//         newarr.push(arr[i])
//     }
//     return newarr;
// }

// function sumMix(x){
//     let sum = +x[0];
//     for(let i = 1; i < x.length; i++){
//         sum = +sum + +x[i]
//     }
//     return sum;
// }

// function makeNegative(num) {
//     if (num > 0){
//         return num - (num + num);
//     }else if (num < 0){
//         return num;
//     } else if (num == 0){
//         return 0;
//     }
//   }

// function summation (num) {
//     let result = 0;
//     for (let i = 1; i <= num; i++){
//        result += i
//     }
//     return result;
//   }

// function summation(busStops) {
//     let result = +busStops[0][0];
//     for (let i = 0; i < busStops.length; i++) {
//         for(let k = 0; k < busStops[i].length; k++){
//             result += +busStops[i][k][+0] - +busStops[i][k][+1]
//             console.log(result)
//         }
//     }
//     return result;
// }

// let array = [[10, 0], [3, 5], [5, 8]];
// let result = summation(array);
// console.log(result)

// let arr = [5, 3, 8, 1];
// function filtered (arr, a, b) {
//    return arr.filter(number => number >= a && number <= b);
// };
// let result = filtered(arr, 1, 4)
// console.log (result)

// let arr = [5, 2, 1, -10, 8];
// arr.sort(function(a, b) { return a - b; }).reverse();

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = [...arr].sort();

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = users.map(item => item.name)

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];
// let usersMapped = users.map((item) => ({
//     fullName: item.name + " " + item.surname,
//     id: item.id,
// }))

// alert( usersMapped[0].id )
// alert( usersMapped[0].fullName )
// console.log(usersMapped)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [ vasya, petya, masha ];
// arr.sort((a,b) => a.age - b.age)

// let arr = [1, 2, 3];
// const shuffle = (arr) => {
//     return arr.sort(() => Math.round(Math.random()) - 0.5);
// }

// let vasya = { name: "Вася", age: 10 };
// let petya = { name: "Петя", age: 20 };
// let masha = { name: "Маша", age: 30 };
// let arr = [ vasya, petya, masha ];
// function getAverageAge (arr){
//     let sum = 0
//     arr.map(index => sum += index.age)
//     return sum / arr.length;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
// "харе", "харе", "кришна", "кришна", ":-O"
// ];
// let result = Array.from(new Set(strings))
// let result = function (str){
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (!arr.includes(str[i])){
//             arr.push(str[i])
//         }
//     }
//     return arr;
// }

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
//   let usersById = users.reduce((acc, user) => {
//     acc[user.id] = user
//     return acc;
//   }, {});
//   console.log(usersById)

// function accum(s) {
// 	return s.toLowerCase().split("").map((item, index) => {
//         let a = item.toUpperCase()
//         let b = a;
//         for(let i = 0; i < index; i++){
//             b += item
//         }
//         return b;
//     }).join('-');
// }

// function createPhoneNumber(numbers){
//     let arr1 = numbers.splice(0, 3);
//     let arr2 = numbers.splice(0, 3);
//     let arr3 = numbers.splice(0, 4);
//     let result = `(${arr1.join("")}) ${arr2.join("")}-${arr3.join("")}`
//     return result
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// function Calculator () {
//     this.operations = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//     }
//     this.calc = (str) => {
//         let arr = str.split(" ")
//         return this.operations[arr[1]](+arr[0],+arr[2]);
//     }
//     this.addMethod = (op, func) => {
//         this.operations[op] = func
//     }
// }

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// console.log(powerCalc.calc("12 ** 3"))

// let arr = [3,1,7,9,6]
// function findOutlier(integers){
//     let num1 = 0;
//     let num2 = 0;
//     for (let i = 0; i < 3; i++){
//         if(integers[i]%2 != 0){
//             ++num1
//         }else {
//             ++num2
//         }
//     }
//     if (num1 > num2){
//         return integers.find((item) => item%2 == 0)
//     } return integers.find((item) => item%2 != 0)
// }

// function unique(arr) {
//     let uniqueArr = new Set(arr);
//     let result = [];
//     for(let value of uniqueArr) result.push(value)
//     return result;
// }
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(values))

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// function aclean(arr){
//     let result = []
//     let obj = new Map();
//     for(let i = 0; i < arr.length; i++){
//         result.push(arr[i].toLowerCase().split("").sort().join(""))
//         obj.set(result[i], arr[i])
//     }
//     let a = Array.from(obj.values())
//     return a;
// }

// let arr = [5, 8, 12, 19, 22];
// function sumTwoSmallestNumbers(numbers) {  
//     numbers.sort( (a, b) => a - b );
//     return numbers[0] + numbers[1]
//   }

// function fakeBin(x) {
//     let arr = x.split("")
//     let arrBin = []
//     for (let i = 0; i < arr.length; i++){
//         if(+arr[i] >=5){
//             arrBin.push(1)
//         }else {
//             arrBin.push(0)
//         }
//     }
//     let str = arrBin.join("")
//     console.log(str)
// }

// function makeUpperCase(str) {
//    let a = str.toUpperCase();
//     return a;
//   }

// function litres(time) {
//     let litres = time*0.5
//     return Math.floor(litres)
//   }

// function enough(cap, on, wait) {
//     let result = 0
//     if (cap > (on + wait)) {
//         return result
//     } else {
//         result += (+on + +wait) - cap
//     }
//     return result;
// }
