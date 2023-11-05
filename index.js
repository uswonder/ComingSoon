
document.getElementById("myForm")
.addEventListener("submit", function(event) {
  event.preventDefault();

  const serviceId = "service_uds3mxe";
  const templateId = "template_qtem33o";
  const errorMessage = document.getElementById("error-message");
  const emailInput = document.getElementById("email");

  const email = emailInput.value;

  if (isValidEmail(email)) {
  // send the email here
  emailjs.sendForm(serviceId, templateId, this).then(
    (response) => {
      swal("Thank You!", "You're excited to notify you about the launch!", "success");

      document.getElementById("name").value =  "";
      document.getElementById("email").value =  "";


      errorMessage.textContent = '';
      console.log("SUCCESS!", response.status, response.text);
      console.log(email);
      // alert("SUCCESS! Thank you for subscribing!");

    },
    (error)=> {
              console.log("FAILED...", error);
              swal("Oops!", "Something went wrong.", "error");

            }
  );
  } else{

      errorMessage.textContent = 'Invalid email format. Please enter a valid email.';
  }

  function isValidEmail(email) {
    // Regular expression for email validation
    // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
});
