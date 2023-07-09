(() => {
  const RefsContact = {
    openModalBtns: document.querySelectorAll('[data-modal-menu-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-menu-close]'),
    modal: document.querySelector('[data-menu-buy]'),
  };
  for (let i = 0; i < RefsContact.openModalBtns.length; i++) {
    RefsContact.openModalBtns[i].addEventListener('click', toggleModal);
  }
  for (let i = 0; i < RefsContact.closeModalBtn.length; i++) {
    RefsContact.closeModalBtn[i].addEventListener('click', toggleModal);
  }
  function toggleModal() {
    RefsContact.modal.classList.toggle('is-hidden');
  }
})();
