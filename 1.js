        for(var i=1; i<=23; i++)
        {
            console.log('№ ' + i + ':');
            eval('zad' + i + '()');
            console.log('***********************');
        }
        
        function zad1(){
            str = "hdfgv";
            console.log(str[0]); 
            console.log(str[1]); 
            console.log(str[4]);
        }
        function zad2(){            
            console.log(60*60);
        }
        function zad3(){
            let num = 1;
            num += 12; num -= 14; num *= 5; num /= 7; num++; num--;
            //alert(num)
            console.log(num);
        }
        function zad4(){
            let num = 3;
            //alert(num)
            console.log(num)
        }
        function zad5(){
            a = 10; b = 2;
            console.log(a + b); 
            console.log(a - b);
            console.log(a * b);
            console.log(a / b);
        }
        function zad6(){
            c = 15; d = 2;
            result = c + d;
            console.log(result);
        }
        function zad7(){
            a = 10; b = 2; c = 5;
            console.log(a + b + c);
        }
        function zad8(){
            a = 17; b = 10;
            c = a - b;
            d = 7;
            result = c + d;
            console.log(result);
        }
        function zad9(){
            var secondsInHour = 60 * 60;
            var secondsInDay = secondsInHour * 24;
            var secondsInMonth = secondsInDay * 30;
            console.log('Секунд в часе: ' + secondsInHour);
            console.log('Секунд в сутках: ' + secondsInDay);
            console.log('Секунд в месяце: ' + secondsInMonth);
        }
        function zad10(){
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            console.log('Текущее время: ' + hour + ':' + minute + ':' + second);
        }
        function zad11(){
            var num = 5;
            var squared = num * num;
            console.log('Квадрат числа ' + num + ' равен ' + squared);
        }
        function zad12(){
            var numbers = [1, 2, 3, 4, 5, 6, 7, 8];           
            var sumOfSquares = numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + Math.sqrt(num), 0);
            console.log(sumOfSquares);
        }
        function zad13(){
            var Apple = 1.15;
            var Orange = 2.30
            console.log(Apple + Orange);
        }
        function zad14(){
            let x = 5;
            //alert(x++);
            console.log(x++)
        }
        function zad15(){
            console.log([] + false - null + true);
        }
        function zad16(){
            let y = 1;
            let x = y = 2;
            console.log(x);
        }
        function zad17(){
            console.log([] + 1 + 2);
        }
        function zad18(){
            let a6, a7, a8, a9, a10;
            a6 = 5 % 3;
            a7 = 3 % 5;
            a8 = 5 + '3';
            a9 = '5' - 3;
            a10 = 75 + 'кг'
            console.log(a6 + " " + a7 + " " + a8 + " " + a9 + " " + a10)
        }
        function zad19(){
            let height = 23; let width = 10; let s = height * width;
            console.log(s + "см^2");
        }
        function zad20(){
            let heightC = 10; let dC = 4; let v = Math.PI * (dC/2) ** 2 * heightC;
            console.log(v);
        }
        function zad21(){
            var S = 2000000; // сумма кредита в рублях
            var p = 0.10; // процентная ставка (10%)
            var years = 5; // количество лет
            var perepl = S * p * years; // сумма переплаты
            console.log('Переплата по кредиту: ' + perepl + ' руб.');
        }
        function zad22(){
            let str="Привет"; let num = 123; let flag = true; let txt="true";
            console.log('Тип переменной str: ' + typeof str);
            console.log('Тип переменной num: ' + typeof num);
            console.log('Тип переменной flag: ' + typeof flag);
            console.log('Тип переменной txt: ' + typeof txt);
        }
        function zad23(){
            let chislo = Math.floor(Math.random() * 40) - 20;
            console.log(chislo); 
            console.log(chislo * (-1)); 
        }

