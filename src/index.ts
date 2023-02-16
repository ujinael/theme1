import { UserInterface } from "./entities/user"
import { UserOutput, UserOutputInterface } from "./entities/user_output"
import { usersInfoArray } from "./source/userInfo"
import { usersArray } from "./source/users"
const getUsersJobPositions = (usersArray:Array<UserInterface>):Array<UserOutputInterface>=>{
return usersArray.map(user=>{
    const userInfo = usersInfoArray.find(info=>user.userid === info.userid)
    if(!userInfo)throw new Error(`информация по пользователю ${user.name} не найдена`)
    return UserOutput.from(user,userInfo)
})
}
const start = ():void=>{
const userPositions:Array<UserOutputInterface> = getUsersJobPositions(usersArray)
console.log('userPositions',userPositions);

}
start()