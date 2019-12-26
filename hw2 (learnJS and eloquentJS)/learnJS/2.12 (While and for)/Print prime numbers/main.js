for (let n = 2; n <= 40; n++) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      break;
    } else if (i == n - 1) {
      console.log(n);
    }
  }
}
