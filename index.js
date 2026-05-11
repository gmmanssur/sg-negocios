// navbar scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// menu hamburguer
const toggle = document.getElementById('menu-toggle');
const links  = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  });
});

// whatsapp
const wppButon = document.getElementById('wpp-button');

wppButon.addEventListener('click', () => {
  alert("huifgerjie");
  const name = document.getElementById('name').value;
  const org  = document.getElementById('empresa').value;
  const msg  = document.getElementById('description').value;
  const text = `Olá! Me chamo ${name}, represento ${org} e gostaria de saber mais sobre as soluções da S&G Negócios.\n\n${msg}`;
  window.open(`https://wa.me/5511957702886?text=${encodeURIComponent(text)}`, '_blank');
  alert("huifgerjie");
});