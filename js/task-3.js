function filterArray(numbers, value) {
  // Створюємо порожній масив для підходящих чисел
  const filteredNumbers = [];

  // Ітеруємо кожен елемент масиву numbers
  for (let i = 0; i < numbers.length; i++) {
      // Перевіряємо, чи елемент більший за value
      if (numbers[i] > value) {
          // Додаємо елемент до нового масиву
          filteredNumbers.push(numbers[i]);
      }
  }

  // Повертаємо новий масив з підходящими числами
  return filteredNumbers;
}

// Код для перевірки коректності роботи функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]





