/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = true
const isVerifiedUser = false
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess = false


if(isAdmin === true && hasSpecialPermission === true) {
    isAccess = true
} else  if (isVerifiedUser === true || hasTemporaryPass === true) {
    isAccess = true
} else if ((isAdmin === false && isVerifiedUser === false)&&(hasSpecialPermission === false && hasTemporaryPass === false)) {
    isAccess = false
}

