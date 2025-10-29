// Массив цветов для фона
const colors = ['#f0f0f0', '#ffeaa7', '#74b9ff', '#00b894', '#fd79a8', '#6c5ce7'];

const button = document.getElementById('colorBtn');
const message = document.getElementById('message');
let clickCount = 0;

button.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  clickCount++;
  message.textContent = `Цвет изменён ${clickCount} раз(а)!`;
});
