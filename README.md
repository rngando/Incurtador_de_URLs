# Encurtador de URLs

## Descrição

Este é um projeto de estudo para um sistema de encurtador de URLs. O objetivo é aprender a construir uma aplicação que recebe URLs longas, gera links curtos únicos e realiza o redirecionamento quando o usuário acessa o link reduzido.

O sistema é dividido em duas partes principais:
- `BackEnd/`: API RESTful e lógica do encurtador
- `FrontEnd/`: interface de usuário (ainda não implementada)

## Funcionalidades

- Criar URLs encurtadas a partir de URLs longas
- Redirecionar automaticamente para a URL original
- Validar URLs de entrada (básico)
- Listar todas as URLs encurtadas
- Persistência de dados com SQLite
- Estrutura modular com camadas de rota, modelo e utilitários

## Estrutura do Projeto

- `api/router.js` - Rotas da aplicação e endpoints da API
- `models/db.js` - Definição do modelo de dados e conexão com o banco
- `schemas/` - Validação e serialização de dados (não implementado)
- `utils/` - Funções utilitárias (não implementado)
- `FrontEnd/` - Interface de usuário (vazia por enquanto)

## Tecnologias Utilizadas

- **Backend**: Node.js + Express.js
- **Banco de Dados**: SQLite com Sequelize ORM
- **Frontend**: Ainda não desenvolvido

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/rngando/Incurtador_de_URLs
   cd Incurtador_de_URLs
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor:
   ```bash
   node BackEnd/index.js
   ```
   O servidor estará rodando em `http://localhost:5000`.

## API Endpoints

### GET /
Retorna uma mensagem de boas-vindas.

**Resposta**: `"Seja muito bem-vindo..."`

### POST /shorten
Cria uma URL encurtada.

**Corpo da Requisição**:
```json
{
  "url": "https://exemplo.com/url-longa"
}
```

**Resposta de Sucesso** (201):
```json
{
  "url_short": "abc123"
}
```

**Resposta de Erro** (400):
```json
{
  "error": "Mensagem de erro"
}
```

### GET /links
Lista todas as URLs encurtadas.

**Resposta**:
```json
[
  {
    "url_long": "https://exemplo.com/url1",
    "url_short": "abc123"
  },
  {
    "url_long": "https://exemplo.com/url2",
    "url_short": "def456"
  }
]
```

Ou, se vazio:
```json
{
  "message": "Nenhuma URL encurtada encontrada."
}
```

### GET /:code
Redireciona para a URL original correspondente ao código curto.

**Parâmetros**: `code` (string) - O código curto da URL.

**Resposta de Sucesso**: Redirecionamento HTTP para a URL longa.

**Resposta de Erro** (404):
```json
{
  "error": "URL não encontrada"
}
```

## Como Usar

1. Inicie o servidor conforme as instruções acima.
2. Use uma ferramenta como Postman ou curl para testar os endpoints.
3. Exemplo com curl para encurtar uma URL:
   ```bash
   curl -X POST http://localhost:5000/shorten -H "Content-Type: application/json" -d '{"url": "https://www.google.com"}'
   ```
4. Acesse `http://localhost:5000/abc123` (substitua pelo código retornado) para testar o redirecionamento.

## Aprendizados Esperados

- Organização de projeto em camadas (rotas, modelos, serviços)
- Criação de API RESTful com Express
- Validação de dados e tratamento de erros
- Integração com banco de dados usando Sequelize
- Redirecionamento de URLs
- Preparação para integração frontend/backend

## Próximos Passos

- Implementar validação robusta de URLs
- Adicionar autenticação e controle de acesso
- Registrar estatísticas de cliques por URL
- Criar interface frontend 
- Adicionar testes automatizados (Jest, Mocha)
- Melhorar a geração de códigos curtos (evitar colisões)
- Implementar cache para melhor performance

## Contribuição

Este projeto é para fins de estudo. Sinta-se à vontade para:
- Experimentar melhorias no código
- Refatorar a estrutura
- Adicionar funcionalidades
- Criar issues ou pull requests

## Licença

Este projeto é para estudo e não possui licença específica. Use como referência e foque na melhoria contínua.
