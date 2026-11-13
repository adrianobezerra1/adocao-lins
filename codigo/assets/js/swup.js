
import Swup from 'https://unpkg.com/swup@4?module';
import SwupHeadPlugin from 'https://unpkg.com/@swup/head-plugin@2?module';

const swup = new Swup({
    containers: ['#swup', 'footer'],
    plugins: [
        new SwupHeadPlugin({
            awaitAssets: true
        })
    ]
});

async function carregarPagina() {
    const caminho = window.location.pathname;

    if (caminho.endsWith('/animais.html')) {
        const modulo = await import('./animais.js');
        modulo.inicializarAnimais();
    }
    else if (caminho.endsWith('/perfil-animal.html')) {
        const modulo = await import('./perfil-animal.js');
        modulo.inicializarPerfil();
    }
    else if (caminho.endsWith('/sobre-contato.html')) {
        console.log('Página Sobre e Contato carregada');
    }

    else if (
        caminho.endsWith('/index.html') ||
        caminho.endsWith('/')
    ) {
        const modulo = await import('./scripts.js');
        modulo.inicializarInicio();
    }
}

// Primeira execução
await carregarPagina();

// Executa após cada navegação
swup.hooks.on('page:view', carregarPagina);
