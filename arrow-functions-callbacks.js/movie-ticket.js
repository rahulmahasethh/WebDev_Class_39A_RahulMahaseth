const getTicketPrice = (age) => {
  if (age < 12) return 150;
  if (age <= 17) return 200;
  if (age <= 59) return 300;
  return 200;
};

const calculateTotal = (price, quantity) => price * quantity;

const applyDiscount = (total, quantity) => {
  if (quantity >= 5) {
    return total * 0.1;
  }
  return 0;
};

const bookTicket = (name, age, quantity, callback) => {
  const pricePerTicket = getTicketPrice(age);
  const totalBeforeDiscount = calculateTotal(pricePerTicket, quantity);
  const discount = callback(totalBeforeDiscount, quantity);
  const finalAmount = totalBeforeDiscount - discount;

  console.log(`Customer: ${name}`);
  console.log(`Ticket Quantity: ${quantity}`);
  console.log(`Total Before Discount: Rs. ${totalBeforeDiscount}`);
  console.log(`Discount: Rs. ${discount}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

// Example usage
bookTicket("Hari", 25, 5, applyDiscount);