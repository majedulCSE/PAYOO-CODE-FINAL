console.log("Login functionality coming");

document.getElementById("login-btn").addEventListener("click", function(){
   //1. get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

   //2. get the pin input
   const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

   //3. match pin & mobile No
   if(contactNumber=="01844147716" && pin=="1234"){
    //3-1. true::>> alert> homepage
    alert("login successfully")
    window.location.assign("./home.html")
   } else {
    //3-2. false::>> alert> return
    alert("login Failed");
    return;
   }
   
});