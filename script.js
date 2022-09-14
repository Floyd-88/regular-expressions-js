// Дана строка:
// let str = 'ahb acb aeb aeeb adcb axeb';
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.
let str = 'ahb acb aeb aeeb adcb axeb';
str.replace(/a.b/g)


// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
let str2 = 'aa aba abba abbba abca abea';
console.log(str2.replace(/ab+a/g, '!'))

// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.
console.log(str2.replace(/ab*a/g, '!'))

// Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.
console.log(str2.replace(/ab?a/g, '!'))

// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.
console.log(str2.replace(/ab*a/g, '!'))

// let str = 'ab abab abab abababab abea';
// Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.
let str3 = 'ab abab abab abababab abea';
console.log(str3.replace(/(ab)+/g, '!'))

// let str = 'a.a aba aea';
// Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.
let str4 = 'a.a aba aea';
console.log(str4.replace(/a\.a/g, '!'))

// let str = '2+3 223 2223';
// Напишите регулярку, которая найдет строку '2+3', не захватив остальные.
let str5 = '2+3 223 2223';
console.log(str5.replace(/2\+3/g, '!'))

// let str = '[abc] {abc} abc (abc) [abc]';
// Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.
let str6 = '[abc] {abc} abc (abc) [abc]';
console.log(str6.replace(/\[...\]/g, '!'))

// let str = 'aa aba abba abbba abbbba abbbbba';
// Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).
let str7 = 'aa aba abba abbba abbbba abbbbba';
console.log(str7.replace(/ab{4}a/g, '!'))

// let str = 'aba accca azzza wwwwa';
// Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме 'a').
let str8 = 'aba accca azzza wwwwa'
console.log(str8.replace(/a.+?a/g, '!'))


// Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.
let str9 = 'a1a a2a a3a a4a a5a aba aca';
console.log(str9.replace(/a\da/g, '!'))


// Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.
let str10 = 'a1a a22a a333a a4444a a55555a aba'
console.log(str10.replace(/a\d+a/g, '!'))

// Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').
let str11 = 'aa a1a a22a a333a a4444a a55555a aba'
console.log(str11.replace(/a\d+a/g, '!'))


// Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.
let str12 = 'avb a1b a2b a3b a4b a5b abb acb';
console.log(str12.replace(/a\Db/g, '!'))


// Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.
let str13 = 'ave a#b a2b a$b a4b a5b a-b acb';
console.log(str13.replace(/a\Wb/g, '!'))


// Напишите регулярку, которая заменит все пробелы на '!'.
let str14 = 'ave a#a a2a a$a a4a a5a a-a aca';
console.log(str14.replace(/\s/g, '!'))

// Определите, начинается ли переданная строка с 'http://'.
let str15 = "http://'gggdsds32d dfa"
console.log((/^http:\/\/|https:\/\//).test(str15))

// Определите, что ли заканчивается переданная строка расширением 'txt', 'html' или 'php'.
let str16 = "gfgf.txtf"
console.log((/\.(php|txt|html)$/).test(str16))

//Определите, является ли переданная строка корректным емэйлом.
let email = 'ila1988_43RS@gmail.com'

console.log(/^[a-zA-Z_0-9]+@(gmail|mail)\.[a-z]/.test(email))


// Получите массив доменных имен из этой строки.
let str17 = 'site.ru sss site.com zzz site.net';
let arr = str17.match(/[a-z]+\.[a-z]{2,3}/g)
console.log(arr)

// Найдите сумму всех чисел этой строки.
let str18 = 'a1b c34d x567z';
let arr2 = str18.match(/\d/g)
console.log(arr2.reduce((a, b) => +a + +b))

// Поменяйте местами цифры во всех двухзначных числах.
let str19 = '12 34 56 78';
console.log(str19.replace(/(\d)(\d)/g, '$2$1'))

// Преобразуйте эту дату в '2025.12.31'.
let str20 = '31.12.2025';
console.log(str20.replace(/(\d+).(\d+).(\d+)/g, '$3.$2.$1'))

// Найдите все подстроки, в которых есть три одинаковые буквы подряд.
let str21 = 'aaa bbb ccc xyz';
console.log(str21.replace(/([a-z])\1\1/g, '!'))

// Найдите все подстроки, в которых есть два одинаковых слова подряд.
let str22 = 'aaa aaa bbb bbb ccc ddd';
console.log(str22.replace(/(\w+) \1/g, '!'))

// Получите массив имен функций из строки.
let str23 = 'func1() func2() func3()';
console.log(str23.match(/\w+(?=\(\))/g))

// Получите массив имен атрибутов этого тега.
let str24 = '<a href="" class="eee" id="zzz">';
console.log(str24.match(/\w+(?=")/g))

// Найдите все даты и преобразуйте их в другой формат так, чтобы получилась следующая строка:
// '2025-12-31 2024-11-30 2023-10-29'

let str25 = '31.12.2025 30.11.2024 29.10.2023';
let a = str25.replace(/(\d+).(\d+).(\d+)/g, function(match, match1, match2, match3) {
    return match3 + "-" + match2 + "-" + match1;
})
console.log(a)

// Разбейте эту строку так, чтобы все части даты и времени были в одном массиве. То есть у вас должен получится следующий массив:
// ['2025', '12', '31', '12', '59', '59'];
let str26 = '2025-12-31 12:59:59';
console.log(str26.split(/[-:\s]/))