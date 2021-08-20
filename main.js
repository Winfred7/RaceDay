let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegistrant=false;

const Age=18;

if(Age>18 && earlyRegistrant){
  raceNumber +=1000;
}

if(Age>18 && earlyRegistrant){
  console.log(`Your race number is :${raceNumber} and your race starts at: 9:30 am`);
}else if(Age>18 && !earlyRegistrant){
  console.log(`Your race number is :${raceNumber} and your race starts at: 11:00 am`);
}else if(Age<18){
 console.log(`Your number is: ${raceNumber} and your race starts at: 12:30 pm`);
}else{
  console.log('Kindly see registration desk for further infor.');
}
