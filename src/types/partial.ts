import { IUser } from "../interfaces/user.interface";

export const person: IUser = {
  age: 16,
  country: {
    abbreviation: "SV",
    code: 503,
    name: "El Salvador",
  },
  name: "John",
  lastName: "Doe",
  phone: 79222020,
};

type CustomPartial<Type> = {
  [Key in keyof Type]?: Type[Key];
};

type PartialPerson = CustomPartial<IUser> | Partial<IUser>;

const newPerson: PartialPerson = {
  age: 23,
};

console.log(person, newPerson);
