function checkDate() {
    var birthday = document.getElementById("birthday").value;
    var selectedDate = new Date(birthday);
    var now = new Date();
    if (selectedDate > now) {
        alert("Date must be in the past");
    }
}

function validate(){
    // validate required general fields
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var birthday = document.getElementById("birthday").value;
    //validate required address fields
    var address1 = document.getElementById("address1").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zipcode = document.getElementById("zipcode").value;

    // error message
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";

    // validate US phone number 
    var phoneNumberPattern = /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/gm;
    
    var text;
    if(firstName.length == 0){
      document.getElementById("firstName").style.borderColor="red";
      text = "Please Enter your first name";
      error_message.innerHTML = text;
      return false;
    }
    else{
        document.getElementById("firstName").style.borderColor="#e0e0e0";
    }
    if(lastName.length == 0){
        document.getElementById("lastName").style.borderColor="red";
        text = "Please Enter your last name";
        error_message.innerHTML = text;
        return false;
    }
    else{
        document.getElementById("lastName").style.borderColor="#e0e0e0";
    }
    if(birthday == ""){
        document.getElementById("birthday").style.borderColor="red";
        text = "Please Enter your Birthday";
        error_message.innerHTML = text;
        return false;
    }
    else{
        document.getElementById("birthday").style.borderColor="#e0e0e0";
    }
    if(!phoneNumberPattern.test(phone)){
      document.getElementById("phone").style.borderColor="red";
      text = "Please Enter valid US Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    else{
        document.getElementById("phone").style.borderColor="#e0e0e0";
    }
    if(address1.length == 0){
        document.getElementById("address1").style.borderColor="red";
        text = "Please Enter Your Street Address 1";
        error_message.innerHTML = text;
        return false;
      }
      else{
        document.getElementById("address1").style.borderColor="#e0e0e0";
    }
    if(city.length == 0){
        document.getElementById("city").style.borderColor="red";
        text = "Please Enter Your City";
        error_message.innerHTML = text;
        return false;
    }
    else{
        document.getElementById("city").style.borderColor="#e0e0e0";
    }
    if(state.length == 0){
        document.getElementById("state").style.borderColor="red";
        text = "Please Select Your State";
        error_message.innerHTML = text;
        return false;
    }
    else{
        document.getElementById("state").style.borderColor="#e0e0e0";
    }
    if(isNaN(zipcode) || zipcode.length != 5){
        document.getElementById("zipcode").style.borderColor="red";
        text = "Please Enter valid zipcode";
        error_message.innerHTML = text;
        return false;
      }
    else{
        document.getElementById("zipcode").style.borderColor="#e0e0e0";
    }
    alert("Form Submitted Successfully!");
    window.location.href="success.html";
    return true;
  }