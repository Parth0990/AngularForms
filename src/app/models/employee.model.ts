export class Employee{
    id: number=0;
    name: string="";
    gender: string="";
    email?:string;
    password?: string;
    phone?:any;
    confirmPassword?: string;
    contactPreference:string="";
    dateOfBirth?:Date;
    department:string="";
    isActive:boolean=false;
    photoPath?:string=""
}