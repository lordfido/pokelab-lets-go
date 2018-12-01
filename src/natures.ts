import {
  Attack,
  Defense,
  SpecialAttack,
  SpecialDefense,
  Speed,
  Stat
} from "./stats";

export type NatureStat =
  | typeof Attack
  | typeof Defense
  | typeof SpecialAttack
  | typeof SpecialDefense
  | typeof Speed;

export const Hardy = "Hardy";
export const Lonely = "Lonely";
export const Adamant = "Adamant";
export const Naughty = "Naughty";
export const Brave = "Brave";
export const Bold = "Bold";
export const Docile = "Docile";
export const Impish = "Impish";
export const Lax = "Lax";
export const Relaxed = "Relaxed";
export const Modest = "Modest";
export const Mild = "Mild";
export const Bashful = "Bashful";
export const Rash = "Rash";
export const Quiet = "Quiet";
export const Calm = "Calm";
export const Gentle = "Gentle";
export const Careful = "Careful";
export const Quirky = "Quirky";
export const Sassy = "Sassy";
export const Timid = "Timid";
export const Hasty = "Hasty";
export const Jolly = "Jolly";
export const Naive = "Naive";
export const Serious = "Serious";

export type Nature =
  | typeof Hardy
  | typeof Lonely
  | typeof Adamant
  | typeof Naughty
  | typeof Brave
  | typeof Bold
  | typeof Docile
  | typeof Impish
  | typeof Lax
  | typeof Relaxed
  | typeof Modest
  | typeof Mild
  | typeof Bashful
  | typeof Rash
  | typeof Quiet
  | typeof Calm
  | typeof Gentle
  | typeof Careful
  | typeof Quirky
  | typeof Sassy
  | typeof Timid
  | typeof Hasty
  | typeof Jolly
  | typeof Naive
  | typeof Serious;

export const All: Nature[] = [
  Hardy,
  Lonely,
  Adamant,
  Naughty,
  Brave,
  Bold,
  Docile,
  Impish,
  Lax,
  Relaxed,
  Modest,
  Mild,
  Bashful,
  Rash,
  Quiet,
  Calm,
  Gentle,
  Careful,
  Quirky,
  Sassy,
  Timid,
  Hasty,
  Jolly,
  Naive,
  Serious
];

const statIndex = {
  [Attack]: 0,
  [Defense]: 1,
  [SpecialAttack]: 2,
  [SpecialDefense]: 3,
  [Speed]: 4
};

/**
 * [increases,decreases] = [x,y]
 */
const statEffects: Nature[][] = [
  [Hardy, Lonely, Adamant, Naughty, Brave],
  [Bold, Docile, Impish, Lax, Relaxed],
  [Modest, Mild, Bashful, Rash, Quiet],
  [Calm, Gentle, Careful, Quirky, Sassy],
  [Timid, Hasty, Jolly, Naive, Serious]
];

export const getStatEffect = (
  increasedStat: NatureStat,
  decreasedStat: NatureStat
): Nature => statEffects[statIndex[increasedStat]][statIndex[decreasedStat]];
