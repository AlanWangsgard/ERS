import { User } from "./User";

export interface Reimbursement {
    description:string,
    amount:number,
    status:string
    reimbId:number;
    user:User
}