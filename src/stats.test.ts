import { All, PokemonSheet } from "./pokedex";
import {
  HP,
  Attack,
  Defense,
  SpecialAttack,
  SpecialDefense,
  Speed,
  getStat
} from "./stats";

test("HP Stat", () => {
  const chansey = All.find(
    ({ nationalNumber }) => nationalNumber === 113
  ) as PokemonSheet;
  const stat = HP;
  const baseStat = chansey.baseStats[stat];

  expect(getStat({ stat, baseStat, av: 0, iv: 0, level: 100 })).toBe(610);
  expect(getStat({ stat, baseStat, av: 0, iv: 31, level: 100 })).toBe(641);
  expect(getStat({ stat, baseStat, av: 200, iv: 31, level: 100 })).toBe(841);

  expect(getStat({ stat, baseStat, av: 0, iv: 0, level: 50 })).toBe(310);
  expect(getStat({ stat, baseStat, av: 0, iv: 31, level: 50 })).toBe(325);
  expect(getStat({ stat, baseStat, av: 200, iv: 31, level: 50 })).toBe(525);
});

test("Special Attack Stat", () => {
  const mewtwo = All.find(
    ({ nationalNumber }) => nationalNumber === 150
  ) as PokemonSheet;
  const stat = SpecialAttack;
  const baseStat = mewtwo.baseStats[stat];

  expect(
    getStat({
      stat,
      baseStat,
      av: 0,
      iv: 0,
      level: 100,
      nature: 0.9,
      happiness: 0
    })
  ).toBe(281);
  expect(
    getStat({
      stat,
      baseStat,
      av: 0,
      iv: 31,
      level: 100,
      nature: 0.9,
      happiness: 255
    })
  ).toBe(340);
  expect(
    getStat({
      stat,
      baseStat,
      av: 200,
      iv: 31,
      level: 100,
      nature: 0.9,
      happiness: 255
    })
  ).toBe(540);

  expect(
    getStat({
      stat,
      baseStat,
      av: 200,
      iv: 31,
      level: 100,
      nature: 1.1,
      happiness: 255
    })
  ).toBe(616);
});
