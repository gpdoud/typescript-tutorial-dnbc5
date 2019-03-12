class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    isReview: boolean;
    isAdmin: boolean;
    active: boolean;

    constructor() {

    }
}

let user: User = new User();

user.id = 0;
user.username = "ABC";
user.password = "CBA"
user.firstname = "XXX";
user.lastname = "ZZZ";
user.phone = "555-555-1212"
user.email = "abc@cba.com";
user.isReview = true;
user.isAdmin = true;
user.active = true;

console.log(user);