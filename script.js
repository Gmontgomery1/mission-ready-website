document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector("#navlinks");
  const year = document.querySelector("#year");
  const quoteForm = document.querySelector("#quoteForm");
  const formStatus = document.querySelector("#formStatus");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!quoteForm.reportValidity()) {
        return;
      }

      const data = new FormData(quoteForm);
      const subject = encodeURIComponent(
        `Quote Request — ${data.get("service") || "Courier Service"}`
      );

      const body = encodeURIComponent(
`Mission Ready Supply Transport Quote Request

Name: ${data.get("name") || ""}
Business/Organization: ${data.get("business") || ""}
Phone: ${data.get("phone") || ""}
Email: ${data.get("email") || ""}
Service: ${data.get("service") || ""}
Pickup Location: ${data.get("pickup") || ""}
Delivery Location: ${data.get("delivery") || ""}

Additional Details:
${data.get("details") || ""}`
      );

      if (formStatus) {
        formStatus.textContent = "Opening your email application…";
      }

      window.location.href =
        `mailto:montgomeryg@missionreadysupplytransport.com?subject=${subject}&body=${body}`;
    });
  }
});
