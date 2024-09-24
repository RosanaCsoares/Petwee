document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const celular = document.getElementById("celular").value;
        const endereco = document.getElementById("endereco").value;
        const cpf = document.getElementById("cpf").value;
        const senha = document.getElementById("senha").value;
        const confirmeSenha = document.getElementById("confirme-senha").value;

        if (!nome || !email || !celular || !endereco || !cpf || !senha || !confirmeSenha) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const cpfPattern = /^\d{11}$/;
        if (!cpfPattern.test(cpf)) {
            alert("O CPF deve conter exatamente 11 dígitos numéricos.");
            return;
        }

        if (senha !== confirmeSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        alert("Cadastro realizado com sucesso!");

        form.reset();
    });
});