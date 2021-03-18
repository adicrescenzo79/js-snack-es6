$(document).ready(function(){
  // Creare un array di oggetti:
  const bikes = [];
  // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
  // nome e peso.
  let nome = '';
  let peso = '';

  let bike = {
    nome,
    peso,
  }

  nome = 'Mountain-bike'
  peso = 4

  bike = {
    nome,
    peso,
  }

  bikes.push(bike);

  nome = 'Graziella'
  peso = 2

  bike = {
    nome,
    peso,
  }

  bikes.push(bike);

  nome = 'City-bike'
  peso = 3

  bike = {
    nome,
    peso,
  }

  bikes.push(bike);


  console.log(bikes);
  // Stampare a schermo la bici con peso minore utilizzando destructuring
  // e template literal
  let index = 0;
  let min = bikes[0].peso
  for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < min) {
      min = bikes[i].peso;
      index = i;
    }
  }
  console.log(`La bicicletta più leggera è la ${bikes[index].nome} che pesa ${bikes[index].peso} Kg`);
});
