const calculateBonus = (salary) => {
  const rate = salary >= 40000 ? 0.1 : 0.05;
  return salary * rate;
};

const calculateTax = (salary) => salary * 0.05;

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
  const bonus = bonusCallback(salary);
  const tax = taxCallback(salary);
  return {
    bonus,
    tax,
    netSalary: salary + bonus - tax,
  };
};

const generatePayslip = (name, salary, callback) => {
  const { bonus, tax, netSalary } = callback(salary, calculateBonus, calculateTax);

  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${bonus}`);
  console.log(`Tax: Rs. ${tax}`);
  console.log(`Net Salary: Rs. ${netSalary}`);
};

// Example usage
generatePayslip("Ram", 50000, calculateNetSalary);