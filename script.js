const psswShowHide = document.querySelectorAll(".showHidePw");
const passw = document.querySelectorAll(".password");
const boton = document.getElementById("loginButton");
const loader = document.getElementById("loader");
const mensaje = document.getElementById("message");
const emailInput = document.querySelector('.login input[type="text"]');
const passwordInput = document.querySelector('.login input[type="password"]');

psswShowHide.forEach((icono, index) => {
    icono.addEventListener("click", () => {
        if (passw[index].type === "password") {
            passw[index].type = "text";
            icono.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            passw[index].type = "password";
            icono.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

boton.addEventListener("click", () => {
    loader.style.display = "block";

    const correctEmail = 'usuario@ejemplo.com';
    const correctPassword = '123456';

    const email = emailInput.value;
    const password = passwordInput.value;

    setTimeout(() => {
        loader.style.display = "none";
        if (email === correctEmail && password === correctPassword) {
            mensaje.textContent = "que xopa, bienvenido CRACK, ¡exito al que lo vea!";
            mensaje.style.color = "green";
        } else {
            mensaje.style.color = "red";
            emailInput.style.borderColor = "red";
            passwordInput.style.borderColor = "red";
        }
    }, 3000);
});





