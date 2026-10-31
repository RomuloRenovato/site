// Mostra os elementos .revela quando entram na tela.
const alvos = document.querySelectorAll('.revela');
if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
  alvos.forEach((el) => el.classList.add('visto'));
} else {
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visto');
          observador.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  alvos.forEach((el) => observador.observe(el));
}
