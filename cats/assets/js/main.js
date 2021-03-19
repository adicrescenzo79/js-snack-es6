$(document).ready(function(){

  // Milestone 1
  // Definire un array di oggetti; ogni oggetto rappresenta un gatto,
  // che è caratterizzato da: nome, età, colore e sesso.
  const cats = [
    {
      name: 'Numero',
      color: 'nero',
      age: 10,
      gender: 'maschio'
    },
    {
      name: 'Sei',
      color: 'rosso',
      age: 8,
      gender: 'maschio'
    },
    {
      name: 'Dernier',
      color: 'bianco',
      age: 5,
      gender: 'femmina'
    },
    {
      name: 'Figaro',
      color: 'marroncino',
      age: 7,
      gender: 'maschio'
    },
    {
      name: 'Fragolina',
      color: 'marroncino',
      age: 6,
      gender: 'femmina'
    },
    {
      name: 'Tredici',
      color: 'marrone',
      age: 10,
      gender: 'femmina'
    },
  ]

  // Tramite la funzione .forEach(), stampare in pagina tutti i gattini,
  // ciascuno con il proprio colore e il proprio nome.
  cats.forEach((item) => {
    console.log(`Il gatto ${item.name} è di colore ${item.color}`);
    $('#gatti').append(`<li>Il gatto ${item.name} è di colore ${item.color}</li>`);

  });




























});
