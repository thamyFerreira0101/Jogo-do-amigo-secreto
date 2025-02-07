//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado'); 

// Função adicionar amigos
function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Sua regex para validação

    if (nome== '' ){
        alert("Você não pode deixar o espaço vazio! Insira um nome válido.");
        return;
    } else if (!regex.test(nome)) { // Verifica se o nome contém apenas letras
        alert("Somente letras poderão ser inseridas!");
        return;
    } else {
        amigos.push(nome);
        limparCampo();
    }

    atualizarLista();
    console.log('Nome capturado: ', nome);
    return nome;
    
}

// Função para limpar o campo
function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}

// Função para atualizar a lista
function atualizarLista(){
    lista.innerHTML = ''; //limpar o campo nome
    
    amigos.forEach(amigo =>{
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo(){
    if(amigos.length === 0){
        alert('Adione pelo menos um amigo para realizar o sorteio!');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
    resultado.innerHTML =  `<li>O amigo/a secreto é: ${amigoSorteado} </li>`; // Colocando a lista de nome

    }

// Função para limpar a lista e recomeçar o sorteio
function limparLista(){
    amigos = []; // Limpa a lista de amigos
    atualizarLista(); // Atualiza a lista na tela
    resultado.innerHTML = ''; // Limpa o resultado do sorteio
}

