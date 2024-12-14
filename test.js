let name = prompt("Введите имя");
let age = prompt("Введите возраст");
alert("Привет, " + name + " " + age);
console.log("Привет, " + name + " " + age);
alert(age >= 18 ? "Вы совершеннолетний" : "Вы несовершеннолетний");
let rnd = parseInt(Math.random() * 10 + 1);
let num = prompt("Угадайте число от 1 до 10");
alert(num == rnd ? "Вы угадали" : (rnd >= 5 ? "Больше или равно 5" : "Меньше 5"));
let password = prompt("Введите пароль");
if (password == "") {
    alert("Пароль пустой");
}
else {
    alert(password == "12345" ? "Доступ разрешен" : "Доступ запрещен");
}
let firstNum = Number(prompt("Введите первое число"));
let secondNum = Number(prompt("Введите второе число"));
let operator = prompt("Введите оператор");
switch (operator) {
    case "+":
        alert(firstNum + secondNum);
        break;
    case "-":
        alert(firstNum - secondNum);
        break;
    case "*":
        alert(firstNum * secondNum);
        break;
    case "/":
        alert(firstNum / secondNum);
        break;
    default:
        alert("Неверный ввод");
        break;
}
for (i = 1; i < 11; i++) {
    console.log(i);
}
j = 10;
while (j > 0) {
    console.log(j);
    j--;
}
let lectures = ['Тема 1', 'Тема 2', 'Тема 3', 'Офыва'];
let actices = ['Практика 1', 'Практика 2', 'Практика 3'];
lectures.push("Тема 4");
actices.unshift("Практика 4");
lectures.forEach((i) => {
    console.log(i);
});
actices.forEach((i) => {
    console.log(i);
});
function func(arr) {
    let str = "";
    arr.forEach((i) => {
       str += i + ", ";
    });ц
    console.log(str);
}
func(lectures);
function func2(arr) {
    let arr2 = [];
    arr.forEach((i) => {
        if (i[0] == "О") {
            arr2.push(i);
        }
    });
    return arr2;
}
console.log(func2(lectures));
