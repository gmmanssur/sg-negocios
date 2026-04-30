// navbar scroll
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // reveal on scroll
  const reveals = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // whatsapp form
  function sendWhatsapp() {
    const name = document.querySelector('input[placeholder="Seu nome completo"]').value;
    const org  = document.querySelector('input[placeholder="Ex: Prefeitura de São Paulo"]').value;
    const msg  = document.querySelector('textarea').value;
    const text = `Olá! Me chamo *${name || '...'}*, represento *${org || '...'}* e gostaria de saber mais sobre as soluções da S&G Negócios.\n\n${msg}`;
    window.open(`https://wa.me/5511957702886?text=${encodeURIComponent(text)}`, '_blank');
  }

  // mobile menu toggle
  function toggleMenu() {
    const links = document.querySelector('.nav-links');
    const cta   = document.querySelector('.nav-cta');
    if (!links) return;
    const open = links.style.display === 'flex';
    links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:70px;left:0;right:0;background:rgba(11,24,40,.98);padding:32px;gap:24px;border-bottom:1px solid var(--line);z-index:99;';
    if (cta) cta.style.display = open ? '' : 'none';
  }