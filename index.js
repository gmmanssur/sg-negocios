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
const toast = document.getElementById('toast');

wppButon.addEventListener('click', () => {
  const nameInput = document.getElementById('name');
  const orgInput  = document.getElementById('empresa');
  const msgInput  = document.getElementById('description');

  const name = nameInput.value.trim();
  const org  = orgInput.value.trim();
  const msg  = msgInput.value.trim();

  [nameInput, orgInput, msgInput].forEach(field => {
    field.classList.remove('field-required');
  });

  if (!name || !org || !msg) {
    if (!name) nameInput.classList.add('field-required');
    if (!org)  orgInput.classList.add('field-required');
    if (!msg)  msgInput.classList.add('field-required');

    showToast(
      'Preencha todos os campos antes de continuar.'
    );

    return;
  }

  // mensagem whatsapp
  const text =
`Olá! Me chamo ${name}, represento ${org} e gostaria de saber mais sobre as soluções da S&G Negócios.

${msg}`;

  window.open(
    `https://wa.me/5511957702886?text=${encodeURIComponent(text)}`,
    '_blank'
  );
});

function showToast(message) {
  toast.querySelector('span').textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}