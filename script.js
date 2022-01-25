const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

function checkPrime(number) {
  //cero? negative?
  if (number <= 1) {
    return false;
  } else {
    //the number will be divided by 2 or others
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}

function showPrimes() {
  ejercicio1.forEach(function (number) {
    let isPrime = checkPrime(number);
    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is NOT a prime number`);
    }
  });
}

function showPass() {
  ejercicio2.forEach((item) => {
    if (item.edad >= 18 && item.esFamiliar) {
      alert(`${[item.nombre]} welcome home`);
    }
  });
}
function fibonacci(n) {
  //first 2 numbers of the fibonacci series
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    //actual sum= suma of the two last numbers
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
function showFibonacci() {
  //you can change the numbers here
  alert(fibonacci(50));
}
