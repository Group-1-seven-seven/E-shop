export interface User {
    id: string,
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    userName: string,
    password: string,
    role: string,
    condition: boolean,
    contactNo: number,
    dob: Date,
    loi: [],
    address: {
        street: string,
        brgy: string,
        city: string,
        province: string,
    }
    
}
