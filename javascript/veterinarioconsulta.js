// Elementos do formulário
const petSelect = document.getElementById('pet');
const observacoesTextarea = document.getElementById('observacoes');
const nomeTutorInput = document.getElementById('nome-tutor');
const dataInput = document.getElementById('data');
const horaInput = document.getElementById('hora');
const checkbox = document.getElementById('atendimento-urgente');
const agendarButton = document.getElementById('agendar');

// Validar o formulário
function validarFormulario() {
    // Verifica se todos os campos estão preenchidos
    if (petSelect.value === '' ||
        observacoesTextarea.value.trim() === '' ||
        nomeTutorInput.value.trim() === '' ||
        dataInput.value === '' ||
        horaInput.value === '') {
        
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    return true;
}

agendarButton.addEventListener('click', function() {
    if (validarFormulario()) {
        alert('Consulta agendada com sucesso!');
    }
});

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        agendarButton.textContent = 'Agendar com urgência';
    } else {
        agendarButton.textContent = 'Agendar';
        agendarButton.style.backgroundColor = ''; 
    }
});