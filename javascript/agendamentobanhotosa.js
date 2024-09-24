// Elementos do formulário
const petSelect = document.getElementById('pet');
const observacoesTextarea = document.getElementById('observacoes');
const enderecoInput = document.getElementById('endereco');
const dataInput = document.getElementById('data');
const horaInput = document.getElementById('hora');
const telebuscaSim = document.getElementById('telebusca-sim');
const telebuscaNao = document.getElementById('telebusca-nao');
const agendarButton = document.getElementById('agendar');


function verificarTelebusca() {
    if (telebuscaSim.checked) {
        enderecoInput.disabled = false;
    } else if (telebuscaNao.checked) {
        enderecoInput.disabled = true;
        enderecoInput.value = ''; 
    }
}

telebuscaSim.addEventListener('change', verificarTelebusca);
telebuscaNao.addEventListener('change', verificarTelebusca);

// Validar o formulário
function validarFormulario() {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (petSelect.value === '' ||
        observacoesTextarea.value.trim() === '' ||
        dataInput.value === '' ||
        horaInput.value === '' ||
        (telebuscaSim.checked && enderecoInput.value.trim() === '')) {
        
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }

    if (!telebuscaSim.checked && !telebuscaNao.checked) {
        alert('Por favor, selecione se deseja utilizar o serviço de Taxi - Pet.');
        return false;
    }

    return true;
}

agendarButton.addEventListener('click', function() {
    // Mensagem de sucesso.
    if (validarFormulario()) {
        alert('Agendamento realizado com sucesso!');
    }
});