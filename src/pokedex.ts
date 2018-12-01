import { Type } from "./types";

export interface PokemonSheet {
  readonly nationalNumber: number;
  readonly name: string;
  readonly types: ReadonlyArray<Type>;
  readonly baseStats: ReadonlyArray<number>;
}

export const All: ReadonlyArray<PokemonSheet> = [
  {
    nationalNumber: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    baseStats: [45, 49, 49, 45, 65, 65]
  },
  {
    nationalNumber: 2,
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    baseStats: [60, 62, 63, 60, 80, 80]
  },
  {
    nationalNumber: 3,
    name: "Mega Venusaur",
    types: ["Grass", "Poison"],
    baseStats: [80, 100, 123, 80, 122, 120]
  },
  {
    nationalNumber: 3,
    name: "Venusaur",
    types: ["Grass", "Poison"],
    baseStats: [80, 82, 83, 80, 100, 100]
  },
  {
    nationalNumber: 4,
    name: "Charmander",
    types: ["Fire"],
    baseStats: [39, 52, 43, 65, 60, 50]
  },
  {
    nationalNumber: 5,
    name: "Charmeleon",
    types: ["Fire"],
    baseStats: [58, 64, 58, 80, 80, 65]
  },
  {
    nationalNumber: 6,
    name: "Mega Charizard X",
    types: ["Fire", "Dragon"],
    baseStats: [78, 130, 111, 100, 130, 85]
  },
  {
    nationalNumber: 6,
    name: "Mega Charizard Y",
    types: ["Fire", "Flying"],
    baseStats: [78, 104, 78, 100, 159, 115]
  },
  {
    nationalNumber: 6,
    name: "Charizard",
    types: ["Fire", "Flying"],
    baseStats: [78, 84, 78, 100, 109, 85]
  },
  {
    nationalNumber: 7,
    name: "Squirtle",
    types: ["Water"],
    baseStats: [44, 48, 65, 43, 50, 64]
  },
  {
    nationalNumber: 8,
    name: "Wartortle",
    types: ["Water"],
    baseStats: [59, 63, 80, 58, 65, 80]
  },
  {
    nationalNumber: 9,
    name: "Mega Blastoise",
    types: ["Water"],
    baseStats: [79, 103, 120, 78, 135, 115]
  },
  {
    nationalNumber: 9,
    name: "Blastoise",
    types: ["Water"],
    baseStats: [79, 83, 100, 78, 85, 105]
  },
  {
    nationalNumber: 10,
    name: "Caterpie",
    types: ["Bug"],
    baseStats: [45, 30, 35, 45, 20, 20]
  },
  {
    nationalNumber: 11,
    name: "Metapod",
    types: ["Bug"],
    baseStats: [50, 20, 55, 30, 25, 25]
  },
  {
    nationalNumber: 12,
    name: "Butterfree",
    types: ["Bug", "Flying"],
    baseStats: [60, 45, 50, 70, 90, 80]
  },
  {
    nationalNumber: 13,
    name: "Weedle",
    types: ["Bug", "Poison"],
    baseStats: [40, 35, 30, 50, 20, 20]
  },
  {
    nationalNumber: 14,
    name: "Kakuna",
    types: ["Bug", "Poison"],
    baseStats: [45, 25, 50, 35, 25, 25]
  },
  {
    nationalNumber: 15,
    name: "Beedrill",
    types: ["Bug", "Poison"],
    baseStats: [65, 90, 40, 75, 45, 80]
  },
  {
    nationalNumber: 15,
    name: "Mega Beedrill",
    types: ["Bug", "Poison"],
    baseStats: [65, 150, 40, 145, 15, 80]
  },
  {
    nationalNumber: 16,
    name: "Pidgey",
    types: ["Normal", "Flying"],
    baseStats: [40, 45, 40, 56, 35, 35]
  },
  {
    nationalNumber: 17,
    name: "Pidgeotto",
    types: ["Normal", "Flying"],
    baseStats: [63, 60, 55, 71, 50, 50]
  },
  {
    nationalNumber: 18,
    name: "Mega Pidgeot",
    types: ["Normal", "Flying"],
    baseStats: [83, 80, 80, 121, 135, 80]
  },
  {
    nationalNumber: 18,
    name: "Pidgeot",
    types: ["Normal", "Flying"],
    baseStats: [83, 80, 75, 101, 70, 70]
  },
  {
    nationalNumber: 19,
    name: "Alolan Rattata",
    types: ["Normal", "Dark"],
    baseStats: [30, 56, 35, 72, 25, 35]
  },
  {
    nationalNumber: 19,
    name: "Rattata",
    types: ["Normal"],
    baseStats: [30, 56, 35, 72, 25, 35]
  },
  {
    nationalNumber: 20,
    name: "Alolan Raticate",
    types: ["Normal", "Dark"],
    baseStats: [75, 71, 70, 77, 40, 80]
  },
  {
    nationalNumber: 20,
    name: "Raticate",
    types: ["Normal"],
    baseStats: [55, 81, 60, 97, 50, 70]
  },
  {
    nationalNumber: 21,
    name: "Spearow",
    types: ["Normal", "Flying"],
    baseStats: [40, 60, 30, 70, 31, 31]
  },
  {
    nationalNumber: 22,
    name: "Fearow",
    types: ["Normal", "Flying"],
    baseStats: [65, 90, 65, 100, 61, 61]
  },
  {
    nationalNumber: 23,
    name: "Ekans",
    types: ["Poison"],
    baseStats: [35, 60, 44, 55, 40, 54]
  },
  {
    nationalNumber: 24,
    name: "Arbok",
    types: ["Poison"],
    baseStats: [60, 95, 69, 80, 65, 79]
  },
  {
    nationalNumber: 25,
    name: "Pikachu",
    types: ["Electric"],
    baseStats: [35, 55, 40, 90, 50, 50]
  },
  {
    nationalNumber: 26,
    name: "Raichu",
    types: ["Electric"],
    baseStats: [60, 90, 55, 110, 90, 80]
  },
  {
    nationalNumber: 26,
    name: "Alolan Raichu",
    types: ["Electric", "Psychic"],
    baseStats: [60, 85, 50, 110, 95, 85]
  },
  {
    nationalNumber: 27,
    name: "Sandshrew",
    types: ["Ground"],
    baseStats: [50, 75, 85, 40, 20, 30]
  },
  {
    nationalNumber: 27,
    name: "Alolan Sandshrew",
    types: ["Ice", "Steel"],
    baseStats: [50, 75, 90, 40, 10, 35]
  },
  {
    nationalNumber: 28,
    name: "Sandslash",
    types: ["Ground"],
    baseStats: [75, 100, 110, 65, 45, 55]
  },
  {
    nationalNumber: 28,
    name: "Alolan Sandslash",
    types: ["Ice", "Steel"],
    baseStats: [75, 100, 120, 65, 25, 65]
  },
  {
    nationalNumber: 29,
    name: "NidoranF",
    types: ["Poison"],
    baseStats: [55, 47, 52, 41, 40, 40]
  },
  {
    nationalNumber: 30,
    name: "Nidorina",
    types: ["Poison"],
    baseStats: [70, 62, 67, 56, 55, 55]
  },
  {
    nationalNumber: 31,
    name: "Nidoqueen",
    types: ["Poison", "Ground"],
    baseStats: [90, 92, 87, 76, 75, 85]
  },
  {
    nationalNumber: 32,
    name: "NidoranM",
    types: ["Poison"],
    baseStats: [46, 57, 40, 50, 40, 40]
  },
  {
    nationalNumber: 33,
    name: "Nidorino",
    types: ["Poison"],
    baseStats: [61, 72, 57, 65, 55, 55]
  },
  {
    nationalNumber: 34,
    name: "Nidoking",
    types: ["Poison", "Ground"],
    baseStats: [81, 102, 77, 85, 85, 75]
  },
  {
    nationalNumber: 35,
    name: "Clefairy",
    types: ["Fairy"],
    baseStats: [70, 45, 48, 35, 60, 65]
  },
  {
    nationalNumber: 36,
    name: "Clefable",
    types: ["Fairy"],
    baseStats: [95, 70, 73, 60, 95, 90]
  },
  {
    nationalNumber: 37,
    name: "Vulpix",
    types: ["Fire"],
    baseStats: [38, 41, 40, 65, 50, 65]
  },
  {
    nationalNumber: 37,
    name: "Alolan Vulpix",
    types: ["Ice"],
    baseStats: [38, 41, 40, 65, 50, 65]
  },
  {
    nationalNumber: 38,
    name: "Alolan Ninetales",
    types: ["Ice", "Fairy"],
    baseStats: [73, 67, 75, 109, 81, 100]
  },
  {
    nationalNumber: 38,
    name: "Ninetales",
    types: ["Fire"],
    baseStats: [73, 76, 75, 100, 81, 100]
  },
  {
    nationalNumber: 39,
    name: "Jigglypuff",
    types: ["Normal", "Fairy"],
    baseStats: [115, 45, 20, 20, 45, 25]
  },
  {
    nationalNumber: 40,
    name: "Wigglytuff",
    types: ["Normal", "Fairy"],
    baseStats: [140, 70, 45, 45, 85, 50]
  },
  {
    nationalNumber: 41,
    name: "Zubat",
    types: ["Poison", "Flying"],
    baseStats: [40, 45, 35, 55, 30, 40]
  },
  {
    nationalNumber: 42,
    name: "Golbat",
    types: ["Poison", "Flying"],
    baseStats: [75, 80, 70, 90, 65, 75]
  },
  {
    nationalNumber: 43,
    name: "Oddish",
    types: ["Grass", "Poison"],
    baseStats: [45, 50, 55, 30, 75, 65]
  },
  {
    nationalNumber: 44,
    name: "Gloom",
    types: ["Grass", "Poison"],
    baseStats: [60, 65, 70, 40, 85, 75]
  },
  {
    nationalNumber: 45,
    name: "Vileplume",
    types: ["Grass", "Poison"],
    baseStats: [75, 80, 85, 50, 110, 90]
  },
  {
    nationalNumber: 46,
    name: "Paras",
    types: ["Bug", "Grass"],
    baseStats: [35, 70, 55, 25, 45, 55]
  },
  {
    nationalNumber: 47,
    name: "Parasect",
    types: ["Bug", "Grass"],
    baseStats: [60, 95, 80, 30, 60, 80]
  },
  {
    nationalNumber: 48,
    name: "Venonat",
    types: ["Bug", "Poison"],
    baseStats: [60, 55, 50, 45, 40, 55]
  },
  {
    nationalNumber: 49,
    name: "Venomoth",
    types: ["Bug", "Poison"],
    baseStats: [70, 65, 60, 90, 90, 75]
  },
  {
    nationalNumber: 50,
    name: "Diglett",
    types: ["Ground"],
    baseStats: [10, 55, 25, 95, 35, 45]
  },
  {
    nationalNumber: 50,
    name: "Alolan Diglett",
    types: ["Ground", "Steel"],
    baseStats: [10, 55, 30, 90, 35, 45]
  },
  {
    nationalNumber: 51,
    name: "Alolan Dugtrio",
    types: ["Ground", "Steel"],
    baseStats: [35, 100, 60, 110, 50, 70]
  },
  {
    nationalNumber: 51,
    name: "Dugtrio",
    types: ["Ground"],
    baseStats: [35, 100, 50, 120, 50, 70]
  },
  {
    nationalNumber: 52,
    name: "Meowth",
    types: ["Normal"],
    baseStats: [40, 45, 35, 90, 40, 40]
  },
  {
    nationalNumber: 52,
    name: "Alolan Meowth",
    types: ["Dark"],
    baseStats: [40, 35, 35, 90, 50, 40]
  },
  {
    nationalNumber: 53,
    name: "Alolan Persian",
    types: ["Dark"],
    baseStats: [65, 60, 60, 115, 75, 65]
  },
  {
    nationalNumber: 53,
    name: "Persian",
    types: ["Normal"],
    baseStats: [65, 70, 60, 115, 65, 65]
  },
  {
    nationalNumber: 54,
    name: "Psyduck",
    types: ["Water"],
    baseStats: [50, 52, 48, 55, 65, 50]
  },
  {
    nationalNumber: 55,
    name: "Golduck",
    types: ["Water"],
    baseStats: [80, 82, 78, 85, 95, 80]
  },
  {
    nationalNumber: 56,
    name: "Mankey",
    types: ["Fighting"],
    baseStats: [40, 80, 35, 70, 35, 45]
  },
  {
    nationalNumber: 57,
    name: "Primeape",
    types: ["Fighting"],
    baseStats: [65, 105, 60, 95, 60, 70]
  },
  {
    nationalNumber: 58,
    name: "Growlithe",
    types: ["Fire"],
    baseStats: [55, 70, 45, 60, 70, 50]
  },
  {
    nationalNumber: 59,
    name: "Arcanine",
    types: ["Fire"],
    baseStats: [90, 110, 80, 95, 100, 80]
  },
  {
    nationalNumber: 60,
    name: "Poliwag",
    types: ["Water"],
    baseStats: [40, 50, 40, 90, 40, 40]
  },
  {
    nationalNumber: 61,
    name: "Poliwhirl",
    types: ["Water"],
    baseStats: [65, 65, 65, 90, 50, 50]
  },
  {
    nationalNumber: 62,
    name: "Poliwrath",
    types: ["Water", "Fighting"],
    baseStats: [90, 95, 95, 70, 70, 90]
  },
  {
    nationalNumber: 63,
    name: "Abra",
    types: ["Psychic"],
    baseStats: [25, 20, 15, 90, 105, 55]
  },
  {
    nationalNumber: 64,
    name: "Kadabra",
    types: ["Psychic"],
    baseStats: [40, 35, 30, 105, 120, 70]
  },
  {
    nationalNumber: 65,
    name: "Mega Alakazam",
    types: ["Psychic"],
    baseStats: [55, 50, 65, 150, 175, 105]
  },
  {
    nationalNumber: 65,
    name: "Alakazam",
    types: ["Psychic"],
    baseStats: [55, 50, 45, 120, 135, 95]
  },
  {
    nationalNumber: 66,
    name: "Machop",
    types: ["Fighting"],
    baseStats: [70, 80, 50, 35, 35, 35]
  },
  {
    nationalNumber: 67,
    name: "Machoke",
    types: ["Fighting"],
    baseStats: [80, 100, 70, 45, 50, 60]
  },
  {
    nationalNumber: 68,
    name: "Machamp",
    types: ["Fighting"],
    baseStats: [90, 130, 80, 55, 65, 85]
  },
  {
    nationalNumber: 69,
    name: "Bellsprout",
    types: ["Grass", "Poison"],
    baseStats: [50, 75, 35, 40, 70, 30]
  },
  {
    nationalNumber: 70,
    name: "Weepinbell",
    types: ["Grass", "Poison"],
    baseStats: [65, 90, 50, 55, 85, 45]
  },
  {
    nationalNumber: 71,
    name: "Victreebel",
    types: ["Grass", "Poison"],
    baseStats: [80, 105, 65, 70, 100, 70]
  },
  {
    nationalNumber: 72,
    name: "Tentacool",
    types: ["Water", "Poison"],
    baseStats: [40, 40, 35, 70, 50, 100]
  },
  {
    nationalNumber: 73,
    name: "Tentacruel",
    types: ["Water", "Poison"],
    baseStats: [80, 70, 65, 100, 80, 120]
  },
  {
    nationalNumber: 74,
    name: "Geodude",
    types: ["Rock", "Ground"],
    baseStats: [40, 80, 100, 20, 30, 30]
  },
  {
    nationalNumber: 74,
    name: "Alolan Geodude",
    types: ["Rock", "Electric"],
    baseStats: [40, 80, 100, 20, 30, 30]
  },
  {
    nationalNumber: 75,
    name: "Alolan Graveler",
    types: ["Rock", "Electric"],
    baseStats: [55, 95, 115, 35, 45, 45]
  },
  {
    nationalNumber: 75,
    name: "Graveler",
    types: ["Rock", "Ground"],
    baseStats: [55, 95, 115, 35, 45, 45]
  },
  {
    nationalNumber: 76,
    name: "Alolan Golem",
    types: ["Rock", "Electric"],
    baseStats: [80, 120, 130, 45, 55, 65]
  },
  {
    nationalNumber: 76,
    name: "Golem",
    types: ["Rock", "Ground"],
    baseStats: [80, 120, 130, 45, 55, 65]
  },
  {
    nationalNumber: 77,
    name: "Ponyta",
    types: ["Fire"],
    baseStats: [50, 85, 55, 90, 65, 65]
  },
  {
    nationalNumber: 78,
    name: "Rapidash",
    types: ["Fire"],
    baseStats: [65, 100, 70, 105, 80, 80]
  },
  {
    nationalNumber: 79,
    name: "Slowpoke",
    types: ["Water", "Psychic"],
    baseStats: [90, 65, 65, 15, 40, 40]
  },
  {
    nationalNumber: 80,
    name: "Slowbro",
    types: ["Water", "Psychic"],
    baseStats: [95, 75, 110, 30, 100, 80]
  },
  {
    nationalNumber: 80,
    name: "Mega Slowbro",
    types: ["Water", "Psychic"],
    baseStats: [95, 75, 180, 30, 130, 80]
  },
  {
    nationalNumber: 81,
    name: "Magnemite",
    types: ["Electric", "Steel"],
    baseStats: [25, 35, 70, 45, 95, 55]
  },
  {
    nationalNumber: 82,
    name: "Magneton",
    types: ["Electric", "Steel"],
    baseStats: [50, 60, 95, 70, 120, 70]
  },
  {
    nationalNumber: 83,
    name: "Farfetchd",
    types: ["Normal", "Flying"],
    baseStats: [52, 90, 55, 60, 58, 62]
  },
  {
    nationalNumber: 84,
    name: "Doduo",
    types: ["Normal", "Flying"],
    baseStats: [35, 85, 45, 75, 35, 35]
  },
  {
    nationalNumber: 85,
    name: "Dodrio",
    types: ["Normal", "Flying"],
    baseStats: [60, 110, 70, 110, 60, 60]
  },
  {
    nationalNumber: 86,
    name: "Seel",
    types: ["Water"],
    baseStats: [65, 45, 55, 45, 45, 70]
  },
  {
    nationalNumber: 87,
    name: "Dewgong",
    types: ["Water", "Ice"],
    baseStats: [90, 70, 80, 70, 70, 95]
  },
  {
    nationalNumber: 88,
    name: "Alolan Grimer",
    types: ["Poison", "Dark"],
    baseStats: [80, 80, 50, 25, 40, 50]
  },
  {
    nationalNumber: 88,
    name: "Grimer",
    types: ["Poison"],
    baseStats: [80, 80, 50, 25, 40, 50]
  },
  {
    nationalNumber: 89,
    name: "Alolan Muk",
    types: ["Poison", "Dark"],
    baseStats: [105, 105, 75, 50, 65, 100]
  },
  {
    nationalNumber: 89,
    name: "Muk",
    types: ["Poison"],
    baseStats: [105, 105, 75, 50, 65, 100]
  },
  {
    nationalNumber: 90,
    name: "Shellder",
    types: ["Water"],
    baseStats: [30, 65, 100, 40, 45, 25]
  },
  {
    nationalNumber: 91,
    name: "Cloyster",
    types: ["Water", "Ice"],
    baseStats: [50, 95, 180, 70, 85, 45]
  },
  {
    nationalNumber: 92,
    name: "Gastly",
    types: ["Ghost", "Poison"],
    baseStats: [30, 35, 30, 80, 100, 35]
  },
  {
    nationalNumber: 93,
    name: "Haunter",
    types: ["Ghost", "Poison"],
    baseStats: [45, 50, 45, 95, 115, 55]
  },
  {
    nationalNumber: 94,
    name: "Gengar",
    types: ["Ghost", "Poison"],
    baseStats: [60, 65, 60, 110, 130, 75]
  },
  {
    nationalNumber: 94,
    name: "Mega Gengar",
    types: ["Ghost", "Poison"],
    baseStats: [60, 65, 80, 130, 170, 95]
  },
  {
    nationalNumber: 95,
    name: "Onix",
    types: ["Rock", "Ground"],
    baseStats: [35, 45, 160, 70, 30, 45]
  },
  {
    nationalNumber: 96,
    name: "Drowzee",
    types: ["Psychic"],
    baseStats: [60, 48, 45, 42, 43, 90]
  },
  {
    nationalNumber: 97,
    name: "Hypno",
    types: ["Psychic"],
    baseStats: [85, 73, 70, 67, 73, 115]
  },
  {
    nationalNumber: 98,
    name: "Krabby",
    types: ["Water"],
    baseStats: [30, 105, 90, 50, 25, 25]
  },
  {
    nationalNumber: 99,
    name: "Kingler",
    types: ["Water"],
    baseStats: [55, 130, 115, 75, 50, 50]
  },
  {
    nationalNumber: 100,
    name: "Voltorb",
    types: ["Electric"],
    baseStats: [40, 30, 50, 100, 55, 55]
  },
  {
    nationalNumber: 101,
    name: "Electrode",
    types: ["Electric"],
    baseStats: [60, 50, 70, 150, 80, 80]
  },
  {
    nationalNumber: 102,
    name: "Exeggcute",
    types: ["Grass", "Psychic"],
    baseStats: [60, 40, 80, 40, 60, 45]
  },
  {
    nationalNumber: 103,
    name: "Alolan Exeggutor",
    types: ["Grass", "Dragon"],
    baseStats: [95, 105, 85, 45, 125, 75]
  },
  {
    nationalNumber: 103,
    name: "Exeggutor",
    types: ["Grass", "Psychic"],
    baseStats: [95, 95, 85, 55, 125, 75]
  },
  {
    nationalNumber: 104,
    name: "Cubone",
    types: ["Ground"],
    baseStats: [50, 50, 95, 35, 40, 50]
  },
  {
    nationalNumber: 105,
    name: "Alolan Marowak",
    types: ["Fire", "Ghost"],
    baseStats: [60, 80, 110, 45, 50, 80]
  },
  {
    nationalNumber: 105,
    name: "Marowak",
    types: ["Ground"],
    baseStats: [60, 80, 110, 45, 50, 80]
  },
  {
    nationalNumber: 106,
    name: "Hitmonlee",
    types: ["Fighting"],
    baseStats: [50, 120, 53, 87, 35, 110]
  },
  {
    nationalNumber: 107,
    name: "Hitmonchan",
    types: ["Fighting"],
    baseStats: [50, 105, 79, 76, 35, 110]
  },
  {
    nationalNumber: 108,
    name: "Lickitung",
    types: ["Normal"],
    baseStats: [90, 55, 75, 30, 60, 75]
  },
  {
    nationalNumber: 109,
    name: "Koffing",
    types: ["Poison"],
    baseStats: [40, 65, 95, 35, 60, 45]
  },
  {
    nationalNumber: 110,
    name: "Weezing",
    types: ["Poison"],
    baseStats: [65, 90, 120, 60, 85, 70]
  },
  {
    nationalNumber: 111,
    name: "Rhyhorn",
    types: ["Ground", "Rock"],
    baseStats: [80, 85, 95, 25, 30, 30]
  },
  {
    nationalNumber: 112,
    name: "Rhydon",
    types: ["Ground", "Rock"],
    baseStats: [105, 130, 120, 40, 45, 45]
  },
  {
    nationalNumber: 113,
    name: "Chansey",
    types: ["Normal"],
    baseStats: [250, 5, 5, 50, 35, 105]
  },
  {
    nationalNumber: 114,
    name: "Tangela",
    types: ["Grass"],
    baseStats: [65, 55, 115, 60, 100, 40]
  },
  {
    nationalNumber: 115,
    name: "Kangaskhan",
    types: ["Normal"],
    baseStats: [105, 95, 80, 90, 40, 80]
  },
  {
    nationalNumber: 115,
    name: "Mega Kangaskhan",
    types: ["Normal"],
    baseStats: [105, 125, 100, 100, 60, 100]
  },
  {
    nationalNumber: 116,
    name: "Horsea",
    types: ["Water"],
    baseStats: [30, 40, 70, 60, 70, 25]
  },
  {
    nationalNumber: 117,
    name: "Seadra",
    types: ["Water"],
    baseStats: [55, 65, 95, 85, 95, 45]
  },
  {
    nationalNumber: 118,
    name: "Goldeen",
    types: ["Water"],
    baseStats: [45, 67, 60, 63, 35, 50]
  },
  {
    nationalNumber: 119,
    name: "Seaking",
    types: ["Water"],
    baseStats: [80, 92, 65, 68, 65, 80]
  },
  {
    nationalNumber: 120,
    name: "Staryu",
    types: ["Water"],
    baseStats: [30, 45, 55, 85, 70, 55]
  },
  {
    nationalNumber: 121,
    name: "Starmie",
    types: ["Water", "Psychic"],
    baseStats: [60, 75, 85, 115, 100, 85]
  },
  {
    nationalNumber: 122,
    name: "Mr Mime",
    types: ["Psychic", "Fairy"],
    baseStats: [40, 45, 65, 90, 100, 120]
  },
  {
    nationalNumber: 123,
    name: "Scyther",
    types: ["Bug", "Flying"],
    baseStats: [70, 110, 80, 105, 55, 80]
  },
  {
    nationalNumber: 124,
    name: "Jynx",
    types: ["Ice", "Psychic"],
    baseStats: [65, 50, 35, 95, 115, 95]
  },
  {
    nationalNumber: 125,
    name: "Electabuzz",
    types: ["Electric"],
    baseStats: [65, 83, 57, 105, 95, 85]
  },
  {
    nationalNumber: 126,
    name: "Magmar",
    types: ["Fire"],
    baseStats: [65, 95, 57, 93, 100, 85]
  },
  {
    nationalNumber: 127,
    name: "Mega Pinsir",
    types: ["Bug", "Flying"],
    baseStats: [65, 155, 120, 105, 65, 90]
  },
  {
    nationalNumber: 127,
    name: "Pinsir",
    types: ["Bug"],
    baseStats: [65, 125, 100, 85, 55, 70]
  },
  {
    nationalNumber: 128,
    name: "Tauros",
    types: ["Normal"],
    baseStats: [75, 100, 95, 110, 40, 70]
  },
  {
    nationalNumber: 129,
    name: "Magikarp",
    types: ["Water"],
    baseStats: [20, 10, 55, 80, 15, 20]
  },
  {
    nationalNumber: 130,
    name: "Mega Gyarados",
    types: ["Water", "Dark"],
    baseStats: [95, 155, 109, 81, 70, 130]
  },
  {
    nationalNumber: 130,
    name: "Gyarados",
    types: ["Water", "Flying"],
    baseStats: [95, 125, 79, 81, 60, 100]
  },
  {
    nationalNumber: 131,
    name: "Lapras",
    types: ["Water", "Ice"],
    baseStats: [130, 85, 80, 60, 85, 95]
  },
  {
    nationalNumber: 132,
    name: "Ditto",
    types: ["Normal"],
    baseStats: [48, 48, 48, 48, 48, 48]
  },
  {
    nationalNumber: 133,
    name: "Eevee",
    types: ["Normal"],
    baseStats: [55, 55, 50, 55, 45, 65]
  },
  {
    nationalNumber: 134,
    name: "Vaporeon",
    types: ["Water"],
    baseStats: [130, 65, 60, 65, 110, 95]
  },
  {
    nationalNumber: 135,
    name: "Jolteon",
    types: ["Electric"],
    baseStats: [65, 65, 60, 130, 110, 95]
  },
  {
    nationalNumber: 136,
    name: "Flareon",
    types: ["Fire"],
    baseStats: [65, 130, 60, 65, 95, 110]
  },
  {
    nationalNumber: 137,
    name: "Porygon",
    types: ["Normal"],
    baseStats: [65, 60, 70, 40, 85, 75]
  },
  {
    nationalNumber: 138,
    name: "Omanyte",
    types: ["Rock", "Water"],
    baseStats: [35, 40, 100, 35, 90, 55]
  },
  {
    nationalNumber: 139,
    name: "Omastar",
    types: ["Rock", "Water"],
    baseStats: [70, 60, 125, 55, 115, 70]
  },
  {
    nationalNumber: 140,
    name: "Kabuto",
    types: ["Rock", "Water"],
    baseStats: [30, 80, 90, 55, 55, 45]
  },
  {
    nationalNumber: 141,
    name: "Kabutops",
    types: ["Rock", "Water"],
    baseStats: [60, 115, 105, 80, 65, 70]
  },
  {
    nationalNumber: 142,
    name: "Aerodactyl",
    types: ["Rock", "Flying"],
    baseStats: [80, 105, 65, 130, 60, 75]
  },
  {
    nationalNumber: 142,
    name: "Mega Aerodactyl",
    types: ["Rock", "Flying"],
    baseStats: [80, 135, 85, 150, 70, 95]
  },
  {
    nationalNumber: 143,
    name: "Snorlax",
    types: ["Normal"],
    baseStats: [160, 110, 65, 30, 65, 110]
  },
  {
    nationalNumber: 144,
    name: "Articuno",
    types: ["Ice", "Flying"],
    baseStats: [90, 85, 100, 85, 95, 125]
  },
  {
    nationalNumber: 145,
    name: "Zapdos",
    types: ["Electric", "Flying"],
    baseStats: [90, 90, 85, 100, 125, 90]
  },
  {
    nationalNumber: 146,
    name: "Moltres",
    types: ["Fire", "Flying"],
    baseStats: [90, 100, 90, 90, 125, 85]
  },
  {
    nationalNumber: 147,
    name: "Dratini",
    types: ["Dragon"],
    baseStats: [41, 64, 45, 50, 50, 50]
  },
  {
    nationalNumber: 148,
    name: "Dragonair",
    types: ["Dragon"],
    baseStats: [61, 84, 65, 70, 70, 70]
  },
  {
    nationalNumber: 149,
    name: "Dragonite",
    types: ["Dragon", "Flying"],
    baseStats: [91, 134, 95, 80, 100, 100]
  },
  {
    nationalNumber: 150,
    name: "Mega Mewtwo X",
    types: ["Psychic", "Fighting"],
    baseStats: [106, 190, 100, 130, 154, 100]
  },
  {
    nationalNumber: 150,
    name: "Mega Mewtwo Y",
    types: ["Psychic"],
    baseStats: [106, 150, 70, 140, 194, 120]
  },
  {
    nationalNumber: 150,
    name: "Mewtwo",
    types: ["Psychic"],
    baseStats: [106, 110, 90, 130, 154, 90]
  },
  {
    nationalNumber: 151,
    name: "Mew",
    types: ["Psychic"],
    baseStats: [100, 100, 100, 100, 100, 100]
  },
  {
    nationalNumber: 891,
    name: "Meltan",
    types: ["Steel"],
    baseStats: [46, 65, 65, 34, 55, 35]
  },
  {
    nationalNumber: 892,
    name: "Melmetal",
    types: ["Steel"],
    baseStats: [135, 143, 143, 34, 80, 65]
  }
];
