    // Import eines default-Exports
// import oa from "./utils/helper.js";
import { default as oa } from "./utils/helper.js";
// Import eines benannten Exports
import {max, sabrina} from "./utils/settings.js";
    // Benannter Import eines Exports
import {Konto as K} from "./classes/Konto.js";
    // Import eines benannten Exports
import Pusteblume from "./classes/Kinderkonto.js";

oa(new K("DE6206752564419854", max.name, max.vermoegen));
oa(new Pusteblume("DE6206752564419740", sabrina.name, sabrina.vermoegen, 500));