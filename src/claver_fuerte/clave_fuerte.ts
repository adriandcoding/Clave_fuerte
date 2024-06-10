import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./clave_fuerte-helper";
export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const ejemplosDeValidacion = [
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];
  const resultado = ejemplosDeValidacion.find(
    (validacion): boolean => !validacion.esValida
  );
  return resultado || { esValida: true };
};

console.log(
  validarClave("admin", "32*jj22Mn", [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
  ])
);
