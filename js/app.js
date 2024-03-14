// Função para comprar ingressos
function comprar() {
    // Obtém o tipo de ingresso selecionado pelo usuário
    var tipoIngresso = document.getElementById("tipo-ingresso").value;   

    // Obtém a quantidade digitada pelo usuário
    var quantidade = parseInt(document.getElementById("qtd").value);

    // Obtém a quantidade disponível atual do tipo de ingresso selecionado
    var quantidadeDisponivel = parseInt(document.getElementById("qtd-" + tipoIngresso).textContent);

    // Verifica se a quantidade desejada é maior que a quantidade disponível
    if (quantidade > quantidadeDisponivel) {
        alert("Quantidade indisponível para " + tipoIngresso + "!");
        return; // Sai da função se a quantidade desejada for maior que a disponível
    }

    // Atualiza a quantidade disponível subtraindo a quantidade comprada
    var novaQuantidade = quantidadeDisponivel - quantidade;
    document.getElementById("qtd-" + tipoIngresso).textContent = novaQuantidade;
}
