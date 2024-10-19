import multiply, { add, subtract } from "./mathModule.js";
import { toUpperCase, toLowerCase } from "./stringModule.js";
import { findMax, reverseArray } from "./arrayModule.js";
import { addAndLogUpper } from "./mathModule.js";
import { multiplyArrayMax } from "./mathModule.js";

add(5, 9);
subtract(24, 3);
multiply(5,5);

toUpperCase("hello");
toLowerCase("goodbye");

findMax(1,5,4,6,2);
//reverseArray(1,2,3,4,5)
//addAndLogUpper(5, 5);

multiplyArrayMax(3,2,5,3);