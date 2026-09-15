//1 BUSCA DE CEP 
document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    //2
    if (!(cepInformado.length == 8)) {
        return;
    }

    //3
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;
            } else {
                alert("CEP não encontrado");
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP:", error));

})


// WEB STORAGE API

const form = document.querySelector("form");

// 1
window.addEventListener("DOMContentLoaded", () => {
    const dadosSalvos = localStorage.getItem("cadastro");

    if (dadosSalvos) {
        const cadastro = JSON.parse(dadosSalvos);

        document.getElementById("nome").value = cadastro.nome || "";
        document.getElementById("email").value = cadastro.email || "";
        document.getElementById("telefone").value = cadastro.telefone || "";
        document.getElementById("cep").value = cadastro.cep || "";
        document.getElementById("logradouro").value = cadastro.logradouro || "";
        document.getElementById("numero").value = cadastro.numero || "";
        document.getElementById("bairro").value = cadastro.bairro || "";
        document.getElementById("cidade").value = cadastro.cidade || "";
        document.getElementById("estado").value = cadastro.estado || "";
    }
});

// 2. 
form.addEventListener("submit", (evento) => {
    evento.preventDefault(); 

    const cadastro = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        cep: document.getElementById("cep").value,
        logradouro: document.getElementById("logradouro").value,
        numero: document.getElementById("numero").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
    };

    localStorage.setItem("cadastro", JSON.stringify(cadastro));

    alert("Cadastro salvo com sucesso!");
});