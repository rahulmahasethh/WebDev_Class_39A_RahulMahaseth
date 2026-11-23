const getFoodPrice = (foodName) => {
  const menu = {
    burger: 250,
    pizza: 500,
    momo: 150,
    chowmein: 180,
  };

  const normalized = foodName.trim().toLowerCase();
  return menu[normalized] ?? null;
};

const calculateServiceCharge = (total) => total * 0.05;

const calculateOrder = (foodName, quantity, callback) => {
  const unitPrice = callback(foodName);
  if (unitPrice === null || quantity <= 0) {
    return null;
  }
  return unitPrice * quantity;
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
  const foodAmount = callback(foodName, quantity, getFoodPrice);

  if (foodAmount === null) {
    console.log(`Sorry ${customerName}, "${foodName}" is invalid or quantity is not positive.`);
    return;
  }

  const serviceCharge = calculateServiceCharge(foodAmount);
  const finalAmount = foodAmount + serviceCharge;

  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

// Example usage
generateReceipt("Suman", "Burger", 2, calculateOrder);