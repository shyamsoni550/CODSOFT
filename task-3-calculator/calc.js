

// Function to handle operator button clicks
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculator button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
          display.textContent += ` ${button.value} `;
        } else if (button.classList.contains('calculate')) {
          try {
            display.textContent = eval(display.textContent);
          } catch (error) {
            display.textContent = 'Error';
          }
        } else if (button.classList.contains('clear')) {
          display.textContent = '';
        } else if (button.classList.contains('backspace')) {
          display.textContent = display.textContent.slice(0, -1);
        } else {
          display.textContent += button.value;
        }
      });
    });
  });
  