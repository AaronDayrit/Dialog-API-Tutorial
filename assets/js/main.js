"use strict";

/*-------------------------------------
  Simple Dialog API Methods
---------------------------------------*/

const dialog = document.querySelector('dialog')
const create = document.querySelector('button');

window.onload = () => {
  // Method to --> show modal <--
  dialog.showModal();
};

create.addEventListener('click', () => {
  // Method to --> close modal <--
  dialog.close();
})


