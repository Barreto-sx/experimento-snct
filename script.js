// Interações em JavaScript puro, sem bibliotecas.
const menuToggle = document.getElementById('menu-toggle');
const mobileNavigation = document.getElementById('mobile-navigation');
function setMenu(open) {
  if (!menuToggle || !mobileNavigation) return;
  mobileNavigation.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  const icon = menuToggle.querySelector('svg');
  if (icon) icon.innerHTML = open
    ? '<path d="M18 6 6 18M6 6l12 12"></path>'
    : '<path d="M4 6h16M4 12h16M4 18h16"></path>';
}
menuToggle?.addEventListener('click', () => setMenu(mobileNavigation?.hidden === true));
mobileNavigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileNavigation && !mobileNavigation.hidden) {
    setMenu(false);
    menuToggle?.focus();
  }
});
const slider = document.getElementById('ph-slider');
const phNumber = document.querySelector('.ph-number');
const phState = document.querySelector('.ph-state');
const phExplanation = document.querySelector('.ph-explanation');
function updatePh() {
  if (!slider || !phNumber || !phState || !phExplanation) return;
  const ph = Number(slider.value);
  const state = ph < 7 ? 'ácido' : ph > 7 ? 'básico' : 'neutro';
  phNumber.textContent = ph.toFixed(1);
  phState.textContent = `Meio ${state}`;
  slider.setAttribute('aria-valuetext', `${ph.toFixed(1)}, meio ${state}`);
  phExplanation.textContent = ph < 7
    ? 'pH abaixo de 7 indica meio ácido. Em contato frequente, a acidez pode contribuir para a perda de minerais dos dentes.'
    : ph > 7
      ? 'pH acima de 7 indica meio básico. Variações de pH podem interferir na atividade dos microrganismos da boca.'
      : 'Em geral, pH 7 é neutro. A saliva ajuda a proteger os dentes e a manter o equilíbrio químico da boca.';
}
slider?.addEventListener('input', updatePh);
updatePh();
