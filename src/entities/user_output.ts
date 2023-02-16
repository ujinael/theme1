import { Gender } from "./gender.enum";
import { UserInterface } from "./user";
import { UserInfoInterface } from "./user_info";

export interface UserOutputInterface{
        name: string,
        position: string,
        age: number,
        gender: Gender  
}
export class UserOutput implements UserOutputInterface{
static from(user:UserInterface,userInfo:UserInfoInterface):UserOutputInterface{
    return new UserOutput(user.name,userInfo.organization.position,userInfo.age,user.gender)
}
constructor (  
    public name: string,
    public position: string,
    public age: number,
    public gender: Gender){}

}