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
      age: 3,
      gender: 'femmina'
    },
    {
      name: 'Tredici',
      color: 'marrone',
      age: 9,
      gender: 'femmina'
    },
  ]

  // Tramite la funzione .forEach(), stampare in pagina tutti i gattini,
  // ciascuno con il proprio colore e il proprio nome.
  cats.forEach((item) => {
    console.log(`Il gatto ${item.name} è di colore ${item.color}`);
    $('#gatti').append(`<li>Il gatto ${item.name} è di colore ${item.color}</li>`);
  });


  // Milestone 2
  // Dividere i gatti in due contenitori distinti in base al sesso
  // e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina,
  // o di blu, se maschio.
  var catsM = cats.filter((item) => (item.gender == 'maschio'));
  var catsF = cats.filter((item) => (item.gender == 'femmina'));

  catsM.forEach((item) => {
    console.log(`Il gatto ${item.name} è di colore ${item.color}`);
    $('#gatti-maschi').append(`<li>Il gatto ${item.name} è di colore ${item.color}<i class="fas fa-ribbon"></i></li>`);
  });

  catsF.forEach((item) => {
    console.log(`Il gatto ${item.name} è di colore ${item.color}`);
    $('#gatti-femmine').append(`<li>Il gatto ${item.name} è di colore ${item.color}<i class="fas fa-ribbon"></i></li>`);
  });

  // Il colore del fiocco deve essere più tenue se il gatto è più giovane,
  // più scuro se il gatto è più vecchio.
  const catsNew = [];
  cats.forEach((item) => {
    let opacity = item.age / 10;
    let newItem = {
      ...item,
      opacity: opacity,
    }
    catsNew.push(newItem);
  });

  console.log(catsNew);

  catsM = catsNew.filter((item) => (item.gender == 'maschio'));
  catsF = catsNew.filter((item) => (item.gender == 'femmina'));

  catsM.forEach((item) => {
    console.log(`Il gatto ${item.name} è di colore ${item.color}`);
    $('#gatti-maschi.op').append(`<li>Il gatto ${item.name} è di colore ${item.color}<i class="fas fa-ribbon" style="opacity: ${item.opacity}"></i></li>`);
  });

  catsF.forEach((item) => {
    console.log(`Il gatto ${item.name} è di colore ${item.color}`);
    $('#gatti-femmine.op').append(`<li>Il gatto ${item.name} è di colore ${item.color}<i class="fas fa-ribbon" style="opacity: ${item.opacity}"></i></li>`);
  });

  // Milestone 3
  // Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini
  // maschio, inserendo solamente nome, colore e opacità del fiocco per
  // ogni gatto.
  let catsNew1 = [...catsM, ...catsF];

  console.log(catsNew1);

  const catsNew2 = [];
  catsNew1.map((item) => {
    const {name, color, opacity} = item;
    let newItem = {
      name: name,
      color: color,
      opacity: opacity
    }
    catsNew2.push(newItem);
  });

  console.log(catsNew2);


























});
