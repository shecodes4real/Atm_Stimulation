/*
ATM Simulation

    Store a user's balance in a variable.
    Use functions to withdraw, deposit, and check balance.
    Use conditions to prevent overdrawing.
*/
let acctName = String(prompt(`Please enter your full name`));
let userBalance = 16000;
let ukPound = new Intl.NumberFormat('en-UK',{
  style: 'currency',
  currency: 'GBP',
  maximumSignificantDigits: 3,
});
console.log(`Dear ${acctName}, your balance is ${ukPound.format(userBalance)}`);
function withdraw(){
  let amtWithdrawn = Number(prompt(`How much do you wish to withdraw`));
console.log(`You are withdrawing : ${ukPound.format(amtWithdrawn)}`);
// let newBalance = console.log(`${userBalance} - ${amtWithdrawn}`);
  if (userBalance <= amtWithdrawn){
    console.log(`You are unable to withdraw because you have insufficient funds, your account balance is ${ukPound.format(userBalance)}`);
  }else{
    userBalance -= amtWithdrawn;
  }
 return userBalance;
}
withdraw();
console.log(`Your new balance is now : ${ukPound.format(userBalance)}`);clear
function deposit(){
  let amtDeposit = Number(prompt(`Hey ${acctName},how much do you want to deposit today`));
  console.log(`You are depositing : ${ukPound.format(amtDeposit)}`)
  userBalance += amtDeposit;
  return userBalance;
}
deposit();
console.log(`Your new account balance is now : ${ukPound.format(userBalance)}`);

function checkBalance(){
  let balanceCheck = console.log(`Dear ${acctName}, your account balance is ${ukPound.format(userBalance)}`);
  return balanceCheck;
}
checkBalance();