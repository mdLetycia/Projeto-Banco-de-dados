const formularo = 
document.querySelector("form");

formularo.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("O formulario foi enviado!")
});

