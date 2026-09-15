/**
 * Minimalist Personal Portfolio - Ganesh
 * Interactive micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initPhotoParallax();
});

function initPhotoParallax() {
  const card = document.querySelector('.picture-card');
  if (!card) return;

  // Subtle 3D tilt interaction on hover
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -(y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
}
