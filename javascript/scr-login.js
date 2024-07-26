
///////////////// klik forgot password ////////////// 
  document.addEventListener("DOMContentLoaded", () => {
      const mToggleA = document.querySelector(".fggpp");
      const dvs = document.querySelector(".boxx111");
      const dvsA = document.querySelector(".boxx22");
    
      if (mToggleA && dvs && dvsA) {
        mToggleA.addEventListener("click", function (event) {
            event.preventDefault(); 
          dvs.classList.add("hdd");
          dvsA.classList.add("munc");
        });
      }
    });
  
/////////////////// klik login now ////////////////////////
    document.addEventListener("DOMContentLoaded", () => {
      const mToggleA = document.querySelector(".fggpp1");
      const dvs = document.querySelector(".boxx111");
      const dvsB = document.querySelector(".boxx22");
      const dvsD = document.querySelector(".boxx33");
    
      if (mToggleA && dvs) {
        mToggleA.addEventListener("click", function (event) {
            event.preventDefault(); 
          dvs.classList.remove("hdd");
          dvsB.classList.remove("munc");
          dvsD.classList.remove("munc1");
        });
      }
    });
      

////////////////// klik create acount //////////////////////////
    document.addEventListener("DOMContentLoaded", () => {
      const mToggleA = document.querySelector(".fggppA");
      const dvs = document.querySelector(".boxx111");
      const dvsB = document.querySelector(".boxx33");
    
      if (mToggleA && dvs) {
        mToggleA.addEventListener("click", function (event) {
            event.preventDefault(); 
          dvs.classList.add("hdd");
          dvsB.classList.add("munc1");
        });
      }
    });
  
/////////////////// klik submit condisi boxx1 /////////////////////
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("fmlgn").addEventListener('submit', function(event) {
            console.log("Form submit event triggered");
            if (!validateForm()) {
                event.preventDefault(); // Mencegah form dari disubmit jika tidak valid
            }
        });
      });
      function validateForm() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let isValid = true;
      
        if (username === "") {
            document.getElementById("erorus").classList.remove("hidden");
            isValid = false;
        } else {
            document.getElementById("erorus").classList.add("hidden");
        }
        if (password === "") {
            document.getElementById("erorpw").classList.remove("hidden");
            isValid = false;
        } else {
            document.getElementById("erorpw").classList.add("hidden");
        }
        return isValid;
      }
      
//////////////// klik submit condisi di box forgot password////////////////////
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("fmlgn1").addEventListener('submit', function(event) {
            console.log("Form submit event triggered");
            if (!validateFormA()) {
                event.preventDefault(); // Mencegah form dari disubmit jika tidak valid
            }
        });
      });
      function validateFormA(){
        let lupa = document.getElementById("email").value;
        let isvalid = true;
        if(lupa ===""){
          document.getElementById("erorlp").classList.remove("hidden");
          isvalid = false;
        } else{
          document.getElementById("erorlp").classList.add("hidden");
        }
        return isvalid;
      }
      
/////////////////// klik submit condisi di box create acount //////////////////////
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('fmlgn2').addEventListener('submit', function(event) {
            console.log("Form submit event triggered");
            if (!validateFormB()) {
                event.preventDefault(); // Mencegah form dari disubmit jika tidak valid
            }
        });
      });
      function validateFormB() {
        let username = document.getElementById("userr").value;
        let email = document.getElementById("emm").value;
        let password = document.getElementById("pass").value;
        let passwordA = document.getElementById("passA").value;
        let isValid = true;
      
        if (username === "") {
            document.getElementById("erorusA").classList.remove("hidden");
            isValid = false;
        } else {
            document.getElementById("erorusA").classList.add("hidden");
        }
        if (email === "") {
          document.getElementById("eroremm").classList.remove("hidden");
          isValid = false;
        } else {
          document.getElementById("eroremm").classList.add("hidden");
        }
        if (password === "" || passwordA ==="") {
            document.getElementById("erorpwA").classList.remove("hidden");
            isValid = false;
        } else {
            document.getElementById("erorpwA").classList.add("hidden");
        }
        return isValid;
      }
      
      