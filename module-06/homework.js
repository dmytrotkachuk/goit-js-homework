import users from './users.js';

//======================================================================

console.log('task-01');
console.log('Получить массив имен всех пользователей (поле name).');
const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Ant

//======================================================================

console.log('task-02');
console.log(
  'Получить массив объектов пользователей по цвету глаз (поле eyeColor).'
);
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//======================================================================

console.log('task-03');
console.log('Получить массив имен пользователей по полу (поле gender).');

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//======================================================================
console.log('task-04');
console.log('Получить массив только неактивных пользователей (поле isActive).');

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//======================================================================
console.log('task-05');
console.log(
  'Получить пользоваля (не массив) по email (поле email, он уникальный).'
);

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//======================================================================
console.log('task-06');
console.log(
  'Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).'
);

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//======================================================================
console.log('task-07');
console.log('Получить общую сумму баланса (поле balance) всех пользователей.');

const calculateTotalBalance = users => {
  return users
    .map(user => user.balance)
    .reduce((total, balance) => total + balance);
};

console.log(calculateTotalBalance(users)); // 20916

//======================================================================
console.log('task-08');
console.log(
  'Массив имен всех пользователей у которых есть друг с указанным именем.'
);

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.indexOf(friendName) !== -1)
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//======================================================================
console.log('task-09');
console.log(
  'Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)'
);

const getNamesSortedByFriendsCount = users => {
  return users
    .filter(user => user)
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name);
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//======================================================================
console.log('task-10');
console.log(
  'Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.'
);

const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .sort()
    .filter((skill, inx, result) => result.indexOf(skill) === inx);
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
//======================================================================