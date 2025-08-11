document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Charger le thème depuis le localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Gestion du changement de thème
  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    html.setAttribute("data-theme", newTheme);
    updateThemeIcon(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Mise à jour de l'icône du thème
  function updateThemeIcon(theme) {
    themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
  }

  // Effet machine à écrire
  function typeWriterEffect(element, text, speed = 80) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Appliquer l'effet machine à écrire
  const title = document.getElementById("typewriter");
  typeWriterEffect(title, "Bienvenue sur mon portfolio", 60);

  // Menu responsive burger
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
  });

  // Fermer le menu mobile lors du clic sur un lien
  const navLinksItems = navLinks.querySelectorAll("a");
  navLinksItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-active");
    });
  });

  // Apparition au scroll des cartes projets
  const cards = document.querySelectorAll('.project-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.2});

  cards.forEach(card => observer.observe(card));

  // Animation au scroll pour les sections
  const sections = document.querySelectorAll('.section');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {threshold: 0.1});

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
  });

  // Animation des barres de compétences
  const skillBars = document.querySelectorAll('.skill-progress');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const width = progressBar.style.width;
        progressBar.style.width = '0%';
        
        setTimeout(() => {
          progressBar.style.width = width;
        }, 200);
        
        skillObserver.unobserve(progressBar);
      }
    });
  }, {threshold: 0.5});

  skillBars.forEach(bar => skillObserver.observe(bar));

  // Animation des cartes d'expérience
  const experienceCards = document.querySelectorAll('.experience-card');
  const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        experienceObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 0.2});

  experienceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    experienceObserver.observe(card);
  });

  // Animation des éléments de la timeline
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        timelineObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 0.3});

  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
  });

  // Animation des éléments de contact
  const contactItems = document.querySelectorAll('.contact-item');
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        contactObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 0.2});

  contactItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    contactObserver.observe(item);
  });

  // Smooth scroll pour les liens internes
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Lazy loading pour les images
  const images = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src; // Force le chargement
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});
  