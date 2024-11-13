// Obtenha o elemento do header
const header = document.querySelector('header');

// Defina a quantidade de rolagem que o usuário deve alcançar (100px no exemplo)
const scrollThreshold = 20;

// Adicione um ouvinte de evento para monitorar a rolagem
window.addEventListener('scroll', function() {
  if (window.scrollY > scrollThreshold) {
    // Adiciona a classe 'HeaderFixo' se o usuário rolar mais de 100px
    header.classList.add('HeaderFixo');
  } else {
    // Remove a classe 'HeaderFixo' caso contrário
    header.classList.remove('HeaderFixo');
  }
});