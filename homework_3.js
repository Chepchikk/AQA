// TASK-1. Работа с переменными

let item_1; // Объвили переменную

item_1 = 5; //Присвоили значение переменной

console.log(item_1); //Вывели значение переменной в консоль

let item_2 = 3; //Объявили переменную с присвоением значения

console.log(item_2); //вывели в консоль item_2

let item_3;                 //Объявили переменную
item_3 = item_1 + item_2;   //Присвоили переменной значение 
console.log(item_3);        //вывели в консоль item_3

let item_4;                 //Объявили переменную
item_4 = 'Yolochka';        //Присвоили переменной значение
console.log(item_4);        //вывели в консоль item_4

console.log(item_3 + item_4);   //Вывели в консоль сложение 2х переменных
console.log(item_3 * item_4);   //Вывели в консоль умножение 2х переменных

let item_5; //Объявили переменную
item_5 = item_3; //Присвоили одну переменную другой

let item_6; //Объявили переменную

let item_6_type; //Объявили переменную

item_6 = 15; //Присвоили перемнной значение

item_6_type = item_6; //Присвоили тип переменной??? Тип приваивается значению... нужно уточнить

console.log('item_6 == ' + typeof item_6, 'item_6_type == ' + typeof item_6_type); //Вывели в консоль типы данных

let item_7 = String(item_6); //Обхявили переменную, присвоили значение другой переменно, изменили тип намбер на стринг
//console.log(typeof item_7);

let item_7_type;
item_7_type = item_7;
console.log('item_7 == ' + typeof item_7, 'item_7_type == ' + typeof item_7_type); //Вывели в консоль типы данных


//TASK-2 Решение квадратных уравнений

//х2 - 6х + 9 = 0  D = b ** 2 - 4*a*c

let a = 1;
let b = -6;
let c = 9;
let D;
let x;
D = b**2 - 4*a*c; // Дискрименант = 0, соответсвенно 1 корень
x = (-b + Math.sqrt(D))/(2*a);
console.log('Ответ к уравнению 1: ' + x);

//x2 - 4x - 5 = 0

a = 1;
b = -4;
c = -5;
D = b**2 - 4*a*c; // Дискрименант = 0, соответсвенно 1 корень
let x1 = (-b + Math.sqrt(D))/(2*a);
let x2 = (-b - Math.sqrt(D))/(2*a);
console.log('Ответ к уравнению 2: ' + x1 + ' и ' + x2);



//TASK-3 n+nn+nnn

let n;
n = 3;
let summ_3n = '' + n + n + n;
let summ_2n = '' + n + n;
let summ_n = Number(summ_3n) + Number(summ_2n) + n;
console.log(summ_n);