/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
let isAdmin = false
let isVerifiedUser = false
let hasSpecialPermission = false
let hasTemporaryPass = false

let isAccess = false

let userName = prompt('Введите имя пользователя: ')

if(userName === "Vlad") {
    isAdmin = true
    isVerifiedUser = false
    hasSpecialPermission = true
    hasTemporaryPass = false
} else {
    isAdmin = false
    isVerifiedUser = false
    hasSpecialPermission = false
    hasTemporaryPass = false
    isAccess = false
}

if ((isAdmin === true || isVerifiedUser === true) && (hasSpecialPermission === true || hasTemporaryPass === true)) {
    alert ('Доступ разрешен')
    isAccess = true
} else {
    alert ('Доступ запрещен')
}

