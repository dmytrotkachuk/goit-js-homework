const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (logins.includes(login) === true) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      logins.push(login);
      // console.log(logins);
      return 'Логин успешно добавлен!';
    } else {
      // console.log(logins);
      return 'Такой логин уже используется!';
    }
  } else {
    // console.log(logins);
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть
