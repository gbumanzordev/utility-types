import { person } from "./partial";
import { IUser } from "../interfaces/user.interface";
import { ICompany } from "../interfaces/company.interface";

export const company: ICompany = {
  address: "Calle La Reforma, CC San Benito, San Salvador, San Salvador",
  employees: 1234,
  name: "Applaudo Studios",
  revenue: 12345678,
};

const personClone: IUser = { ...person };

type CustomRequired<Type> = {
  [Key in keyof Type]-?: Type[Key];
};

const newRequiredPerson: CustomRequired<IUser> = {
  ...person,
  company,
  shirtSize: "md",
};

console.log(personClone, newRequiredPerson);
