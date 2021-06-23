'use strict';

// Pre Define Variables
const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal-1');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Show Modal Fucntion
const showModalFunction = function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Hide Modal Function
const hideModalFunction = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModal.addEventListener('click', showModalFunction);
closeModal.addEventListener('click', hideModalFunction);
overlay.addEventListener('click', hideModalFunction);

// Hide Modal through keybord
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    hideModalFunction();
  }
});

// e --> Random key, it collects pressed key information.
// e.key === 'Escape' --> Pressed key will equal to escape key.
// !modal.classList.contains('hidden') --> This condition only run when hidden class is not available.
// hideModalFunction() --> We call a pre define function that hide our modal.
