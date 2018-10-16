function sum(a, b) {
  return a + b;
}

// named export
// possibilidade de vários exports
// só pode chamar com o nome
// precisa das chaves { sub }
export function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

export { mult, div };
// ou export * as utils;
// mas deve retirar todos os exports

// método principal
// somente um default por arquivo
// importar com qualquer nome
// não precisa usar chaves
export default sum;
