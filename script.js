const apiKey = '687da2f1a2edb71b95661776';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Função para buscar a taxa de câmbio via API
async function getExchangeRate(daMoeda, paraMoeda) {
    try {
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();

        if (data.result === "success") {
            return data.conversion_rates[paraMoeda];  // Retorna a taxa de câmbio
        } else {
            throw new Error('Erro ao buscar as taxas de câmbio');
        }
    } catch (error) {
        console.error("Erro:", error);
        return null;  // Retorna null em caso de erro
    }
}

// Evento de submit do formulário
document.getElementById('currencyForm').addEventListener('submit', async function (event) {
    event.preventDefault();  // Previne o envio padrão do formulário

    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // Verifica se o valor de entrada é válido
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    // Busca a taxa de câmbio
    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda); // Aqui usamos await para aguardar o retorno da taxa

    if (exchangeRate) {
        // Calcula o valor convertido
        const convertedValue = valor * exchangeRate;
        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`;
    } else {
        alert("Não foi possível buscar a cotação. Tente novamente.");
    }
});
