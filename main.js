/* 
  Healthy Life Guide - Simple Student JS
  Student Project: Web Development I
*/

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  //   Contact Form Validation
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  // Only run if the form exists on the page
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Prevent the page from refreshing (Standard requirement)
      event.preventDefault();

      // Get form values
      const name = document.getElementById("full_name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Simple IF condition for validation
      if (name === "" || email === "" || message === "") {
        // Show error message
        formMessage.textContent =
          "Error: Please fill in all required fields (Name, Email, and Message).";
        formMessage.className = "error";
      } else {
        // Show success message
        formMessage.textContent =
          "Success! Thank you for your feedback, " +
          name +
          ". We will get back to you soon.";
        formMessage.className = "success";

        // Clear the form fields
        contactForm.reset();
      }
    });
  }

  //   Simple Scroll Effect (Bonus for interactivity)
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
      header.style.boxShadow = "none";
    }
  });

  console.log("Healthy Life Guide script loaded successfully!");
});
