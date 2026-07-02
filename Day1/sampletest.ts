type User = {
  name: string;
  age: number;
};

function greet(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

function sum(numbers: number[]): number {
  return numbers.reduce((total, value) => total + value, 0);
}

const user: User = { name: 'Asha', age: 28 };
console.log(greet(user));
console.log(sum([1, 2, 3, 4]));