document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("text");
    const mobileInput = document.getElementById("password");
    const form = document.getElementById("form");

    nameInput.addEventListener("invalid", function() {
        if (this.validity.patternMismatch) {
            this.setCustomValidity("Please enter only characters.");
        } else if (this.validity.valueMissing) {
            this.setCustomValidity("من فضلك أدخل الأسم");
        } else {
            this.setCustomValidity("");
        }
    });;

    // Clear any set custom validity messages when input becomes valid
    nameInput.addEventListener("input", function() {
        if (this.validity.valid) {
            this.setCustomValidity("");
        }
    });

    mobileInput.addEventListener("input", function() {
        if (this.validity.valid) {
            this.setCustomValidity("");
        }
    });
});




let patharr = window.location.pathname.split("/");
patharr.splice(-1);
let path = patharr.join("/");
let host = window.location.protocol + "//" + window.location.host + path;
let redirectValue = document.getElementById("redDir").value;
document.getElementById("redDir").value = `${host}/thanksPage.html`;




const Mobile_Number = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");


const submit_Form =  () => {

    
    let messages = [];

  var Mobile_Number_Value = Mobile_Number.value;
  var first_Three_NUM = Mobile_Number_Value.substring(0, 3);

  if ( Mobile_Number.value.length < 11 || (first_Three_NUM !== "010" && first_Three_NUM !== "011" && first_Three_NUM !== "012" && first_Three_NUM !== "015" && first_Three_NUM !== "٠١٠" && first_Three_NUM !== "٠١١" && first_Three_NUM !== "٠١٢" && first_Three_NUM !== "٠١٥")) {
    messages.push("رقم الهاتف غير صحيح !");
  }

  if (Mobile_Number.value.length > 11) {
    messages.push("رقم الهاتف غير صحيح !");
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join(", ");
    errorElement.classList.add("active")

  }else{
    CheckNumber_Repeat(Mobile_Number.value)
   
  }


};


const CheckNumber_Repeat = (user_Number) =>{

    const data = {
        Number: user_Number,
    };

    fetch('https://leads-data.store/api/user/store', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: user_Number
        }),
        
    })

    .then(response => {
        return response.json();
      })

    .then(data => {
          var Number_Check = data.success
          console.log(Number_Check);


          if(Number_Check === true){
            form.submit()
          }else{
            errorElement.innerText = data.message;
            errorElement.classList.add("active")
          }
           
      })
      .catch((error) => {
        form.submit()
      })

}

