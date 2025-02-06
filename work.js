let randomNum = Math.random();

randomNum *= 6

randomNum = Math.floor(randomNum);



  if (randomNum >= 4) {
    console.log('Greater than or equal to 4');
  } else if (randomNum <= 4) {
    console.log('equal to 2 or 3');
  } else {
    console.log('equal to 1');
  }
  

console.log(randomNum);

if (randomNum != 3) {
  console.log('Not equal to 3');
}

if (randomNum != 3 && randomNum != 5) {
  console.log("Not Equal To 3 AND 5");
  
}

if (randomNum == 2 || randomNum == 4) {
  console.log('equal to 2 OR 4');
  
}