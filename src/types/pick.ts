import { IUser } from "../interfaces/user.interface";

type CustomPick<Type, Keys extends keyof Type> = {
  [Key in Keys]: Type[Key];
};

type PickedProps = "age" | "name" | "lastName";

const pickedPerson: CustomPick<IUser, PickedProps> = {
  age: 12,
  name: "Peter",
  lastName: "Parker",
};

console.log(pickedPerson);
