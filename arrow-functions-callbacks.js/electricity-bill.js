const calculateBill = (units) => {
  let energyCharge = 0;

  if (units <= 20) {
    energyCharge = units * 5;
  } else if (units <= 50) {
    energyCharge = 20 * 5 + (units - 20) * 7;
  } else {
    energyCharge = 20 * 5 + 30 * 7 + (units - 50) * 10;
  }

  const serviceFee = 50;
  return energyCharge + serviceFee;
};

const displayBill = (name, units, callback) => {
  const finalBill = callback(units);
  console.log(`Customer: ${name}`);
  console.log(`Units Consumed: ${units}`);
  console.log(`Total Electricity Bill: Rs. ${finalBill}`);
};

// Example usage (65 units -> 100 + 210 + 150 + 50 = 510)
displayBill("Ram", 65, calculateBill);