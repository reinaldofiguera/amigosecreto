const Amigos = [];
// Função para adicionar nomes do Amigo Secreto
function adicionarAmigo() {
    const inputAmigo = document.querySelector('#amigo')
    const listaAmigos = document.querySelector('#listaAmigos')

    if(!inputAmigo.value || inputAmigo.value.trim().length === 0 || !isNaN(inputAmigo.value)){
        window.alert('Por favor, insira um nome válido')
    }if(Amigos.includes(inputAmigo.value)){
        window.alert('Amigo já inserido, tente outro!')
    }else{
        Amigos.push(String(inputAmigo.value))
    }

    listaAmigos.innerHTML = Amigos.join('<br/>')
    }

    Amigos.push(nome);
    console.log(Amigos);

    document.getElementById('amigo').value = '';
    document.getElementById('sortear').disabled = false;
    atualizarLista();
// Função para Atualizar a lista com os nomes dos possiveis Amigo Secreto
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    Amigos.forEach(amigo => {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        lista.appendChild(novoAmigo);
        listaAmigos.innerHTML = Amigos.join('<br/>')
    });
}
// Função de sortear o nome do Amigo Secreto dos nomes que estão na lista
function sortearAmigo() {
    const amigo = Math.floor(Math. random() * Amigos.length);
    console.log(Amigos[amigo]);
    
    if(Amigos.length === 0) {
        alert('Não há amigos para sortear, lista vazia!');
        document.getElementById('sortear').disabled = true;
        return
    } else {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        const novoItem = document.createElement('li');
        novoItem.textContent = "O amigo secreto sorteado é: " + Amigos[amigo];
        resultado.appendChild(novoItem);
        console.log(novoItem);
        Amigos.splice(amigo, 1);
    }

    atualizarLista();
}