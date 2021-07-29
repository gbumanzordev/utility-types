import { IUser } from "../interfaces/user.interface";
import { person } from "./partial";
import { company } from "./required";

type CustomOmit<Type, Keys extends keyof any> = Pick<
  Type,
  Exclude<keyof Type, Keys>
>;

type OmittedPerson = CustomOmit<IUser, "company">;

const p: OmittedPerson & { company: string } = {
  ...person,
  company: company.name,
};

console.log(p);
