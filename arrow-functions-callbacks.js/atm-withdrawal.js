const validateWithdrawal = (amount, balance) => {
  if (amount <= 0) {
    return { valid: false, message: "Withdrawal amount must be greater than 0." };
  }
  if (amount % 500 !== 0) {
    return { valid: false, message: "Withdrawal amount must be a multiple of 500." };
  }
  const transactionFee = 25;
  if (amount + transactionFee > balance) {
    return { valid: false, message: "Insufficient balance for withdrawal and fee." };
  }
  return { valid: true, fee: transactionFee };
};

const withdrawMoney = (amount, balance, callback) => {
  console.log(`Account Balance: Rs. ${balance}`);
  console.log(`Withdrawal Amount: Rs. ${amount}`);

  const check = callback(amount, balance);

  if (!check.valid) {
    console.log(`Withdrawal Failed: ${check.message}`);
    console.log(`Remaining Balance: Rs. ${balance}`);
    return balance;
  }

  const remainingBalance = balance - amount - check.fee;
  console.log("Withdrawal Successful!");
  console.log(`Transaction Fee: Rs. ${check.fee}`);
  console.log(`Remaining Balance: Rs. ${remainingBalance}`);
  return remainingBalance;
};

// Example usage
withdrawMoney(3000, 10000, validateWithdrawal);