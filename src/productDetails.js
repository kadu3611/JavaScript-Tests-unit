/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

/* const retornar = () => {
  const valores = productDetails('água', 'água');
  let recebe;
  recebe = Object.values(Object.values(Object.values(valores[0])[1])[0]);
  let cada = recebe[recebe.length -3] + recebe[recebe.length -2] + recebe[recebe.length -1]
  return cada;
}; */
/* console.log(retornar()); */

module.exports = productDetails;
