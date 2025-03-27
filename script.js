function alternarBarra() {
    let barra = document.getElementById("barraLateral");

    barra.classList.toggle("fechar");
}




function enviarDados() {
    // Capturar os valores dos campos
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let ingresso = document.querySelector('input[name="ingresso"]:checked');
    let termos = document.getElementById("termos").checked;

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (nome === "" || email === "" || !ingresso || !termos) {
        alert("Por favor, preencha todos os campos e aceite os termos.");
        return;
    }

    // Criar um objeto com os dados
    let dados = {
        nome: nome,
        email: email,
        ingresso: ingresso.value,
        termosAceitos: termos
    };

    // Armazenar os dados no localStorage (convertendo para JSON)
    localStorage.setItem("inscricao", JSON.stringify(dados));

    // Mensagem de sucesso
    alert("Dados enviados com sucesso!");
}
