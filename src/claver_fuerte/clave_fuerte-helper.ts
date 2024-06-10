export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let tieneMinuscula = false;
  let tieneMayuscula = false;

  for (const element of clave) {
    if (element >= "a" && element <= "z") {
      tieneMinuscula = true;
    }
    if (element >= "A" && element <= "Z") {
      tieneMayuscula = true;
    }
    if (tieneMinuscula && tieneMayuscula) {
      return { esValida: true };
    }
  }

  return {
    esValida: false,
    error: "La clave debe de tener mayúsculas y minúsculas",
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  for (const element of clave) {
    if (element >= "0" && element <= "9") {
      return { esValida: true };
    }
  }

  return { esValida: false, error: "La clave debe de tener números" };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteresEspeciales = '!@#$%^&*(),.?":{}|<>';
  for (const element of clave) {
    if (caracteresEspeciales.includes(element)) {
      return { esValida: true };
    }
  }

  return {
    esValida: false,
    error: "La clave debe de tener caracteres especiales",
  };
};
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length >= 8) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  }
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (clave.toLowerCase().includes(nombreUsuario.toLowerCase())) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  } else {
    return { esValida: true };
  }
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const foundCommonWord = commonPasswords.some((commonWord) =>
    clave.includes(commonWord)
  );

  if (foundCommonWord) {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
  } else {
    return { esValida: true };
  }
};
