// Exemplo de validação simples para o formulário de login
document.getElementById('login-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (!username || !password) {
      alert('Por favor, preencha todos os campos.');
    } else {
      alert(`Bem-vindo, ${username}!`);
    }
  });
  
  // Exemplo de validação para o formulário de esqueci a senha
  document.getElementById('forgot-password-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário
  
    const email = document.getElementById('email').value;
  
    if (!email) {
      alert('Por favor, insira seu e-mail.');
    } else {
      alert('Um link de recuperação de senha foi enviado para ' + email);
    }
  });
  