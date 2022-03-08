/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (numeros) => {
  let soma = 0;
  let conta;
  let resultado;
  if (numeros.length === 0) {
    return undefined;
  }
  for (let i = 0; i < numeros.length; i += 1) {
    if (typeof numeros[i] !== 'number') {
      return undefined;
    }
  soma += numeros[i];
  }
  conta = soma / numeros.length;
  resultado = Math.round(conta);
  return resultado;
};

module.exports = average;
