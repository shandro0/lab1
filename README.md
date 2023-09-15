<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="center">Лабораторная работа №1</p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="right">Выполнил: Шандро Никита Богданович</p>
<p align="right">Проверил: Соболев Е. И.</p>
<br>
<br>
<br>
<br>
<br>
<br>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">Основы языка JavaScript</p>

<h2>Цели и задачи</h2>
1.	Создайте переменную str и присвойте ей значение 'hdfgv'. Обращаясь к отдельным символам этой строки выведите на экран символ 'h', символ 'd', символ 'v'.
<br>
2.	Напишите скрипт, который считает количество секунд в часе.
<br>
3.	Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для переделки:
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);
<br>
4.	Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
<br>
5.	Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
<br>
6.	Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
<br>
7.	Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
<br>
8.	Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
<br>
9.	Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
<br>
10.	Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
<br>
11.	Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.
<br>
12.	Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
<br>
13.	Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
<br>
14.	Какое будет выведено значение: let x = 5; alert(x++); ?
<br>
15.	Чему равно такое выражение: [ ] + false - null + true ?
<br>
16.	Что выведет этот код: let y = 1; let x = y = 2; console.log(x); ?
<br>
17.	Чему равна сумма [ ] + 1 + 2?
<br>
18.	Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
5 % 3,
3 % 5,
5 + '3',
'5' - 3,
75 + 'кг'
<br>
19.	Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height), шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s.
<br>
20.	Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v.
<br>
21.	Даны размер ипотечного кредита (S — 2 млн.руб), процентная ставка (p  — 10%), кол-во лет (years — 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной perepl.
<br>
22.	Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true». При помощи оператора определения типа убедитесь, что переменных принадлежат типам: string, number, boolean.
<br>
23.	Дано число, необходимо вернуть противоположное число.
<br>

<h2>Решение задач</h2>

```js
  // Цикл для выполнения всех задач
  for(var i=1; i<=23; i++)
        {
            console.log('№ ' + i + ':');
            eval('zad' + i + '()');
            console.log('***********************');
        }
// Задача 1
function zad1(){
            str = "hdfgv";
            console.log(str[0]); 
            console.log(str[1]); 
            console.log(str[4]);
        }
  
  // Задача 2
   function zad2(){            
            console.log(60*60);
        }
  
  // Задача 3
  function zad3(){
            let num = 1;
            num += 12; num -= 14; num *= 5; num /= 7; num++; num--;
            //alert(num)
            console.log(num);
        }
  
  // Задача 4
  function zad4(){
            let num = 3;
            //alert(num)
            console.log(num)
        }
  
  // Задача 5
   function zad5(){
            a = 10; b = 2;
            console.log(a + b); 
            console.log(a - b);
            console.log(a * b);
            console.log(a / b);
        }
  
  // Задача 6
  function zad6(){
            c = 15; d = 2;
            result = c + d;
            console.log(result);
        }
  
  // Задача 7
 function zad7(){
            a = 10; b = 2; c = 5;
            console.log(a + b + c);
        }
  
  // Задача 8
  function zad8(){
            a = 17; b = 10;
            c = a - b;
            d = 7;
            result = c + d;
            console.log(result);
        }
  
  // Задача 9
   function zad9(){
            var secondsInHour = 60 * 60;
            var secondsInDay = secondsInHour * 24;
            var secondsInMonth = secondsInDay * 30;
            console.log('Секунд в часе: ' + secondsInHour);
            console.log('Секунд в сутках: ' + secondsInDay);
            console.log('Секунд в месяце: ' + secondsInMonth);
        }
  
  // Задача 10
  function zad10(){
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            console.log('Текущее время: ' + hour + ':' + minute + ':' + second);
        }
  
  // Задача 11
  function zad11(){
            var num = 5;
            var squared = num * num;
            console.log('Квадрат числа ' + num + ' равен ' + squared);
        }
  
  // Задача 12
  function zad12(){
            var numbers = [1, 2, 3, 4, 5, 6, 7, 8];           
            var sumOfSquares = numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + Math.sqrt(num), 0);
            console.log(sumOfSquares);
        }
  
  // Задача 13
 function zad13(){
            var Apple = 1.15;
            var Orange = 2.30
            console.log(Apple + Orange);
        }
  
  // Задача 14
  function zad14(){
            let x = 5;
            //alert(x++);
            console.log(x++)
        }
  
  // Задача 15
 function zad15(){
            console.log([] + false - null + true);
        }
  
  // Задача 16
  function zad16(){
            let y = 1;
            let x = y = 2;
            console.log(x);
        }
  
  // Задача 17
  function zad17(){
            console.log([] + 1 + 2);
        }
  
  // Задача 18
  function zad18(){
            let a6, a7, a8, a9, a10;
            a6 = 5 % 3;
            a7 = 3 % 5;
            a8 = 5 + '3';
            a9 = '5' - 3;
            a10 = 75 + 'кг'
            console.log(a6 + " " + a7 + " " + a8 + " " + a9 + " " + a10)
        }
  
  // Задача 19
   function zad19(){
            let height = 23; let width = 10; let s = height * width;
            console.log(s + "см^2");
        }
  
  // Задача 20
  function zad20(){
            let heightC = 10; let dC = 4; let v = Math.PI * (dC/2) ** 2 * heightC;
            console.log(v);
        }
  
  // Задача 21
  function zad21(){
            var S = 2000000; // сумма кредита в рублях
            var p = 0.10; // процентная ставка (10%)
            var years = 5; // количество лет
            var perepl = S * p * years; // сумма переплаты
            console.log('Переплата по кредиту: ' + perepl + ' руб.');
        }
  
  // Задача 22
   function zad22(){
            let str="Привет"; let num = 123; let flag = true; let txt="true";
            console.log('Тип переменной str: ' + typeof str);
            console.log('Тип переменной num: ' + typeof num);
            console.log('Тип переменной flag: ' + typeof flag);
            console.log('Тип переменной txt: ' + typeof txt);
        }
  
  // Задача 23
  function zad23(){
            let chislo = Math.floor(Math.random() * 40) - 20;
            console.log(chislo); 
            console.log(chislo * (-1)); 
        }

  
```

<h2>Вывод</h2>
Научился основом JavaScript
