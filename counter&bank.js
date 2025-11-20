function createCounter() {
  let count = 0; 
  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current count:", count);
    },
    getCount: function () {
      console.log("Current count:", count);
    }
  };
}


function createBankAccount() {
  let balance = 0; 
  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log(`Withdrawn: ${amount}`);
      }
    },
    checkBalance: function () {
      console.log("Current balance:", balance);
    }
  };
}