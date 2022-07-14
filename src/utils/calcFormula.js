export const calcFormula = (price) => {
  try {
    const city = localStorage.getItem('city');
    if (city === 'Nur-Sultan') {
      var percent = (20 / 100) * parseInt(price);
      return parseInt(price) + parseInt(percent);
    } else {
      return price;
    }
  } catch (error) {
    return 0;
  }
};

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}
