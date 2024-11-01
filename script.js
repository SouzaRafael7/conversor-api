const apiKey = '687da2f1a2edb71b95661776';

const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Função para buscar taxa de câmbio via API
async function getExchangeRate(daMoeda, ParaMoeda) {
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();

        if(data.result == "success"){
            return data.conversion_rates[ParaMoeda];
        }else{
            throw new Error('Erro ao buscar as taxas de câmbio');
        }

    }catch (error){

    }
}