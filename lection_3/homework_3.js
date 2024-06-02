// TASK-1. Работа с переменными

const item_1 = 5; 
console.log(item_1); //Вывели значение переменной в консоль

const item_2 = 3; //Объявили переменную с присвоением значения
console.log(item_2); //вывели в консоль item_2

const item_3 = item_1 + item_2;                 
console.log(item_3);        //вывели в консоль item_3

const item_4 = 'Yolochka';                 //Объявили переменную
console.log(item_4);        //вывели в консоль item_4

console.log(item_3 + item_4);   //Вывели в консоль сложение 2х переменных
console.log(item_3 * item_4);   //Вывели в консоль умножение 2х переменных

const item_5 = item_3; //Объявили переменную

let item_6; //Объявили переменную

let item_6_type; //Объявили переменную

item_6 = 15; //Присвоили перемнной значение

item_6_type = item_6; //Присвоили тип переменной??? Тип приваивается значению... нужно уточнить

console.log('item_6 == ' + typeof item_6, 'item_6_type == ' + typeof item_6_type); //Вывели в консоль типы данных

const item_7 = String(item_6); //Обхявили переменную, присвоили значение другой переменно, изменили тип намбер на стринг
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
D = b**2 - 4*a*c; // Дискрименант = 0, соответсвенно 1 корень
const x = (-b + Math.sqrt(D))/(2*a);
console.log('Ответ к уравнению 1: ' + x);

//x2 - 4x - 5 = 0

a = 1;
b = -4;
c = -5;
D = b**2 - 4*a*c; // Дискрименант = 0, соответсвенно 1 корень
const x1 = (-b + Math.sqrt(D))/(2*a);
const x2 = (-b - Math.sqrt(D))/(2*a);
console.log('Ответ к уравнению 2: ' + x1 + ' и ' + x2);



//TASK-3 n+nn+nnn

const n = 3;
const summ_3n = '' + n + n + n;
const summ_2n = '' + n + n;
const summ_n = Number(summ_3n) + Number(summ_2n) + n;
console.log(summ_n);