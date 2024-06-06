import {
    validarClave
} from "./clave_fuerte"
describe('validarClave', () => {
    const commonPasswords = ['123456', 'password', 'qwerty', 'abc123'];
  
    it('debería validar una contraseña válida', () => {
      const result = validarClave('usuario', 'Password123!', commonPasswords);
      expect(result.esValida).toBe(true);
    });
  
    it('debería fallar si no tiene caracteres especiales', () => {
      const result = validarClave('usuario', 'Password123', commonPasswords);
      expect(result.esValida).toBe(false);
    });
  
    it('debería fallar si no tiene la longitud mínima', () => {
      const result = validarClave('usuario', 'Pass1!', commonPasswords);
      expect(result.esValida).toBe(false);
    });
  
    it('debería fallar si no tiene mayúsculas y minúsculas', () => {
      const result = validarClave('usuario', 'password123!', commonPasswords);
      expect(result.esValida).toBe(false);
    });
  
    it('debería fallar si no tiene números', () => {
      const result = validarClave('usuario', 'Password!', commonPasswords);
      expect(result.esValida).toBe(false);
    });
  
    it('debería fallar si contiene el nombre de usuario', () => {
      const result = validarClave('usuario', 'usuario123!', commonPasswords);
      expect(result.esValida).toBe(false);
    });
  
    it('debería fallar si es una contraseña común', () => {
      const result = validarClave('usuario', '123456', commonPasswords);
      expect(result.esValida).toBe(false);
    });
  });