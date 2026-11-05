import { animais } from '../dados/dados-animais.js'

document.addEventListener('DOMContentLoaded', function () {

    const parametro = new URLSearchParams(window.location.search);
    const id = Number(parametro.get('id'));
    const origem = parametro.get('origem');
    const linkvoltar = document.getElementById('link-voltar');

    if (origem === 'animais') {

        linkvoltar.innerHTML = `
            <a class="back-link" href="animais.html">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6095 0.439336C12.1301 1.02513 12.1301 1.97487 11.6095 2.56067L4.55228 10.5H22.6667C23.4031 10.5 24 11.1716 24 12C24 12.8285 23.4031 13.5 22.6667 13.5H4.55228L11.6095 21.4394C12.1301 22.0251 12.1301 22.9749 11.6095 23.5607C11.0888 24.1464 10.2445 24.1464 9.72387 23.5607L0.39052 13.0607C0.14048 12.7794 0 12.3978 0 12C0 11.6022 0.14048 11.2206 0.39052 10.9394L9.72387 0.439336C10.2445 -0.146445 11.0888 -0.146445 11.6095 0.439336Z" fill-rule="evenodd" clip-rule="evenodd" fill="black" />
                </svg>
                <span>Voltar para a lista de animais</span>
             </a>
        `
    } else if (origem === 'index') {
        linkvoltar.innerHTML = `
            <a class="back-link" href="../index.html">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6095 0.439336C12.1301 1.02513 12.1301 1.97487 11.6095 2.56067L4.55228 10.5H22.6667C23.4031 10.5 24 11.1716 24 12C24 12.8285 23.4031 13.5 22.6667 13.5H4.55228L11.6095 21.4394C12.1301 22.0251 12.1301 22.9749 11.6095 23.5607C11.0888 24.1464 10.2445 24.1464 9.72387 23.5607L0.39052 13.0607C0.14048 12.7794 0 12.3978 0 12C0 11.6022 0.14048 11.2206 0.39052 10.9394L9.72387 0.439336C10.2445 -0.146445 11.0888 -0.146445 11.6095 0.439336Z" fill-rule="evenodd" clip-rule="evenodd" fill="black" />
                </svg>
                <span>Voltar para o Início</span>
             </a>
        `
    }
    
    let animal = null;

    for (let i = 0; i < animais.length; i++) {
        if (animais[i].id === id) {
            animal = animais[i];
            i = animais.length;
        }
    }
    if (animal === null) {
        document.querySelector('main').innerHTML = '<p>Animal não encontrado.</p>';
    }
    perfil(animal)
});

function perfil(animal) {

    console.log(animal.descricao);
    console.log(animal.fotos);
    console.log(document.querySelector('.gallery-grid'));
    console.log(document.querySelector('.description p'));

    document.getElementById('animal-name').textContent = animal.nome;
    document.title = animal.nome;

    document.querySelector('.pill-sexo').textContent = animal.sexo;
    document.querySelector('.pill-idade').textContent = animal.idade;
    document.querySelector('.pill-porte').textContent = animal.porte;

    document.querySelector('.main-photo img').src = animal.fotos[0];
    document.querySelector('.main-photo img').alt = animal.nome;

    const thumbsContainer = document.querySelector('.thumbnails');

    thumbsContainer.innerHTML = animal.fotos.map(function (foto, i) {
        return `
            <div class="thumb" data-index ="${i}">
                <img src="${foto}" alt="foto ${i + 1}">
            </div>
        `;
    }).join('')

    document.querySelector('.detail-porte .value').textContent = animal.porte;
    document.querySelector('.detail-idade .value').textContent = animal.idade;
    document.querySelector('.detail-sexo .value').textContent = animal.sexo;

    if (animal.castrado === true) {
        document.querySelector('.detail-castrado .value').textContent = 'Sim';
    } else {
        document.querySelector('.detail-castrado .value').textContent = 'Não';
    }
    document.getElementById('descricao').textContent = animal.descricao;

    const galeriaGrid = document.querySelector('.gallery-grid');
    galeriaGrid.innerHTML = animal.fotos.map(function (foto, i) {
        return `
            <div class="gallery-photo">
                <img src="${foto}" alt="foto ${i + 1}">
            </div>
        `;
    }).join('');
}
