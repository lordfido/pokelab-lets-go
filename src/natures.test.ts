import {
  Adamant,
  Modest,
  findNature,
  getName,
  All as AllNatures
} from "./natures";
import { Attack, SpecialAttack } from "./stats";
import { English, Spanish, All as AllLanguages } from "./languages";

test("Find nature", () => {
  expect(findNature(Attack, SpecialAttack)).toBe(Adamant);
  expect(findNature(SpecialAttack, Attack)).toBe(Modest);
  expect(findNature(SpecialAttack, Attack)).toBe(Modest);
});

test("Get name", () => {
  expect(getName(Modest, English)).toBe("Modest");
  expect(getName(Modest, Spanish)).toBe("Modesta");
});

test("All natures are named for every language", () => {
  for (const language of AllLanguages) {
    for (const nature of AllNatures) {
      expect(getName(nature, language)).toBeTruthy();
    }
  }
});
