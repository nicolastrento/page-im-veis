
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os links que possuem o atributo href começando com #
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Previne o comportamento padrão

      const targetId = this.getAttribute("href").substring(1); // Obtém o ID do destino
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Realiza a rolagem suave até o elemento
        targetElement.scrollIntoView({
          behavior: "smooth", // Suavidade na rolagem
          block: "start"      // Alinha ao início do elemento
        });
      }
    });
  });
});
