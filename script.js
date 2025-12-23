function goToContact() {
  const contact = document.getElementById("contact");
  if (!contact) return;

  contact.scrollIntoView({ behavior: "smooth" });

  const details = contact.querySelector(".contact-details");
  if (!details) return;

  details.classList.add("highlight");

  setTimeout(() => {
    details.classList.remove("highlight");
  }, 1000);
}