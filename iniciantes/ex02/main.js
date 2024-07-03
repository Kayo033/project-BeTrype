function alterar() {
    let pageCorpo = document.getElementById('corpo');
    let dm = document.getElementById('botao')
    pageCorpo.style.background = 'darkgreen';
}

document.getElementById('botao').addEventListener("click", alterar);