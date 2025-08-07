/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    let str2 =" "
    for(i=0;i < str.length; i++) {
    str2+=str[i]+str[i]
    }
return str2

}
str='hel'
console.log(doubleEachCharacter('hello!'))
// console.log(str[1]='O',str)
// let a = 'aa'.split('').forEach(item=>item+item)
// console.log('hello'.split('').map(item=>item+item).join(''))