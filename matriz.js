let dados = [];

function adicionarItem() {
  const problema = document.getElementById("problema").value;
  const g = Number(document.getElementById("gravidade").value);
  const u = Number(document.getElementById("urgencia").value);
  const t = Number(document.getElementById("tendencia").value);

  const total = g * u * t;

  const item = { problema, g, u, t, total };

  dados.push(item);

  ordenar();
  renderizar();
}

function ordenar() {
  dados.sort((a, b) => b.total - a.total);
}

function renderizar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  dados.forEach(item => {
    lista.innerHTML += `
      <tr>
        <td>${item.problema}</td>
        <td>${item.g}</td>
        <td>${item.u}</td>
        <td>${item.t}</td>
        <td>${item.total}</td>
      </tr>
    `;
  });
}

function gerarMatriz() {
  document.getElementById("ui").innerHTML = "<h3>Urgente e Importante</h3>";
  document.getElementById("inu").innerHTML = "<h3>Importante não urgente</h3>";
  document.getElementById("uni").innerHTML = "<h3>Urgente não importante</h3>";
  document.getElementById("nuni").innerHTML = "<h3>Não urgente / não importante</h3>";

  dados.forEach(item => {
    const elemento = `<p>${item.problema} (${item.total})</p>`;

    if (item.g >= 3 && item.u >= 3) {
      document.getElementById("ui").innerHTML += elemento;
    }
    else if (item.g >= 3 && item.u < 3) {
      document.getElementById("inu").innerHTML += elemento;
    }
    else if (item.g < 3 && item.u >= 3) {
      document.getElementById("uni").innerHTML += elemento;
    }
    else {
      document.getElementById("nuni").innerHTML += elemento;
    }
  });

  // 👇 mantém isso
  mostrarToast();
} function gerarMatriz() {
  // limpa os quadrantes
  document.getElementById("ui").innerHTML = "<h3>Urgente e Importante</h3>";
  document.getElementById("inu").innerHTML = "<h3>Importante não urgente</h3>";
  document.getElementById("uni").innerHTML = "<h3>Urgente não importante</h3>";
  document.getElementById("nuni").innerHTML = "<h3>Não urgente / não importante</h3>";

  dados.forEach(item => {
    const elemento = `<p>${item.problema} (${item.total})</p>`;

    if (item.g >= 3 && item.u >= 3) {
      document.getElementById("ui").innerHTML += elemento;
    }
    else if (item.g >= 3 && item.u < 3) {
      document.getElementById("inu").innerHTML += elemento;
    }
    else if (item.g < 3 && item.u >= 3) {
      document.getElementById("uni").innerHTML += elemento;
    }
    else {
      document.getElementById("nuni").innerHTML += elemento;
    }
  });
}
function mostrarToast() {
  const toast = document.getElementById("toast");

  toast.textContent = "Matriz de prioridades gerada, obrigado por escolher a AutiTech!";

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}