import { Sizes } from "../interfaces/sizes.type";

const sizes: Sizes = "lg";

type UppercaseSizes = Uppercase<Sizes>;
type LowercaseSizes = Lowercase<Sizes>;

const upperCasedSizes: UppercaseSizes = "LG";
const lowerCasedSizes: LowercaseSizes = "md";

console.log(sizes, upperCasedSizes, lowerCasedSizes);
