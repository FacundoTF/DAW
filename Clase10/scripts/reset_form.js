function cargar_datos() {
    if (localStorage.length !== 0) {
        document.getElementById("InputNombre").value = localStorage.getItem("NOMBRE")
        document.getElementById("InputCorreo").value = localStorage.getItem("CORREO")
        document.getElementById("InputContra").value = localStorage.getItem("CONTRASEÑA")
        document.getElementById("InputEdad").value = localStorage.getItem("EDAD")
        document.getElementById("InputTele").value = localStorage.getItem("TELEFONO")
        document.getElementById("InputDireccion").value = localStorage.getItem("DIRECCION")
        document.getElementById("InputCiudad").value = localStorage.getItem("CIUDAD")
        document.getElementById("InputCodPos").value = localStorage.getItem("COD_POS")
        document.getElementById("InputDNI").value = localStorage.getItem("DNI")
        console.log(localStorage)
        return
    }
    console.log("No hay datos guardados")
}

document.getElementById("FormModalButton").addEventListener("click", function () {
    var FormModal = document.getElementById("FormModal")
    FormModal.style.display = "none"
})

cargar_datos()