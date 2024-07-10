import usaPop from "./usa.js";
import pakPop from "./pak.js";
import { cities as pakCities } from "./pak.js"; // here we have modified the cities variable name because it was not exported as default.
import { cities as usacities } from "./usa.js";
console.log(`USA population is ${usaPop} \nPakistan population is ${pakPop}`)
console.log(`These are some of pakistan's cities ${pakCities}`);
console.log(`These are some of America's cities ${usacities}`);
