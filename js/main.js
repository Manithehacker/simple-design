
function validateForm() {
   
    // Get the values from the form
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var company = document.getElementById("company").value;
    var country = document.getElementById("country").value;
    var feedback = document.getElementById("feedback").value;
    // console.log(country)
    // console.log(company)
    // console.log(name)
    // console.log(text)
    // console.log(number)
    // console.log(email)
    // Check if the name field is empty
    if (name != "" || email != "" || number != "" || company != "" || country != "" || feedback != "")  {
     
      alert("form submitted")
     
      
    }else{
        alert("Name must be filled out") 
    }
}
    
//     // Form validation pass
//    console.log("success")
//     return true;
//   }
  
//   function validateEmail(email) {
//     // Regular expression pattern for email validation
//     var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return pattern.test(email);
//   } 