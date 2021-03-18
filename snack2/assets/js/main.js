$(document).ready(function(){
  // Creare un array di oggetti di squadre di calcio.
  // Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  const squadre = [];

  // Nome sarà l’unica proprietà da compilare,
  // le altre saranno tutte settate a 0.
  // Generare numeri random al posto degli 0 nelle proprietà:
  // Punti fatti e falli subiti.
  let squadra = {
    nome: 'Inter',
    peso: randomNumberInRange(0, 15),
    falli: randomNumberInRange(0, 10),
  }

  squadre.push(squadra);

  squadra = {
    nome: 'Milan',
    peso: randomNumberInRange(0, 15),
    falli: randomNumberInRange(0, 10),
  }

  squadre.push(squadra);

  squadra = {
    nome: 'Roma',
    peso: randomNumberInRange(0, 15),
    falli: randomNumberInRange(0, 10),
  }

  squadre.push(squadra);

  squadra = {
    nome: 'Lazio',
    peso: randomNumberInRange(0, 15),
    falli: randomNumberInRange(0, 10),
  }

  squadre.push(squadra);

  squadra = {
    nome: 'Juventus',
    peso: randomNumberInRange(0, 15),
    falli: randomNumberInRange(0, 10),
  }

  squadre.push(squadra);

  console.log(squadre);


  // Infine usando la destrutturazione creiamo un nuovo array i cui elementi
  // contengono solo nomi e falli subiti e stampiamo tutto in console.
  const squadre1 = [];

  for (let i = 0; i < squadre.length; i++) {
    let {nome, falli} = squadre[i];
    squadra = {
      nome,
      falli,
    };
    squadre1.push(squadra);
    console.log(`La squadra ${nome} ha subito ${falli} falli`);
  }

  console.log(squadre1);

});

// FUNCTION
function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * max) + min;
}
