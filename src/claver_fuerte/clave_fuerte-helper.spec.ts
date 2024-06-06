import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./clave_fuerte-helper";

describe("clave_fuerte-helper", () => {
  
  describe("tieneCaracteresEspeciales", () => {
    it("Debe retornar true si la clave tiene caracteres especiales", () => {
      // Arrange
      const clave = "Clave123*¨";

      // Act
      const resultado = tieneCaracteresEspeciales(clave);

      // Assert
      expect(resultado.esValida).toBeTruthy();
    });

    it("Debe retornar false si la clave no tiene caracteres especiales", () => {
      // Arrange
      const clave = "Clave";

      // Act
      const resultado = tieneCaracteresEspeciales(clave);

      // Assert
      expect(resultado.esValida).toBeFalsy();
    });

  });
  describe("tieneNumeros", () => {
    it("Debe retornar true si la clave tiene números", () => {
      // Arrange
      const clave = "Clave123";

      // Act
      const resultado = tieneNumeros(clave);

      // Assert
      expect(resultado.esValida).toBeTruthy();
    });

    it("Debe retornar false si la clave no tiene números", () => {
      // Arrange
      const clave = "Clave";

      // Act
      const resultado = tieneNumeros(clave);

      // Assert
      expect(resultado.esValida).toBeFalsy();
    });

  });
  describe("tieneMayusculasYMinusculas", () => {
    it("Debe retornar true si la clave tiene mayúsculas y minúsculas", () => {
      // Arrange
      const clave = "Clave123";

      // Act
      const resultado = tieneMayusculasYMinusculas(clave);

      // Assert
      expect(resultado.esValida).toBeTruthy();
    });

    it("Debe retornar false si la clave no tiene mayúsculas y minúsculas", () => {
      // Arrange
      const clave = "clave123";

      // Act
      const resultado = tieneMayusculasYMinusculas(clave);

      // Assert
      expect(resultado.esValida).toBeFalsy();
    });

  })
  describe("tieneLongitudMinima", () => { 
    it("Debe retornar true si la clave tiene una longitud mínima de 8 caracteres", () => {
      // Arrange
      const clave = "Clave123";

      // Act
      const resultado = tieneLongitudMinima(clave);

      // Assert
      expect(resultado.esValida).toBeTruthy();
    });

    it("Debe retornar false si la clave no tiene una longitud mínima de 8 caracteres", () => {
      // Arrange
      const clave = "Clave";

      // Act
      const resultado = tieneLongitudMinima(clave);

      // Assert
      expect(resultado.esValida).toBeFalsy();
    });
  })
  describe("tieneNombreUsuario", () => { 
    it("Debe retornar false si la clave contiene el nombre del usuario", () => {
      // Arrange
      const clave = "usuario";
      const nombreUsuario = "usuario";

      // Act
      const resultado = tieneNombreUsuario(nombreUsuario, clave);

      // Assert
      expect(resultado.esValida).toBeFalsy();
    });

    it("Debe retornar true si la clave no contiene el nombre del usuario", () => {
      // Arrange
      const clave = "clave123";
      const nombreUsuario = "usuario";

      // Act
      const resultado = tieneNombreUsuario(nombreUsuario, clave);

      // Assert
      expect(resultado.esValida).toBeTruthy();
    });
  })
  describe("tienePalabrasComunes", () => { 
    it("Debe retornar false si la clave contiene palabras comunes", () => {
      // Arrange
      const clave = "Clave123";
      const commonPasswords = ["123", "clave"];

      // Act
      const resultado = tienePalabrasComunes(clave, commonPasswords);

      // Assert
      expect(resultado.esValida).toBeFalsy();
    });

    it("Debe retornar true si la clave no contiene palabras comunes", () => {
      // Arrange
      const clave = "pajro345";
      const commonPasswords = ["123", "clavee"];

      // Act
      const resultado = tienePalabrasComunes(clave, commonPasswords);

      // Assert
      expect(resultado.esValida).toBeTruthy();
    });
  })


  
})
