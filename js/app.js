// Função para comprar ingressos
function comprar() {
    // Obtém o tipo de ingresso selecionado pelo usuário
    var tipoIngresso = document.getElementById("tipo-ingresso").value;

    // Obtém a quantidade digitada pelo usuário
    var quantidadeInput = document.getElementById("qtd").value;
    var quantidade = parseInt(quantidadeInput);

    // Verifica se a quantidade é um número positivo
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return; // Sai da função se a quantidade não for válida
    }

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
