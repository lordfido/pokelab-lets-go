# PokéLAB Let's Go

Pokémon data & utilities to build tools.

## Use it

```javascript
const { Pokedex, Types } = require("pokelab-lets-go");

const electricPokemon = Pokedex.All.filter(({ types }) =>
  types.includes(Types.Electric)
);
```
