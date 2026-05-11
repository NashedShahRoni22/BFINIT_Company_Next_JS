const formatPrice = (price) => {
  const number = Number(price);

  if (Number.isInteger(number)) {
    return number.toString();
  } else {
    return number.toFixed(2);
  }
};

export default formatPrice;
