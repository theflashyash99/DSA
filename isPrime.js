function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} is not a PRime`;
    }
  }
  return `${n} is Prime Number`;
}

console.log(isPrime(7));
