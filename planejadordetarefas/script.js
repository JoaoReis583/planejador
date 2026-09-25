let tarefas = [];

let totalTarefas = 0;
let totalConcluidas = 0;

function adicionarTarefa() {
    let nome = document.getElementById("tarefa").value.trim();
    let materia = document.getElementById("materia").value.trim();
    let prioridade = document.getElementById("prioridade").value;
    let mensagem = document.getElementById("mensagem");

    if (nome === "" || materia === "" || prioridade === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";

        return;
    }

    let duplicada = tarefas.some(function(tarefa) {
        return tarefa.nome.toLowerCase() === nome.toLowerCase() && tarefa.materia.toLowerCase() === materia.toLowerCase();
    }
}