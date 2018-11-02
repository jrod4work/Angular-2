interface Person {
    firstName: string;
    lastName: string;
    age?: number;

}

interface Contact {
    phoneNumber: number;
    email: string;
    address?: string;
}

class ContactCard implements Person, Contact {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;

    constructor(fname:string, lname:string, phone:number, mail:string){
        this.firstName = fname;
        this.lastName = lname;
        this.phoneNumber = phone;
        this.email = mail;
    }

    message(): void {
        console.log("Name: " + this.firstName + " " + this.lastName + ", Phone: " + this.phoneNumber + ", Email: " + this.email );
    }
    greeting(): string {
        return this.firstName + " " + this.lastName ;
    }

}

let newPerson = new ContactCard("Cassandra", "matos", 2322222222, "cassandra.matos@a;alskdjf.com");

newPerson.message();