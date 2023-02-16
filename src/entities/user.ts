import { Gender } from "./gender.enum";
export interface UserInterface{
    userid: string
     name: string
     gender: Gender
}
export class User implements UserInterface{
   constructor(
    public name:string,
    public userid:string,
    public gender:Gender
   ){}

}