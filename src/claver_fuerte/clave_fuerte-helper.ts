export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    if (/[a-z]/.test(clave) && /[A-Z]/.test(clave)) {
      return { esValida: true };
    } else {
      return { esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" };
    }
  };
  
export const tieneNumeros = (clave: string): ValidacionClave => {
    if (/\d/.test(clave)) {
      return { esValida: true };
    } else {
      return { esValida: false, error: "La clave debe de tener números" };
    }
  };
  
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    if (/[!@#$%^&*(),.?":{}|<>]/.test(clave)) {
      return { esValida: true };
    } else {
      return { esValida: false, error: "La clave debe de tener caracteres especiales" };
    }
  };
  
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    if (clave.length >= 8) {
      return { esValida: true };
    } else {
      return { esValida: false, error: "La clave debe de tener una longitud mínima de 8 caracteres" };
    }
  };
  
export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
    if (clave.toLowerCase().includes(nombreUsuario.toLowerCase())) {
      return { esValida: false, error: "La clave no debe tener el nombre del usuario" };
    } else {
      return { esValida: true };
    }
  };
  
export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    const foundCommonWord =commonPasswords.some(commonWord => clave.includes(commonWord))

    if (foundCommonWord) {
      return { esValida: false, error: "La clave no debe de contener palabras comunes" };
    } else {
      return { esValida: true };
    }
  };
  