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

// if (randomNum >= 4 ? 'equal to or more then 4' : 'less then 4' ) 
console.log(randomNum >=4 ? 'equal to or more then 4' : 'less then 4');

switch (randomNum) {
  case randomNum = 0:
    console.log('zero');
    break
  case randomNum = 1:
    console.log("one");
    break
 case randomNum = 2:
    console.log("two");
    break
  case randomNum= 3:
    console.log('three');
    break
  case randomNum = 4:
    console.log('four');
    break
  case randomNum = 5:
    console.log('five');
    break
}