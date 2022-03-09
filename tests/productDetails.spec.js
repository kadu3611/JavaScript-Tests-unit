const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    /* fail('Teste vazio!'); */
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.

    expect(productDetails('água', 'perfume')).toEqual([ { name: 'água', details: { productId: 'água123' } },
    { name: 'perfume', details: { productId: 'perfume123' } } ]);
    expect(Object.keys(productDetails('água', 'perfume')).length).toEqual(2)
    expect(Array.isArray(productDetails('água', 'perfume'))).toEqual(true);
    expect(typeof Object.values(productDetails())).toEqual('object');
    const retornar = () => {
      const valores = productDetails('alcool', 'água');
    
      if (Object.values(Object.values(valores[0]))[0] === Object.values(Object.values(valores[1]))[0]) {
        return 'Iguais';
      }
        return 'Diferentes';
      };
    expect(retornar()).toEqual('Diferentes');
    const trazer = () => {
      const valores = productDetails('água', 'alcool');
      let recebe1;
      recebe1 = Object.values(Object.values(Object.values(valores[0])[1])[0]);
      let recebe2 = Object.values(Object.values(Object.values(valores[1])[1])[0]);
      let cada1 = recebe1[recebe1.length -3] + recebe1[recebe1.length -2] + recebe1[recebe1.length -1]
      let cada2 = recebe2[recebe2.length -3] + recebe2[recebe2.length -2] + recebe2[recebe2.length -1]
      if (cada1 = cada2){
        return 123;
      }
    };
    expect(trazer()).toEqual(123);


    
    

  });
});
