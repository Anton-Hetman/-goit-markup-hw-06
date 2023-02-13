const selector = document.querySelector('.modal-feedback-input [type="phone"]');

console.log(selector);

const im = new Inputmask('+38(099)-999-99-99');
im.mask(selector);
