export const formatTokenAmount = (amount) => {
  if (amount == null || isNaN(amount)) return "-";
  if (amount >= 1)
    return amount.toLocaleString(undefined, { maximumFractionDigits: 4 });
  return amount.toLocaleString(undefined, { maximumSignificantDigits: 4 });
};
