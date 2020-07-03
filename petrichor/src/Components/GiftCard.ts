import QRCode from 'qrcode';

const selectors = {
  qrCodeCanvas: '[data-gift-card-qr]',
  printButton: '[data-gift-card-print]',
  giftCardCode: '[data-gift-card-digits]',
};

//QR Code as POS
document.querySelectorAll(selectors.printButton).forEach((element) => {
  QRCode.toCanvas(element, element.dataset.identifier);
});

document.querySelectorAll(selectors.printButton).forEach((element) =>{
  element.addEventListener('click', () => {
    window.print();
  });
});

//Auto-select card code
document.querySelectorAll(selectors.giftCardCode).forEach((element) => {
  element.addEventListener('click', (event) => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(event.target);
    selection.removeAllRanges();
    selection.addRange(range);
  });
});