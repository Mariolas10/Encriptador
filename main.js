const textArea = document.querySelector(".mensaje");
const mensaje = document.querySelector(".mensaje-encriptado");
const copiar = document.querySelector("#copiar-btn");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringEncriptado){
    let matrizEncriptacion = [["e", "enter"], ["i", "imea"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizEncriptacion.length; i++){
        if (stringEncriptado.includes(matrizEncriptacion[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizEncriptacion[i][0], matrizEncriptacion[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencritar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencritar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imea"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

copiar.addEventListener('click', function(){
    let texto = mensaje.value;
    let vacio = /  /g; //aquí se especifica que busque los dobles espacios
    texto = texto.replace(vacio, "");
    navigator.clipboard.writeText(texto);
    alert("!Texto Copiado¡")
    textArea.value = "";
    mensaje.value = "";
});


