import { Sizes } from "../interfaces/sizes.type";

type ExcludedSizes = "lg";

type CustomExclude<Type, Union> = Type extends Union ? never : Type;

type AllowedSizes = CustomExclude<Sizes, ExcludedSizes>;

// const size: AllowedSizes = "lg"; // Gives an error
const secondSize: AllowedSizes = "sm";

console.log("size", secondSize);
