# conversor-api
Conversor de Moedas com API

Este é um simples Conversor de Moedas desenvolvido em HTML, CSS e JavaScript, que utiliza a API ExchangeRate-API para realizar a conversão entre as moedas selecionadas. O projeto permite ao usuário inserir um valor, escolher as moedas de origem e destino e obter o valor convertido em tempo real.

Funcionalidades

Entrada de valor: O usuário insere o valor a ser convertido.
Seleção de moedas: O usuário pode selecionar a moeda original (de origem) e a moeda para a qual deseja realizar a conversão (moeda de destino).
Conversão de moedas: A taxa de câmbio é buscada via API e a conversão é realizada.
Exibição do resultado: O valor convertido é exibido na tela após a conversão.
Tecnologias Utilizadas
HTML5: Estruturação da página e do formulário.
CSS3: Estilização da interface, com transições suaves e efeitos visuais.
JavaScript: Lógica de conversão, manipulação de DOM e interação com a API de câmbio.
API Externa: Utiliza a API ExchangeRate-API para obter as taxas de câmbio em tempo real.

Como Usar

1. Clonando o Repositório
Para começar, clone este repositório para o seu computador:

bash
Copiar código
git clone https://github.com/seu-usuario/conversor-moedas.git
2. Abra o Projeto
Depois de clonado, abra o arquivo index.html em seu navegador. O site irá carregar a interface onde você poderá realizar as conversões.

3. Realize uma Conversão
Valor: Insira o valor que deseja converter.
Moeda Original: Selecione a moeda de origem (BRL, USD, EUR).
Moeda de Conversão: Escolha para qual moeda deseja converter.
Clique no botão Converter para obter o valor convertido. O resultado será exibido abaixo do botão.

4. Limpar Campos
Se desejar limpar os campos, clique no botão Limpar.

Estrutura de Arquivos
O projeto possui a seguinte estrutura de arquivos:

graphql
Copiar código
/conversor-moedas
│
├── index.html       # Arquivo HTML com a estrutura do formulário
├── style.css        # Arquivo CSS com as regras de estilo
├── script.js        # Arquivo JavaScript com a lógica da conversão
└── README.md        # Este arquivo README
Código JavaScript
O arquivo script.js contém a função principal de conversão. Ele realiza as seguintes etapas:

Captura do Formulário: Quando o formulário é submetido, o código captura os dados inseridos (valor e moedas).
Validação de Entrada: Verifica se o valor inserido é válido.
Chamada à API: Faz uma requisição à API ExchangeRate-API para obter a taxa de câmbio entre as moedas selecionadas.
Cálculo da Conversão: Utiliza a taxa de câmbio recebida da API para calcular o valor convertido.
Exibição do Resultado: Mostra o valor convertido na interface.

Estilização

O projeto possui uma interface visual limpa e responsiva, com efeitos visuais modernos, como transições suaves e animações de fade-in para o resultado da conversão. O estilo é implementado no arquivo style.css, utilizando as seguintes técnicas:

Gradiente de fundo: Para um visual mais agradável, foi usado um gradiente de cor de fundo.
Efeitos de foco: Os campos de entrada e seleção possuem animações sutis quando o usuário interage com eles.
Transições de botão: Os botões possuem um efeito visual ao passar o mouse, tornando a interface mais interativa.
Contribuindo
Se você deseja contribuir com este projeto, fique à vontade para enviar Pull Requests ou abrir Issues. Todas as melhorias e sugestões são bem-vindas!

