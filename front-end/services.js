function abrirModal(tipo) {
    const titulo = document.getElementById("modal-titulo");
    const texto = document.getElementById("modal-texto");
    const img = document.getElementById("modal-img");

    if (tipo === "web") {
        titulo.innerText = "Desenvolvimento Web";
        texto.innerText = "Criamos sites modernos, responsivos e otimizados para seu negócio.";
        img.src = "img4.png";
    }

    if (tipo === "suporte") {
        titulo.innerText = "Suporte Técnico";
        texto.innerText = "Oferecemos suporte especializado para garantir o funcionamento dos seus sistemas.";
        img.src = "suporte.jpg";
    }

    if (tipo === "automacao") {
        titulo.innerText = "Automação de Atividades";
        texto.innerText = "Automatizamos processos para aumentar sua produtividade e eficiência.";
        img.src = "automacao.jpg";
    }

    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}