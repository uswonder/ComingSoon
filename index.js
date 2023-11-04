// function sendEmail(e){
//
//   e.preventDefault();
//   console.log("hello");
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//   };
//
//    const serviceId = "service_uds3mxe";
//    const templateId = "template_qtem33o";
//    console.log(document.getElementById("name").value);
//
//    emailjs.sendForm(serviceId, templateId, '#myForm')
//    .then((res) =>{
//      console.log("successfully");
//      console.log(res);
//      document.getElementById("name").value =  "";
//      document.getElementById("email").value =  "";
//      console.log(res);
//      alert("Your message sent successfully");
//    }
//    .catch((err) => console.log(err));
//)
// }

document.getElementById("myForm")
.addEventListener("submit", function(event) {
  event.preventDefault();

  const serviceId = "service_uds3mxe";
  const templateId = "template_qtem33o";

  // send the email here
  emailjs.sendForm(serviceId, templateId, this).then(
    (response) => {
      document.getElementById("name").value =  "";
      document.getElementById("email").value =  "";
      console.log("SUCCESS!", response.status, response.text);
      alert("SUCCESS!");
    },
    (error)=> {
              console.log("FAILED...", error);
              alert("FAILED...", error);
            }
  );
});
