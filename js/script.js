const nombre = document.getElementById("names")
const tel = document.getElementById("phone")
const email = document.getElementById("email")
const sms = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ //extraido de https://www.w3resource.com/javascript/form/email-validation.php
    parrafo.innerHTML = ""
    if(nombre.value.length <3){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(tel.value.length < 6){
        warnings += `El telefono no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){      //debe tener "texto @ texto . texto (de 2 a 4 letras)"
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(sms.value.length < 10){
        warnings += `El mensaje es corto <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})