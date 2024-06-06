const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
): ValidacionClave => {
    const validaciones: ValidacionClave[] = [
        tieneMayusculasYMinusculas(clave),
        tieneNumeros(clave),
        tieneCaracteresEspeciales(clave),
        tieneLongitudMinima(clave),
        tieneNombreUsuario(nombreUsuario, clave),
        tienePalabrasComunes(clave, commonPasswords),
    ];

    const resultadoValidacion = validaciones.find(validacion =>!validacion.esValida);
    if (resultadoValidacion) {
        return resultadoValidacion;
    } else {
        return { esValida: true };
    }


  }