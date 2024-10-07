function decimal_binario(decimal) {
  let binario = '';

  while (decimal > 0) {
    binario = (decimal % 2) + binario;
    decimal = Math.floor(decimal / 2);
  }

  return binario;
}

const decimalNumber = 10;
const binarioNumber = decimal_binario(decimalNumber);
console.log(binarioNumber);
