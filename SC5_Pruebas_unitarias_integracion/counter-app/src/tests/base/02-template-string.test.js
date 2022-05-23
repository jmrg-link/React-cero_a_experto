import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en base/template-sting", () => {
  test("getSaludo debe retornar Hola Jesus Rico", () => {
    const nombre = "Jesus";
    const apellido = "Rico";
    const saludo = getSaludo(nombre, apellido);
    expect(saludo).toBe(`Hola ${nombre} ${apellido}`);
  });

  test("getSaludo debe de retornar Hola Jesus Rico", () => {
    const saludo = getSaludo();
    expect(saludo).toBe(`Hola Jesus Rico`);
  });
});
