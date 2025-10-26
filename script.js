const openButton = document.getElementById('open-modal');
const closeButton = document.getElementById('close-modal');
const modalOverlay = document.getElementById('modal-overlay');

openButton.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
});

const closeModal = () => {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
};

closeButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});
