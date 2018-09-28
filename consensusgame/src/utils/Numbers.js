export function numberToString(number) {
  let result;
  let scale = '';
  if (number > 500000) {
    result = number / 1000000;
    scale = 'M';
  } else {
    if (number > 500) {
      result = number / 1000;
      scale ='K';
    } else {
      result = number;
    }
  }
  if (parseInt(result, 10) != result) {
    result = result.toFixed(1);
  }
  result = `${result}${scale}`;
  return result;
}
