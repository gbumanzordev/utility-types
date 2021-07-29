type RgbColors = "Red" | "Green" | "Blue";
type PrintingColors = "Cyan" | "Magenta" | "Yellow" | "Key";

type Colors = RgbColors | PrintingColors;

type CustomExtract<Type, Union> = Type extends Union ? Type : never;

type CYMK = CustomExtract<Colors, PrintingColors>;

const cymkColors: CYMK = "Cyan";

console.log(cymkColors);
