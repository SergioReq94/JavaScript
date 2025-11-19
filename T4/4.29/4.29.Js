function rellenaOrdena() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  
  return arr.sort((a, b) => {

    if (a % 10 === 0 && b % 10 !== 0){
        return -1;
    } 
    if (a % 10 !== 0 && b % 10 === 0){
        return 1;
    } 
    return a - b;
  });
}

console.log(rellenaOrdena());