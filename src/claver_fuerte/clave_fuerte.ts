import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./clave_fuerte-helper";
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
  const resultado = validaciones.find((validacion) => !validacion.esValida);
  if (resultado) {
    return resultado;
  } else {
    return { esValida: true };
  }
};
console.log(
  validarClave("admin", "admN123", [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
  ])
);
