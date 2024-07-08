const botonEncriptar = document.querySelector(".boton--encriptar");
const textoEncriptado = document.querySelector(".encriptemos");
const respuesta = document.querySelector(".copiar--mensaje");
const espacioBlanco = document.querySelector(".cont--encriptado");
const botonDesencriptar = document.querySelector(".boton--desencriptar");
const botonCopiar = document.querySelector(".boton--copiar");


botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptado.value; 

    if(texto)    {
        texto = texto.replace(/e/gi, "enter")
        texto = texto.replace(/i/gi, "imes")
        texto = texto.replace(/a/gi, "ai")
        texto = texto.replace(/o/gi, "ober")
        texto = texto.replace(/u/gi, "ufat");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit"
        espacioBlanco.remove();
    }
});



botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptado.value; 

    if(texto)    {
        texto = texto.replace(/enter/gi, "e")
        texto = texto.replace(/imes/gi, "i")
        texto = texto.replace(/ai/gi, "a")
        texto = texto.replace(/ober/gi, "o")
        texto = texto.replace(/ufat/gi, "u");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit"
        espacioBlanco.remove();
    }
});



botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});