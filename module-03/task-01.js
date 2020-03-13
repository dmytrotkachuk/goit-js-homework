// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя
// Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true
};

// console.log(user);

//1
user.mood = 'happy';

//2
user.hobby = 'skydiving';

//3
user.premium = false;

//4
const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key} : ${user[key]}`);
}
