import { person } from "./partial";
import { IUser } from "../interfaces/user.interface";

const nonReadonlyPerson: IUser = { ...person };

nonReadonlyPerson.age = 23;

type CustomReadonly<Type> = {
  readonly [Key in keyof Type]: Type[Key];
};

const readonlyPerson: CustomReadonly<IUser> = { ...nonReadonlyPerson };

// readonlyPerson.age = 23; // Gives an error.

console.log(nonReadonlyPerson, readonlyPerson);
