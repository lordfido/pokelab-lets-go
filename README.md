# PokéLAB Let's Go

Pokémon data & utilities to build tools.

## Use it

```javascript
const { Pokedex, Types } = require("pokelab-lets-go");

const electricPokemon = Pokedex.all.filter(({ types }) =>
  types.contains(Types.Electric)
);
```
