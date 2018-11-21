# PokéLAB Let's Go

Pokémon data & utilities to build tools.

## Use it

```javascript
const { Stats } = require("pokelab-lets-go");

const CharizardId = 6;
const YForm = 2;
const stats = Stats.getStats(CharizardId, YForm);
console.log(`
HP: ${stats[Stats.HP]}
Attack: ${stats[Stats.ATTACK]}
Defense: ${stats[Stats.DEFENSE]}
Sp. Attack: ${stats[Stats.SPECIAL_ATTACK]}
Sp. Defense: ${stats[Stats.SPECIAL_DEFENSE]}
Speed: ${stats[Stats.SPEED]}
`);
```
