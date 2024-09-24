document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('support-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validação 
        if (!firstName || !lastName || !email || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        console.log('Primeiro nome:', firstName);
        console.log('Último nome:', lastName);
        console.log('Email:', email);
        console.log('Mensagem:', message);

        form.reset(); // Limpa o formulário após o envio

        alert('E-mail enviado com sucesso!');
    });
});