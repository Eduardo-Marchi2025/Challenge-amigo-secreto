//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const nomeInput = document.getElementById('amigo');
const adicionarBtn = document.querySelector('.button-add');
const listaNomes = document.getElementById('listaAmigos');
const removerBtn = document.querySelector('.button-remove');
const sortearBtn = document.querySelector('.button-draw');
const resultado = document.getElementById('resultado');
const imagemLibras = document.getElementById('imagemLibras');
const limparBtn = document.querySelector('.button-restart');
let nomes = [];
let nomesSorteados = [];


adicionarBtn.addEventListener('click', adicionarNome);
removerBtn.addEventListener('click', () => {
    falar('Digite o nome que deseja remover');
    const nomeParaRemover = prompt('Digite o nome que deseja remover:');
    
    removerNome(nomeParaRemover);
});
nomeInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        adicionarNome();

    }
});

function adicionarNome() {
   const amigoImput = nomeInput.value.trim();

    // Adiciona amigos separados por vírgula
    if (amigoImput.includes(',')) {
        // Divide a string em um array de nomes e remove espaços extras
        let amigosInput = amigoImput.split(',').map(nome => nome.trim());

        // Processa cada nome individualmente
        amigosInput.forEach((item) => {
            validaTrataInput(item);
        });
    } else {
        validaTrataInput(amigoImput);
    }

    nomeInput.value = '';
    nomeInput.focus();
}
function validaTrataInput(nome) {
    if (nome === '') {
        falar('Digite o nome do Amigo!');
        alert('Digite o nome do Amigo!');
        nomeInput.value = '';
        nomeInput.focus();
        return;
    } 
   if (!/^[a-zA-ZÀ-ÿ\s]{2,}$/.test(nome)) {
        falar(`O nome ${nome} é inválido! O nome deve conter pelo menos duas letras, nenhum símbolo ou número! Nomes com acento e ç são permitidos!`);
        alert(`O nome ${nome} é inválido!\nO nome deve conter pelo menos duas letras, nenhum símbolo ou número!\nNomes com acento e ç são permitidos!`);
        nomeInput.value = '';
        nomeInput.focus(); 
        return;
    }
       // verifica se o amigo já foi adicionado
    if (validaDuplicado(nome)) {
        falar(`O nome do Amigo ${nome} já foi adicionado, coloque outro!`);
        alert(`O nome do Amigo ${nome} já foi adicionado, coloque outro!`);
        nomeInput.value = '';
        nomeInput.focus();
        return; 
    } else {
        const nomeFormatado = formatarNome(nome)
        nomes.push(nomeFormatado);
        atualizarLista();
        nomeInput.value = '';
        nomeInput.focus();
        falar(`Nome ${nomeFormatado} adicionado.`);
    }
}

function validaDuplicado(nome) {
    const nomeFormatado = formatarNome(nome)
    return nomes.some(n => n.toLowerCase() === nomeFormatado.toLowerCase());
}

function formatarNome(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

function atualizarLista() {
    const container = document.getElementById("listaAmigos");
        container.innerHTML = ''; // Limpa a lista atual

        // Define o número máximo de nomes por coluna
        const nomesPorColuna = 5;
        const maxColunasPorTela = 4;
        const colunas = Math.ceil(nomes.length / nomesPorColuna); // Calcula quantas colunas serão necessárias


        for (let i = 0; i < colunas; i++) {
            if (i % maxColunasPorTela === 0) {
                const telaContainer = document.createElement("div");
                //telaContainer = document.createElement("div");//
                telaContainer.classList.add("tela-container");
                container.appendChild(telaContainer);
        }
                const coluna = document.createElement("div");
                coluna.classList.add("coluna-nomes");

            // Adiciona até 5 nomes por coluna
            for (let j = 0; j < nomesPorColuna; j++) {
                const index = i * nomesPorColuna + j;
                if (index < nomes.length) {
                    const nomeDiv = document.createElement("div");
                    nomeDiv.textContent = (index + 1) + ' - ' + nomes[index]; // Adiciona a numeração
                    coluna.appendChild(nomeDiv); // Adiciona o nome à coluna
                }
            }

            container.lastChild.appendChild(coluna); // Adiciona a coluna ao contêiner da tela atual
    }
  }
 
function removerNome(nomeParaRemover) {
    const index = nomes.findIndex(nome => nome.toLowerCase() === nomeParaRemover.toLowerCase());

    if (index !== -1) {
        nomes.splice(index, 1);
        atualizarLista();
        falar(`O nome ${nomeParaRemover} foi removido da lista.`);
    } else {
        falar(`O nome ${nomeParaRemover} não foi encontrado na lista.`);
    }
}

sortearBtn.addEventListener('click', () => {
    if (nomes.length === 0) {
        falar('Adicione pelo menos um nome!');
        alert('Adicione pelo menos um nome!');
        nomeInput.focus();      
    } else if (nomesSorteados.length === nomes.length) {
        falar('Todos os nomes já foram sorteados. Reinicie o jogo!');
        alert('Todos os nomes já foram sorteados. Reinicie o jogo!');
        nomesSorteados = [];
        nomes = [];
        resultado.textContent = '';
        atualizarLista();
        nomeInput.focus();
        listaNomes.style.display = 'block'; // Mostra a lista quando reinicializa o jogo

    } else {
        // Oculta a lista antes de sortear
        listaNomes.style.display = 'none'; // Altere 'listaNomesElement' pelo nome do seu elemento que exibe a lista de nomes
        let nomeSorteado;
        do {
            const indiceSorteado = Math.floor(Math.random() * nomes.length);
            nomeSorteado = nomes[indiceSorteado];
        } while (nomesSorteados.includes(nomeSorteado));

        nomesSorteados.push(nomeSorteado);
        console.log('Nome sorteado:', nomeSorteado);
        resultado.textContent =  `O amigo secreto sorteado é: ${nomeSorteado}`;
        falar(`O amigo secreto sorteado é: ${nomeSorteado}`);

        // Exibe a imagem por 3 segundos
        imagemLibras.style.display = 'block';
        setTimeout(() => {
            imagemLibras.style.display = 'none';
        }, 3400);
    }
    });

limparBtn.addEventListener('click', () => {
    nomes = [];
    nomesSorteados = [];
    atualizarLista();
    resultado.textContent = '';
    falar('A LISTA DE NOMES FOI LIMPA');
    location.reload();
    nomeInput.focus();
});

function falar(texto) {
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';

    const vozes = window.speechSynthesis.getVoices();

    window.speechSynthesis.speak(utterance);
}
window.speechSynthesis.onvoiceschanged = () => {
    const vozes = window.speechSynthesis.getVoices();
};
