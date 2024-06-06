import {
    tieneCaracteresEspeciales,
    tieneLongitudMinima,
    tieneMayusculasYMinusculas,
    tieneNumeros,
    tieneNombreUsuario,
    tienePalabrasComunes,
} from "./clave_fuerte-helper"
const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
): ValidacionClave => {
    const validaciones = [
        tieneCaracteresEspeciales(clave),
        tieneLongitudMinima(clave),
        tieneMayusculasYMinusculas(clave),
        tieneNumeros(clave),
        tieneNombreUsuario(nombreUsuario, clave),
        tienePalabrasComunes(clave, commonPasswords),
    ];
    const validacionesValidas = validaciones.filter(validacion => validacion.esValida);
    if (validacionesValidas.length === validaciones.length) {
        return { esValida: true };
    } else {
        return {
            esValida: false,
            error: validacionesValidas[0].error,
        };
    }


    

}


