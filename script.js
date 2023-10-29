
const psswShowHide = document.querySelectorAll(".showHidePw");
const passw = document.querySelectorAll(".password");
const boton = document.getElementById("loginButton");
const loader = document.getElementById("loader");
const mensaje = document.getElementById("message");
const email = document.querySelector('.login input[type="text"]');
const password = document.querySelector('.login input[type="password"]');

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

    const email = email.value;
    const password = password.value;

    setTimeout(() => {
        loader.style.display = "none";
        if (email === correctEmail && password === correctPassword) {
            mensaje.textContent = "¡Eres un crack papa, Inicio de sesión exitoso!";
            mensaje.style.color = "green";
        } else {
            mensaje.style.color = "red";
            email.style.borderColor = "red";
            password.style.borderColor = "red";
        }
    }, 3000);
});




