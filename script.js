const textoEntrada = document.querySelector(".texto-entrada");
const textoSaida = document.querySelector(".texto-saida");

function actionEncriptar(){
    const textEncriptado = encriptaTexto(textoEntrada.value);
    textoSaida.value = textEncriptado;
    textoEntrada.value = "";
    let elementoComBackground = textoSaida;
    elementoComBackground.style.backgroundImage = "none";
}


function encriptaTexto(stringEncriptada) {
    let matrizCrip = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; // alteração entre as vogais
    stringEncriptada = stringEncriptada.toLowerCase(); // converte para minuscula as letras, visto a restrição passada

    for (let i = 0; i < matrizCrip.length; i++) { // percorre a string alterando o valor da vogal mediante o aceite de condição
        if (stringEncriptada.includes(matrizCrip[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCrip[i][0], matrizCrip[i][1]);
        }
        
    }
    return stringEncriptada;
}


function actionDesencriptar(){
    const textEncriptado = desencriptaTexto(textoEntrada.value);
    textoSaida.value = textEncriptado;
    textoEntrada.value = "";
}

function desencriptaTexto(stringDesencriptada) {
    let matrizCrip = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCrip.length; i++) {
        if (stringDesencriptada.includes(matrizCrip[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCrip[i][1], matrizCrip[i][0]);
        }
        
    }
    return stringDesencriptada;
}

function copiarText() {
    let textoCopiado = textoSaida;
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("O texto é: " + textoCopiado.value);
}




