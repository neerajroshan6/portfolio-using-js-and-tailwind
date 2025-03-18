document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form")
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = new FormData(contactForm)
      console.log("Form submitted with the following data:")
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`)
      }
  

      contactForm.reset()
  

      alert("Thank you for your message! I'll get back to you soon.")
    })
  })
  
  