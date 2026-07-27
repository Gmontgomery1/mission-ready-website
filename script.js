document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector("#navlinks");
  const year = document.querySelector("#year");
  const pickupForm = document.querySelector("#pickupForm");
  const pickupStatus = document.querySelector("#pickupStatus");
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

  if (pickupForm) {
    const pickupDate = pickupForm.querySelector('input[name="pickupDate"]');
    if (pickupDate) {
      pickupDate.min = new Date().toISOString().split("T")[0];
    }

    pickupForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!pickupForm.reportValidity()) {
        return;
      }

      const data = new FormData(pickupForm);
      const subject = encodeURIComponent(
        `PENDING PICKUP REQUEST — ${data.get("serviceType") || "Courier Service"} — ${data.get("pickupDate") || "Date Needed"}`
      );

      const body = encodeURIComponent(
`MISSION READY SUPPLY TRANSPORT
PICKUP REQUEST — PENDING REVIEW

CUSTOMER INFORMATION
Contact Name: ${data.get("contactName") || ""}
Company/Organization: ${data.get("company") || ""}
Email: ${data.get("email") || ""}
Phone: ${data.get("phone") || ""}

PICKUP AND DELIVERY
Pickup Address: ${data.get("pickupAddress") || ""}
Delivery Address: ${data.get("deliveryAddress") || ""}
Requested Pickup Date: ${data.get("pickupDate") || ""}
Requested Pickup Time: ${data.get("pickupTime") || ""}
Delivery Deadline/Preferred Time: ${data.get("deliveryDeadline") || ""}

SERVICE AND PACKAGE DETAILS
Service Type: ${data.get("serviceType") || ""}
Number of Packages: ${data.get("packageCount") || ""}
Estimated Total Weight: ${data.get("estimatedWeight") || ""}
Temperature Controlled: ${data.get("temperatureControlled") || ""}

Package Description:
${data.get("packageDescription") || ""}

Special Instructions:
${data.get("specialInstructions") || ""}

STATUS: PENDING REVIEW
This request is not confirmed until reviewed and approved by Mission Ready Supply Transport.

QUICKBOOKS NEXT STEP
After review, create and send a QuickBooks estimate or invoice using the customer and service details above.`
      );

      if (pickupStatus) {
        pickupStatus.textContent = "Opening your email application with the pickup request…";
      }

      window.location.href =
        `mailto:montgomeryg@missionreadysupplytransport.com?subject=${subject}&body=${body}`;
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
