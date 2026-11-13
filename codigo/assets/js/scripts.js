import { animais } from '../../data/dados-animais.js';

export function inicializarInicio() {
    renderizarAnimal(animais);
}

function renderizarAnimal(listaAnimais) {
    const grid = document.getElementById('animais');

    if (!grid || !grid.classList.contains('animais')) return;

    if (listaAnimais.length === 0) {
        grid.innerHTML = '<p>Animal não encontrado</p>';
        return;
    }

    grid.innerHTML = listaAnimais.map(cardAnimal).join('');
}

function cardAnimal(animal) {
    return `
        <div class="cardsanimal">
            <img src="${animal.fotos[0]}" alt="${animal.nome}">
            <h3>${animal.nome}</h3>
            <p>${animal.especie}</p>
            <a href="./codigo/pages/perfil-animal.html?id=${animal.id}&origem=index">
                <button>QUERO ADOTAR</button>
            </a>
        </div>
    `;
}