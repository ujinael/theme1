export interface OrganizationInterface{
    name:string
    position:string
}
export class Organization implements OrganizationInterface{
    constructor(
        public name:string,
        public position:string
    ){}
}