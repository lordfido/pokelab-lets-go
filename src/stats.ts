import { PokemonSheet } from "./pokedex";

export const HP = 0;
export const Attack = 1;
export const Defense = 2;
export const Speed = 3;
export const SpecialAttack = 4;
export const SpecialDefense = 5;

export type Stat =
  | typeof HP
  | typeof Attack
  | typeof Defense
  | typeof Speed
  | typeof SpecialAttack
  | typeof SpecialDefense;

export const All: ReadonlyArray<Stat> = [
  HP,
  Attack,
  Defense,
  Speed,
  SpecialAttack,
  SpecialDefense
];

const effort = 0;

export const getStat = (
  stat: Stat,
  pokemon: PokemonSheet,
  level: number,
  iv: number,
  nature: number,
  av: number
) => {
  if (stat === HP) {
    return (
      10 +
      (level / 100) * (pokemon.baseStats[stat] * 2 + iv) +
      effort +
      level +
      av
    );
  }

  return (
    (5 + (level / 100) * (pokemon.baseStats[stat] * 2 + iv) + effort) * nature +
    av
  );
};
