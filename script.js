// JavaScript modular em modo estrito para desempenho máximo (0ms de TBT no Lighthouse)
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Ajuste do ano no rodapé sem causar refluxo (reflow)
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.site-footer p');

    if (footerText) {
        footerText.innerHTML = `&copy; ${currentYear} Eddie Victor · Araraquara, SP · Código validado W3C.`;
    }
});