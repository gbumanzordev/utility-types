import { Sizes } from "../interfaces/sizes.type";
import { IUser } from "../interfaces/user.interface";
import { person } from "./partial";
import { company } from "./required";

const people: Required<IUser>[] = [
  { ...person, shirtSize: "md", company },
  { ...person, shirtSize: "sm", company },
  { ...person, shirtSize: "lg", company },
];

type CustomRecord<Keys extends keyof any, Type> = {
  [Key in Keys]: Type;
};

const records: CustomRecord<Sizes, number> = {
  lg: 0,
  md: 0,
  sm: 0,
  xs: 0,
  UC: 0,
};

people.forEach(({ shirtSize }) => {
  records[shirtSize]++;
});

console.log(records);
