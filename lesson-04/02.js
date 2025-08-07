/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
// function includesElement(array, element) {
//    let flag =false
//     for(let i = 0; i < array.length; i++)
//     {
//         if (array[i] === element) {
//             flag= true
//         }  
//     }
//     return flag
// }
// 

function findUniqueElements(array) {
    let arrayNew = []
    for(let i = 0; i < array.length; i++) 
    {
        
        if (arrayNew.indexOf(array[i])>=0){
        
        
     }else{arrayNew.push(array[i])}
        
     
    }
    return arrayNew
}
console.log(findUniqueElements([1, 2, 3, 2, 1, 4,4,6,8,5,5]))

// console.log(includesElement([1, 2, 3], 3))