var HC = 0
function enviar() {
    let email = document.getElementById("t2")
    if (!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g.test(email.value)) {
        alert("email invalido")
        return false;
    }
    let nombre = document.getElementById("t1").value
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert("completa nombre")
        return false;
    }
    let mensaje = document.getElementById("t3").value
    if (mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)) {
        alert("escribe tu  mensaje")
        return false;
    
    }
    alert("formulario enviado")

    document.getElementById("form").reset()
}
function oscuro() {
    let input = document.getElementsByTagName("input")
    let textarea = document.getElementsByTagName("textarea")
    let fondo = document.getElementsByTagName("body").item(0)
    let boton1 = document.getElementById("boton-1")
    let boton2 = document.getElementById("boton-2")
    let title = document.getElementsByClassName("titulo").item(0)
    let formulario = document.getElementsByClassName("formulario").item(0)
    if (HC == 0) {
        Array.from(input).forEach(c => {
            c.classList.add("inputHC")
        })
        Array.from(textarea).forEach(c => {
            c.classList.add("inputHC")
            console.log(HC)
        })

        fondo.classList.add("bodyHC")
        boton1.classList.add("botonHC")
        boton2.classList.add("botonHC")
        title.classList.add("tituloHC")
        formulario.classList.add("formHC")

        HC = 1
    }
    else {
        Array.from(input).forEach(c => {
            c.classList.remove("inputHC")
        })
        Array.from(textarea).forEach(c => {
            c.classList.remove("inputHC")
        })
        fondo.classList.remove("bodyHC")
        boton1.classList.remove("botonHC")
        boton2.classList.remove("botonHC")
        title.classList.remove("tituloHC")
        formulario.classList.remove("formHC")
        HC = 0
    }
}

let elem = document.getElementById("boton-1")
elem.addEventListener("click", enviar);

let elemt = document.getElementById("boton-2")
elemt.addEventListener("click", oscuro);