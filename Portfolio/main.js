document.addEventListener('DOMContentLoaded', () => {
  // Splash screen
  const splashScreen = document.querySelector('.splash-screen');
  const skipButton = document.querySelector('.splash-skip-btn');

  // 3 soniyadan keyin avtomatik yashirish
  setTimeout(() => {
    splashScreen.classList.add('hidden');
  }, 3000);

  // "Skip" tugmasi orqali yashirish
  skipButton.addEventListener('click', () => {
    splashScreen.classList.add('hidden');
  });

  // AOS kutubxonasini ishga tushurish
  AOS.init();

  // Contact Form Submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'SENDING...';
    submitBtn.disabled = true;

    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});