// JavaScript modular para automações e rastreamento do portfólio
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Webhook / Notificação de clique no LinkedIn via Web3Forms
  const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');
  linkedinLinks.forEach(link => {
    link.addEventListener('click', () => {
      const formData = new FormData();
      formData.append('access_key', '1e2b1e09-5166-4645-8301-9ae48cc25d3a');
      formData.append('subject', '🚀 Alerta: Alguém clicou no seu LinkedIn pelo Portfólio!');
      formData.append('from_name', 'Portfólio Eddie Victor');
      formData.append('message', `Um visitante acabou de clicar no seu botão do LinkedIn no portfólio às ${new Date().toLocaleString('pt-BR')} (URL: ${window.location.href}).`);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      }).catch(err => {
        console.error('Erro ao disparar webhook:', err);
      });
    });
  });
});