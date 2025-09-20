let amigos = [];
let inputNombre = document.getElementById('nombreAmigo');
let listaAmigos = document.getElementById('listaAmigos');
let listaResultados = document.getElementById('resultado');


function limpiarCajaNombre () {
    inputNombre.value = '';
    }

function agregarAmigo() {
    if (inputNombre.value === '') {
        alert('Por favor, inserte un nombre.');
    } else if (amigos.includes(inputNombre.value)) {
        alert('Ese amigo ya fue agregado.');
    } else {
    amigos.push(inputNombre.value);
    mostrarAmigos();
    limpiarCajaNombre();
    inputNombre.focus();
  }
}

inputNombre.addEventListener('keyup', function(evento) {
  if (evento.key === 'Enter') {
    agregarAmigo();
  }
});

function mostrarAmigos() {
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
    });
}

function sortearAmigos () {
  if (amigos.length >= 2) {
    let amigosSorteo = [...amigos];
    for (let i = amigosSorteo.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [amigosSorteo[i], amigosSorteo[j]] = [amigosSorteo[j], amigosSorteo[i]];
    }
    for (let i = 0; i < amigos.length; i++) {
      if (amigos[i] === amigosSorteo[i]) {
          if (i === amigosSorteo.length - 1) {
              [amigosSorteo[i], amigosSorteo[i - 1]] = [amigosSorteo[i - 1], amigosSorteo[i]];
              } else {
          [amigosSorteo[i], amigosSorteo[amigosSorteo.length - 1]] = [amigosSorteo[amigosSorteo.length - 1], amigosSorteo[i]];
        }
      }
    }
      listaResultados.innerHTML = '';

      for (let i = 0; i < amigos.length; i++) {
          let nuevoResultado = document.createElement('li');
          nuevoResultado.textContent = `${amigos[i]} le regala a ${amigosSorteo[i]}`;
          listaResultados.appendChild(nuevoResultado);
    }
    listaResultados.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
      const nuevoResultado = document.createElement('li');
      nuevoResultado.textContent = `${amigos[i]} le regala a ${amigosSorteo[i]}`;
      listaResultados.appendChild(nuevoResultado);
      }
  } else {
    alert('Ingrese al menos dos jugadores para efectuar el sorteo.')
  }
}