(function () {
  var checkoutButtons = document.querySelectorAll(".js-checkout");
  var sticky = document.querySelector("[data-sticky-cta]");

  checkoutButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (typeof window.fbq === "function") {
        window.fbq("track", "InitiateCheckout", {
          content_name: "Codigo de Fechamento",
          value: 19.9,
          currency: "BRL"
        });
      }
    });
  });

  if (!sticky) {
    return;
  }

  function updateStickyCta() {
    var shouldShow = window.scrollY > Math.max(520, window.innerHeight * 0.55);
    sticky.classList.toggle("is-visible", shouldShow);
  }

  updateStickyCta();
  window.addEventListener("scroll", updateStickyCta, { passive: true });
})();
