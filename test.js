function checkEven() {
  let evenArray = [];
  for (let i = 1; i <= 50; i++) {
    i % 2 == 0 ? evenArray.push(i) : "";
  }
  return evenArray;
}

console.log(checkEven());
