function prueba() {
  try {
    return "try";
  } catch {
    return "catch";
  } finally {
    return "finally"; //El bloque finally siempre se ejecutará.
  }
}

console.log(prueba());
