document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const button = document.getElementById('toggle-button');
    const themeToggle = document.getElementById('theme-toggle');
  
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        body.classList.replace('light-mode', 'dark-mode');
        button.textContent = '🌙';
      } else {
        body.classList.replace('dark-mode', 'light-mode');
        button.textContent = '☀️';
      }
    });
  });

  const texts = ["Developer", "Programmer", "Freelancer"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let isDeleting = false;
  
  (function type() {
      if (count === texts.length) {
          count = 0;
      }
  
      currentText = texts[count];
  
      if (isDeleting) {
          index--;
      } else {
          index++;
      }
  
      document.getElementById('animated-text').textContent = currentText.slice(0, index);
  
      if (!isDeleting && index === currentText.length) {
          // Pause at the end of the word
          setTimeout(() => {
              isDeleting = true;
              type();
          }, 1300);  // Pause before starting to delete
      } else if (isDeleting && index === 0) {
          isDeleting = false;
          count++;
          setTimeout(type, 0);  // Pause before typing the next word
      } else {
          setTimeout(type, isDeleting ? 100 : 200);  // Adjust typing/backspacing speed here
      }
  })();
  