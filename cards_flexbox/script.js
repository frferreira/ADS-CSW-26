const assuntos = [
    {
        titulo: "HTML",
        resumo: "Linguagem responsável pela estrutura das páginas Web.",
        detalhes: "HTML significa HyperText Markup Language. É utilizada para criar títulos, parágrafos, imagens, formulários e toda a estrutura de um site."
    },
    {
        titulo: "CSS",
        resumo: "Responsável pela aparência visual dos sites.",
        detalhes: "CSS significa Cascading Style Sheets. Permite alterar cores, fontes, tamanhos, layouts e tornar páginas responsivas."
    },
    {
        titulo: "JavaScript",
        resumo: "Adiciona interatividade às páginas Web.",
        detalhes: "JavaScript permite criar animações, validações de formulários, comunicação com APIs e aplicações completas no navegador."
    },
    {
        titulo: "JSON",
        resumo: "Formato utilizado para troca de dados.",
        detalhes: "JSON é leve, fácil de ler e amplamente utilizado em APIs REST para comunicação entre frontend e backend."
    },
    {
        titulo: "AJAX",
        resumo: "Permite comunicação assíncrona com servidores.",
        detalhes: "AJAX possibilita atualizar partes da página sem recarregá-la completamente."
    },
    {
        titulo: "Node.js",
        resumo: "Executa JavaScript no servidor.",
        detalhes: "Node.js permite desenvolver aplicações backend utilizando JavaScript."
    },
    {
        titulo: "MySQL",
        resumo: "Banco de dados relacional.",
        detalhes: "MySQL armazena dados em tabelas relacionadas e utiliza a linguagem SQL."
    },
    {
        titulo: "API REST",
        resumo: "Padrão para comunicação entre sistemas.",
        detalhes: "Utiliza métodos HTTP como GET, POST, PUT e DELETE para manipulação de recursos."
    },
    {
        titulo: "Flexbox",
        resumo: "Sistema moderno de layout CSS.",
        detalhes: "Facilita alinhamento horizontal, vertical e construção de layouts responsivos."
    },
    {
        titulo: "Git",
        resumo: "Sistema de controle de versões.",
        detalhes: "Permite acompanhar alterações no código e trabalhar colaborativamente em projetos."
    }
];

const container = document.getElementById("container-cards");


assuntos.forEach((assunto, indice) => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${assunto.titulo}</h2>
        <p>${assunto.resumo}</p>
        <button onclick="abrirModal(${indice})">
            Saiba Mais
        </button>
    `;

    container.appendChild(card);

});

function abrirModal(indice) {

    document.getElementById("modalTitulo").innerText =
        assuntos[indice].titulo;

    document.getElementById("modalTexto").innerText =
        assuntos[indice].detalhes;

    document.getElementById("modal").style.display = "block";
}

document.querySelector(".fechar").addEventListener("click", () => {

    document.getElementById("modal").style.display = "none";

});

window.addEventListener("click", (event) => {

    if(event.target.id === "modal") {
        document.getElementById("modal").style.display = "none";
    }

});