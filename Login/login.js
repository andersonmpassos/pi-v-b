// Simulação de Usuários válidos (login local temporário)
const users = [
    { username: "admin", password: "1234" },
    { username: "ucpel", password: "senha" }
];

// Função de validação de login
function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    // Procura usuário na lista
    const userFound = users.find(user => user.username === username && user.password === password);

    if (userFound) {
        alert("Login realizado com sucesso!");
        // Salva usuário na sessão
        sessionStorage.setItem("user", username);
        // Redireciona para a Home
        window.location.href = "../home/home.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
}