// List of background GIFs to rotate on each page load
const gifBackgrounds = [
  'https://media1.tenor.com/m/XqxmWb5zfjUAAAAd/meu.gif',
    'https://media1.tenor.com/m/naKhDvCQUrgAAAAd/monkey-stare.gif',
    'https://media1.tenor.com/m/wngK7umN-fAAAAAd/wrizz-monkey-monkey.gif',
    'https://media1.tenor.com/m/hvh0ucb7o-4AAAAd/sonic-devil.gif',
    'https://media1.tenor.com/m/z16iGt5S6aoAAAAC/cat-stare-catstare.gif'
];

// Choose a random GIF on page load
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

  // Update the icon (Lucide)
  icon.setAttribute("data-lucide", isPassword ? "eye-off" : "eye");
  lucide.createIcons();
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Load Lucide icons
  lucide.createIcons();
});
