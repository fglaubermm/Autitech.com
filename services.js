const servicos = [
    {
        categoria: "dev",
        titulo: "Desenvolvimento Web",
        desc: "Sites modernos com a sua personalização",
        texto: "Criamos sites profissionais para fortalecer sua presença digital.",
        img: "#"
    },
    {
        categoria: "dev",
        titulo: "Landing Pages",
        desc: "Páginas focadas em acesso rápido",
        texto: "Desenvolvemos páginas que transformam visitantes em clientes.",
        img: "#"
    },
    {
        categoria: "suporte",
        titulo: "Suporte Técnico",
        desc: "Atendimento e suporte em sistemas",
        texto: "Resolvemos problemas de software, Manutenção, Segurança, Controle de Inventário de equipamentos entre mais serviços, garantindo que sua operação não pare. ",
img: "#"    },
    {
        categoria: "suporte",
        titulo: "Assistência Técnica",
        desc: "Manutenção e reparo de equipamentos",
        texto: "Realizamos consertos, upgrades e manutenção física para manter seus dispositivos funcionando perfeitamente.",
        img: "img3.png"
    },
    {
        categoria: "automacao",
        titulo: "Automação de Processos",
        desc: "Aumente sua eficiência no dia a dia",
        texto: "Automatizamos tarefas repetitivas para aumentar produtividade.",
img: "#"    },
    {
        categoria: "sustentabilidade",
        titulo: "Coleta de resíduo eletrônico",
        desc: "Descarte sustentável",
        texto: "Coletamos de forma GRATUITA seus resíduos eletrônicos para promover o descarte correto e logística reversa deles"
    }
];

function filtrar(cat) {
    const container = document.getElementById("lista-servicos");
    container.innerHTML = "";

    const filtrados = servicos.filter(s => s.categoria === cat);

    filtrados.forEach(s => {
        container.innerHTML += `
      <div class="card-servico" onclick="abrirModal('${s.titulo}')">
        <h3>${s.titulo}</h3>
        <p>${s.desc}</p>
      </div>
    `;
    });
}

function abrirModal(titulo) {
    const servico = servicos.find(s => s.titulo === titulo);

    document.getElementById("modal-titulo").innerText = servico.titulo;
    document.getElementById("modal-texto").innerText = servico.texto;
    document.getElementById("modal-img").src = servico.img;

    document.getElementById("modal-btn").href =
        "https://wa.me/5567993501382?text=Olá, gostaria de um orçamento sobre: " + servico.titulo;

    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

/* fechar clicando fora */
window.onclick = function (e) {
    if (e.target.id === "modal") {
        fecharModal();
    }
}
