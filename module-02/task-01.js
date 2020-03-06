const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    const count = i + 1;
    const result = count + ' - ' + array[i];
    console.log(result);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
