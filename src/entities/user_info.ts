import { OrganizationInterface } from "./organization";

export interface UserInfoInterface{
        userid: string,
        name: string,
        birthdate: string,
        age: number,
        organization: OrganizationInterface
        }
export class UserInfo implements UserInfoInterface{
  constructor( 
    public userid: string,
    public name: string,
    public birthdate: string,
    public age: number,
    public organization: OrganizationInterface){
  }
   

}