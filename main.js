// main.js

// List of random background GIF URLs
const gifBackgrounds = [
  'https://media1.tenor.com/m/XqxmWb5zfjUAAAAd/meu.gif',
    'https://media1.tenor.com/m/naKhDvCQUrgAAAAd/monkey-stare.gif',
    'https://media1.tenor.com/m/wngK7umN-fAAAAAd/wrizz-monkey-monkey.gif',
    'https://media1.tenor.com/m/hvh0ucb7o-4AAAAd/sonic-devil.gif',
    'https://media1.tenor.com/m/z16iGt5S6aoAAAAC/cat-stare-catstare.gif'
];

// Set a random GIF as background
const randomGif = gifBackgrounds[Math.floor(Math.random() * gifBackgrounds.length)];
document.body.style.backgroundImage = `url('${randomGif}')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';

// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const icon = document.getElementById("eyeIcon");
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  icon.setAttribute("data-lucide", isPassword ? "eye-off" : "eye");
  lucide.createIcons();
}

// Expose togglePassword to global scope
window.togglePassword = togglePassword;

// Initialize icons when the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});
