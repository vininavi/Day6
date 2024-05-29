class Person {
    constructor(firstName, lastName, age, gender, occupation , EmailId , ContactNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
        this.EmailId = EmailId;
        this.ContactNumber = ContactNumber;
    }

    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    
    getDescription() {
        return `${this.getFullName()}, ${this.age} years old, ${this.gender}, ${this.occupation}, ${this.EmailId} , ${this.ContactNumber}}`;
    }


}


let per = new Person("Naveen", "Kumar", 27, "Male", "Software Engineer","abc@gmail.com","8764539195");
console.log(per.getDescription()); 



