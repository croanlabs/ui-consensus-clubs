let exp = (module.exports = {});

exp.tokenPrice = supply => {
  // Linear bonding curve: price = supply * 0.5
  return supply * 0.25;
};

exp.tokenToMeritsRedeem = (tokenAmount, supply) => {
  const supplyAfter = supply - tokenAmount;
  return Math.round(
    (supply * exp.tokenPrice(supply) -
      supplyAfter * exp.tokenPrice(supplyAfter)) / 2);
};
