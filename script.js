'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const button = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) hideModal();
  }
});

overlay.addEventListener('click', hideModal);

button.forEach(btn => {
  btn.addEventListener('click', showModal);
});

closeBtn.addEventListener('click', hideModal);
