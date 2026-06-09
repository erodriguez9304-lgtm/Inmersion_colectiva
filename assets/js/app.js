// Galería de fotos del consultorio / espacio clínico
const fotos = [
  'consultorio-1.jpg', 'consultorio-2.jpg', 'consultorio-3.jpg', 'consultorio-4.jpg'
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Renderizar galería de fotos de forma dinámica en el grid
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    galleryGrid.innerHTML = fotos.map((foto, index) => `
      <img src="assets/img/${foto}" alt="Espacio Clínico Inmersión Colectiva" loading="lazy" onclick="openLightbox(${index})">
    `).join('');
  }
});

// Funciones lógicas del Lightbox
function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');
  
  img.src = `assets/img/${fotos[currentIndex]}`;
  counter.textContent = `${currentIndex + 1} / ${fotos.length}`;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = fotos.length - 1;
  if (currentIndex >= fotos.length) currentIndex = 0;
  
  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');
  img.src = `assets/img/${fotos[currentIndex]}`;
  counter.textContent = `${currentIndex + 1} / ${fotos.length}`;
}

// Navegación rápida con teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') changeImage(-1);
  if (e.key === 'ArrowRight') changeImage(1);
});