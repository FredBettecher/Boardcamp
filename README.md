# 🎲 Boardcamp

Boardcamp é um sistema de gestão para locadoras de jogos de tabuleiro, desenvolvido para facilitar o equilíbrio entre experiências digitais e analógicas, proporcionando momentos de diversão e interação social.

## Descrição

Em um mundo dominado pelo digital, muitas pessoas buscam experiências fora das telas. Os jogos de tabuleiro oferecem essa oportunidade, mas seus preços elevados podem ser um obstáculo. Para contornar isso, locadoras de jogos de tabuleiro estão se tornando populares, e o Boardcamp foi criado para auxiliar na gestão dessas locadoras.

## Funcionalidades

- **Gerenciamento de Jogos**: Permite adicionar novos jogos ao catálogo, visualizar detalhes dos jogos existentes e remover jogos quando necessário.
- **Gerenciamento de Clientes**: Possibilita o cadastro de novos clientes, atualização de informações e exclusão de registros.
- **Gerenciamento de Aluguéis**: Facilita o registro de novos aluguéis, visualização de aluguéis em andamento, atualização de status e cancelamento de aluguéis.

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Joi (validação)
- Dotenv (variáveis de ambiente)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/FredBettecher/Boardcamp.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd Boardcamp
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente:
  Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
    ```env
    DATABASE_URL=postgres://usuario:senha@localhost:5432/boardcamp
    ```

5. Execute as migrações do banco de dados:
    ```bash
    npm run migrate
    ```

6. Inicie o servidor:
    ```bash
    npm start
    ```

## Uso
Após a instalação e configuração, o servidor estará disponível em http://localhost:3000. Utilize ferramentas como Postman ou Insomnia para interagir com as rotas da API e gerenciar jogos, clientes e aluguéis.
