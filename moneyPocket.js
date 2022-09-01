const getTotalAmount = (amount, currency) => {
  let result = 0;
  for (const i of amount) {
    const SecondCurrency = i.slice(0, 3);
    if (SecondCurrency !== currency) {
      continue;
    }
    const num = Number(i.slice(4));
    result += num;
  }
  return result;
};
export default getTotalAmount;