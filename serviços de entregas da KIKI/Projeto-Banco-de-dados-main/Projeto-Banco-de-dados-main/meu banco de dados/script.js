// ==============================
// CADASTRO
// ==============================

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.querySelector("#nome");
        const email = document.querySelector("#email");
        const senha = document.querySelector("#senha");
        const confirmarSenha = document.querySelector("#confirmar-senha");

        if (nome && nome.value === "") {
            alert("Digite seu nome!");
            return;
        }

        if (email && email.value === "") {
            alert("Digite seu email!");
            return;
        }

        if (senha && senha.value === "") {
            alert("Digite sua senha!");
            return;
        }

        if (confirmarSenha && confirmarSenha.value === "") {
            alert("Confirme sua senha!");
            return;
        }

        if (senha && confirmarSenha && senha.value !== confirmarSenha.value) {
            alert("As senhas não são iguais!");
            return;
        }

        alert("Cadastro válido!");

    });

}


// ==============================
// CARRINHO
// ==============================

function adicionarCarrinho(nome, preco, imagem) {

    const campoQuantidade = document.getElementById("quantidade");

    let quantidade = 1;

    if (campoQuantidade) {
        quantidade = Number(campoQuantidade.value);
    }

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];


    let produto = {

        nome: nome,

        preco: preco,

        imagem: imagem,

        quantidade: quantidade

    };


    carrinho.push(produto);


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    alert("Produto adicionado ao carrinho! 🛒");

}


// ==============================
// MOSTRAR CARRINHO
// ==============================

function mostrarCarrinho() {

    const lista =
        document.getElementById("lista-carrinho");

    if (!lista) {
        return;
    }


    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];


    lista.innerHTML = "";


    let total = 0;


    if (carrinho.length === 0) {

        lista.innerHTML =
            "<p>Seu carrinho está vazio.</p>";

        document.getElementById("total").innerText =
            "Total: R$ 0,00";

        return;
    }


    carrinho.forEach(function(produto, index) {

        let subtotal =
            produto.preco * produto.quantidade;


        total += subtotal;


        lista.innerHTML += `

            <div class="item-carrinho">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

                <div class="item-carrinho-info">

                    <h3>${produto.nome}</h3>

                    <p>
                        Preço:
                        R$ ${produto.preco
                            .toFixed(2)
                            .replace(".", ",")}
                    </p>

                    <p>
                        Quantidade:
                        ${produto.quantidade}
                    </p>

                    <p>
                        Subtotal:
                        R$ ${subtotal
                            .toFixed(2)
                            .replace(".", ",")}
                    </p>

                    <button
                        onclick="removerProduto(${index})"
                    >
                        Remover
                    </button>

                </div>

            </div>

        `;

    });


    document.getElementById("total").innerText =
        "Total: R$ " +
        total.toFixed(2).replace(".", ",");

}


// ==============================
// REMOVER PRODUTO
// ==============================

function removerProduto(index) {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];


    carrinho.splice(index, 1);


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    mostrarCarrinho();

}


// ==============================
// PESQUISA
// ==============================

function pesquisarProdutos() {

    const campoPesquisa =
        document.getElementById("pesquisa");

    if (!campoPesquisa) {
        return;
    }


    let pesquisa =
        campoPesquisa.value.toLowerCase();


    let produtos =
        document.querySelectorAll(".produto");


    produtos.forEach(function(produto) {

        let nome =
            produto
                .querySelector("h3")
                .innerText
                .toLowerCase();


        if (nome.includes(pesquisa)) {

            produto.style.display = "block";

        } else {

            produto.style.display = "none";

        }

    });

}


// ==============================
// INICIAR CARRINHO
// ==============================

mostrarCarrinho();