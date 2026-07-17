const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".primary-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const quoteForm = document.getElementById("quote-form");
const message = document.getElementById("form-message");

// Replace this with your real business email before publishing.
const BUSINESS_EMAIL = "quotes@missionreadytransport.com";

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(quoteForm);
  const subject = encodeURIComponent(
    `Website quote request from ${data.get("name")}`
  );

  const body = encodeURIComponent(
`Name: ${data.get("name")}
Business: ${data.get("business") || "Not provided"}
Phone: ${data.get("phone")}
Email: ${data.get("email")}
Delivery type: ${data.get("deliveryType")}
Pickup: ${data.get("pickup")}
Delivery location: ${data.get("dropoff")}

Delivery details:
${data.get("details") || "No additional details provided"}`
  );

  message.textContent = "Opening your email app with the quote request...";
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
