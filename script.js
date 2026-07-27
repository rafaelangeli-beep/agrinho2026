const botao = document.getElementById("botaoTema");

botao.addEventListener("click", function () {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        botao.innerHTML = " Modo claro";
    } else {
        botao.innerHTML = " Modo escuro";
    }
});