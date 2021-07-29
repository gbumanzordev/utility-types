import { ICountry } from "./country.interface";
import { ICompany } from "./company.interface";
import { Sizes } from "./sizes.type";

export interface IUser {
  name: string;
  lastName: string;
  age: number;
  phone: number;
  country: ICountry;
  company?: ICompany;
  shirtSize?: Sizes;
}
