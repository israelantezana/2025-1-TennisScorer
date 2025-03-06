import obtenerScore from "./puntaje.js";

describe("Marcador de puntaje de tennis", () => {
  it("en caso de que ambos jugadores tengan 0 el marcador es love love", () => {
    expect(obtenerScore(0, 0)).toEqual("love, love");
  });
  it("en caso de que un jugador tengo 1 puntos y el otro jugador tenga 0 puntos", () => {
    expect(obtenerScore(1, 0)).toEqual("15 - 0");
  });
});
