// main.js

// List of random background GIF URLs
const gifBackgrounds = [
  'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
  'https://media.giphy.com/media/l0HlHJGHe6y4dM6N2/giphy.gif',
  'https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif'
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
