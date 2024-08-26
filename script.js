// seleccionamos los elementos del documento
const textoEntrada = document.getElementById('texto-entrada');
const desplazamiento = document.getElementById('desplazamiento');
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');
const textoSalida = document.getElementById('texto-salida');

// función para encriptar texto
function encriptarTexto(texto, despl) {
    let resultado = ''; // variable para almacenar el texto encriptado
    for (let i = 0; i < texto.length; i++) {
        let codigo = texto.charCodeAt(i); // obtener el código del carácter
        if (codigo >= 65 && codigo <= 90) { // letras mayúsculas
            resultado += String.fromCharCode((codigo - 65 + despl) % 26 + 65);
        } else if (codigo >= 97 && codigo <= 122) { // letras minúsculas
            resultado += String.fromCharCode((codigo - 97 + despl) % 26 + 97);
        } else {
            resultado += texto[i]; // caracteres que no son letras
        }
    }
    return resultado; // devolver el texto encriptado
}

// función para desencriptar texto
function desencriptarTexto(texto, despl) {
    return encriptarTexto(texto, 26 - despl); // usar encriptar con desplazamiento inverso
}

// evento para encriptar el texto al hacer clic en el botón
botonEncriptar.addEventListener('click', () => {
    const texto = textoEntrada.value; // obtener el texto del usuario
    const despl = parseInt(desplazamiento.value); // obtener el valor del desplazamiento
    const textoEncriptado = encriptarTexto(texto, despl); // encriptar el texto
    textoSalida.textContent = 'Texto encriptado: ' + textoEncriptado; // mostrar el texto encriptado
});

// evento para desencriptar el texto al hacer clic en el botón
botonDesencriptar.addEventListener('click', () => {
    const texto = textoEntrada.value; // obtener el texto del usuario
    const despl = parseInt(desplazamiento.value); // obtener el valor del desplazamiento
    const textoDesencriptado = desencriptarTexto(texto, despl); // desencriptar el texto
    textoSalida.textContent = 'Texto desencriptado: ' + textoDesencriptado; // mostrar el texto desencriptado
});
