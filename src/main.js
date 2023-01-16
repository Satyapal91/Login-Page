

document.addEventListener("DOMContentLoaded", () => {
    let isLoggedIn = localStorage.getItem('user_email');
    if(isLoggedIn) {
        // alert("user is already logged in");
        window.location.replace('Dashboard.html');
    }
    else {
        if(window.location.href !== 'http://127.0.0.1:5500/index.html') {
            window.location.replace('index.html');
        }
        passwordValidation();
        getErrorMessage();
        LoginformSubmission();
    }

    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add('form--hidde');
        createAccountForm.classList.remove('form--hidde');
    });

    document.getElementById("linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidde");
        createAccountForm.classList.add("form--hidde")
    });

    // handling input errors
    function getErrorMessage() {
        let usernameValid = document.querySelector("#signupUsername");

        usernameValid.addEventListener("input", e => {
            let self = e.target;
            if (self.value.length > 12 || self.value.length > 0 && self.value.length <= 7) {
                self.style.border = "1px solid red";
            }
            else {
                self.style.border = "1px solid green";
            }
        });
    }
    
    // password validation
    function passwordValidation() {
        let input__password = document.querySelector('#input__password');
        let confirm__password = document.querySelector('#input__confirm__password');
        const message = "invalide password";
        let password = "";
        
        input__password.addEventListener('input', e => {
            let self = e.target;
            password = self.value;
        });

        confirm__password.addEventListener('input', e => {
            let self = e.target;
            if (password !== self.value) {
                document.querySelector(".form__cPassword-error-message").textContent = message;
                confirm__password.style.border = "1px solid red";
            }else {
                confirm__password.style.border = "1px solid green";
                document.querySelector(".form__cPassword-error-message").textContent = "";
            }
        });
    }
    
    // form submission handling
    function LoginformSubmission() {
       let login__form = document.querySelector('.login__form');
       let login__input = document.querySelector('#login__input');
       let login__password = document.querySelector('#login__password');
       
       login__form.addEventListener('submit' , e => {
          e.preventDefault();
          let email = login__input.value;
          let password = login__password.value;
          
        //   save user information in local storage
        localStorage.setItem('user_email', email);

        //   clear message
          login__input.value = "";
          login__password.value = "";

        //  redirect to submit
         window.location.replace('Dashboard.html');
       });
    }

   
});