# 📚 Memórias UCPEL

Sistema Web desenvolvido como parte do Projeto Integrador V - B, com o objetivo de registrar, visualizar e preservar memórias institucionais da Universidade Católica de Pelotas (UCPel). Este sistema é composto por uma área de login e uma área interna protegida por autenticação simples, simulando acesso de usuários.

---

## 🗂 Estrutura do Projeto

Projeto PI V-B/
│
├── Login/
│ ├── Tela login.html
│ ├── login.js
│ ├── styles.css
│ └── logo.png
│
└── Home/
├── home.html
└── home.css

---

## 🔑 Funcionalidades

- Página de login com verificação local de usuário/senha.
- Interface moderna com responsividade.
- Redirecionamento para área interna com saudação ao usuário logado.
- Simulação de sessão com `sessionStorage`.

---

## 🧪 Usuários de Teste

Você pode usar os seguintes usuários para login durante os testes:

| Usuário | Senha   |
|---------|---------|
| admin   | 1234    |
| ucpel   | senha   |

---

## 🚀 Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/memorias-ucpel.git