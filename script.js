// Profile image click interaction
document.getElementById('profileImage').addEventListener('click', function () {
  this.style.transform = 'scale(1.2) rotate(360deg)';
  setTimeout(() => {
    this.style.transform = 'scale(1) rotate(0deg)';
  }, 500);
});

// Skill progress animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-progress');
      skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 300);
      });
    }
  });
}, observerOptions);

document.querySelectorAll('.skills-container').forEach((container) => {
  observer.observe(container);
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
