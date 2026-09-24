/* ===== hamburger-btn MENU ===== */
const hamburgerBtn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('nav');

if (hamburgerBtn && nav) {
  hamburgerBtn.addEventListener('click', function () {
    nav.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // close on link click
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); });
  });
}

// ===== ACTIVE NAV LINK =====
const links = document.querySelectorAll('nav a');
links.forEach(function (link) {
  if (link.href === window.location.href) link.classList.add('active');
});

// ===== INICIALIZAÇÕES =====
initContactForm();


/* -------- CONTACT FORM -------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const msg = document.getElementById('formMsg');

    // basic validation
    const nome    = form.querySelector('#nome').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const mensagem = form.querySelector('#mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      msg.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      msg.className = 'form-msg error';
      return;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      msg.textContent = 'Informe um endereço de e-mail válido.';
      msg.className = 'form-msg error';
      return;
    }

    // simulate send
    msg.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
    msg.className = 'form-msg success';
    form.reset();

    setTimeout(function () { msg.className = 'form-msg'; }, 5000);
  });
}
