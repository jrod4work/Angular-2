"use strict";
var ContactCard = /** @class */ (function () {
    function ContactCard(fname, lname, phone, mail) {
        this.firstName = fname;
        this.lastName = lname;
        this.phoneNumber = phone;
        this.email = mail;
    }
    ContactCard.prototype.message = function () {
        console.log("Name: " + this.firstName + " " + this.lastName + ", Phone: " + this.phoneNumber + ", Email: " + this.email);
    };
    return ContactCard;
}());
var newPerson = new ContactCard("Cassandra", "matos", 2322222222, "cassandra.matos@a;alskdjf.com");
newPerson.message();
