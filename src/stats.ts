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

const ev = 0;

const getHappinessBoost = (happiness: number) =>
  Math.min(1.1, 1 + Math.floor(happiness / 255) * 0.1);

type GetStatOptions = {
  baseStat: number;
  level: number;
  iv: number;
  av: number;
} & (
  | {
      stat: typeof HP;
    }
  | {
      stat: Exclude<Stat, typeof HP>;
      happiness: number;
      nature: number;
    });

export const getStat = (options: GetStatOptions) => {
  let result = 0;
  if (options.stat === HP) {
    result =
      ((options.iv + 2 * options.baseStat + ev / 4) * options.level) / 100 +
      10 +
      options.level;
  } else {
    const happinessBoost = getHappinessBoost(options.happiness);
    result =
      (((options.iv + 2 * options.baseStat + ev / 4) * options.level) / 100 +
        5) *
      options.nature *
      happinessBoost;
  }

  return Math.floor(result) + options.av;
};
