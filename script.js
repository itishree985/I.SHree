function shopCollection() {
  alert("Redirecting to the full Summer Collection...");
  // You can add `window.location.href = "your-collection-page.html";` if needed
}

function subscribeNewsletter(event) {
  event.preventDefault();
  const email = document.querySelector('.newsletter-form input[type="email"]').value;
  if (email) {
    alert(`Thanks for subscribing, ${email}!`);
    // Optionally: send to server using fetch()
  }
}
