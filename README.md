# UniOrganiza

Aplicação web para ajudar estudantes universitários a organizar prazos de atividades acadêmicas de múltiplas disciplinas em um único painel.

Projeto desenvolvido como parte do Programa de Extensão UFMS Digital (95DX7.200525), na disciplina de Projeto Integrador de Tecnologia da Informação I.

## Sobre o projeto

Estudantes que cursam várias disciplinas ao mesmo tempo costumam perder o controle de prazos de trabalhos e avaliações, espalhados entre murais, grupos de mensagens e anotações pessoais. O UniOrganiza resolve isso reunindo disciplinas e atividades em um painel único, organizado por prazo.

Nesta primeira versão, os dados ficam apenas na memória do navegador (sem backend), servindo como prova de conceito da interface e da organização do projeto.

## Tecnologias utilizadas

- **React** (via Vite) para organização da interface em componentes
- **HTML5** semântico (header, nav, main, section, article)
- **CSS3** com layout responsivo (Flexbox, Grid e media queries)
- **JavaScript (ES6+)** para a lógica de estado da aplicação

## Estrutura do projeto

```
uniorganiza/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── seed.js
│   └── components/
│       ├── Header.jsx
│       ├── Sidebar.jsx
│       ├── CartaoAtividade.jsx
│       ├── FormularioDisciplina.jsx
│       └── FormularioAtividade.jsx
└── package.json
```

## Como instalar e rodar o projeto

Pré-requisitos: Node.js 18 ou superior.

```bash
# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev

# gerar a versão de produção
npm run build

# pré-visualizar a versão de produção
npm run preview
```

A aplicação abre por padrão em `http://localhost:5173`.

## Funcionalidades desta versão

- Cadastro de disciplinas
- Cadastro de atividades vinculadas a uma disciplina, com prazo
- Painel com as atividades ordenadas por prazo, destacando as mais urgentes
- Marcar atividade como concluída
- Layout responsivo: menu lateral vira menu retrátil em telas menores

## Melhorias futuras

- Persistência dos dados em um backend com banco de dados
- Autenticação de usuários
- Notificações de prazos próximos
- Versão mobile complementar
