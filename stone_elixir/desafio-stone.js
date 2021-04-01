/*
 * Para executar eh necessario apenas rodar no terminal 'node desafio-stone.js'
 * Caso tenha a extensao code runner do vs code: CTRL + Alt + N
 */
function share(productsList, emailList) {
  // tratamento de listas vazias
  if (Object.keys(productsList).length == 0 || emailList.length == 0) {
    throw new Error(
      "Não é possível executar a função, alguma das listas está vazia"
    );
  }
  // caso nao seja vazia, continua...
  else {
    let productsPrice = [];
    for (let i = 0; i < Object.values(productsList).length; i++) {
      let amount = Object.values(productsList)[i].amount;
      let price = Object.values(productsList)[i].price;

      totalPrice = amount * price; // total de cada produto

      productsPrice.push(totalPrice);
    }
    console.log(productsPrice);

    let total = productsPrice.reduce((n1, n2) => n1 + n2); // valor total de todos os produtos

    let share = total / emailList.length; // valor de cada email ate o penultimo

    // utilizando regex para truncar apenas 2 numeros
    let with2Decimals = share.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

    let arrayTemp = [];

    // definicao do mapa chave/valor
    let map = new Map(); // implementacao do ES6

    // adiciona todos ate o penultimo email, com chave e valor
    for (let i = 0; i < emailList.length - 1; i++) {
      map.set(emailList[i], with2Decimals);
      arrayTemp.push(with2Decimals);
    }

    // total ate o penultimo da lista de emails
    let totalArray = arrayTemp.reduce(
      (n1, n2) => parseFloat(n1) + parseFloat(n2)
    );

    // o ultimo da lista paga os decimos restantes, caso necessario
    let lastPrice = (total - totalArray)
      .toString()
      .match(/^-?\d+(?:\.\d{0,2})?/)[0];
    let lastOne = emailList[emailList.length - 1];
    map.set(lastOne, lastPrice);

    // demonstracao do mapa no terminal:
    console.log(map);
  }
}

// testes:
share(
  {
    Uva: {
      amount: 5,
      price: 800,
    },
    Laranja: {
      amount: 2,
      price: 300,
    },
    Pão: {
      amount: 50,
      price: 100,
    },
  },
  [
    "ncarrillo79@hotmail.com",
    "correio1@email.com",
    "correio2@email.com",
    "correio3@email.com",
    "correio4@email.com",
    "correio5@email.com",
    "correio6@email.com",
    "correio7@email.com",
    "correio8@email.com",
  ]
);

//share(
//  { Pêra: { amount: 6, price: 200 }, Melancia: { amount: 10, price: 500 } },
//  ["ncarrillo79@hotmail.com", "email1@email.com"]
//);

//share({}); // aparecera o erro

