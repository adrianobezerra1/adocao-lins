import { animais } from '../../data/dados-animais.js';

document.addEventListener('DOMContentLoaded', function () {
    rederizaranimal(animais);
    document.getElementById("ano").textContent = new Date().getFullYear();

})

function rederizaranimal(animais) {
    const grid = document.getElementById('animais')
    if (animais.lenght === 0) {
        grid.innerHTML = '<p>Animal não encontrado</p>';
        return;
    }

    const destaque = [...animais].sort(() => Math.random() - 0.5).slice(0, 4);
    grid.innerHTML = destaque.map(cardanimal).join('');
}

function cardanimal(animal) {
    return `
        <div class="cardsanimal">
            <img src="${animal.fotos[0]}" alt="${animal.nome}">
            <h3>${animal.nome}</h3>
            <p>${animal.especie}</p>
            <a href="./codigo/pages/perfil-animal.html?id=${animal.id}&origem=index">
                <button>QUERO ADOTAR</button>
            </a>
        </div>
    `
}