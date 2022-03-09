
var per = {
    fname:"sai",
    lname:"jaswanth",
    age:21,
    skills:["UX", "UI", "HTML" , "CSS", "Design Thinking"],
    address: {
        city:"Suryapet",
        pincode:508213,
    },
    dateOfBirth:"20-Nov-1999",
    married: false,
    profession:"Developer"
};

document.write(person1);
var skillsArray = ["javascript","Spring","GitHub"];
var Person= function(fname,lname,age,Array, DOB,address, married,profession){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skills=skillsArray;
    this.dateOfBirth = DOB;
    this.address=address;
    this.married = married;
    this.profession= profession;
};


var nithinAddress={
    city:"hyderabad",
    pincode:521185,
};

var VinithAddress={
    city:"Ameerpet",
    pincode:500038,
};

NithinArray = ["C"];
VinithArray = ["HTML"];



var person1 = new Person("nithin","sarvade",22,nithinArray,"24/10/1996",nithinAddress, false, "sr-analyst");
document.write(person1)

var person2 = new Person("vinith","ravula", 21, vinithArray,"08/06/1997",vinithAddress,false,"jr-analyst");
document.write(person2)

//Sub question 2)

var mallikarjun = new Person("mallikarjun","kunchala",22,malliArray,"24/10/1996",malliAddress, false, "sr-analyst");
document.write(mallikarjun);

var abhisheik = new Person("amithab",amithab.lname,21,harishArray,"08/06/1997",amithab.address, false, "jr-analyst");
document.write(abhisheik);


//Sub question 3)
var Aarya = new Person("aarya", Aarya.lname, abhisheik.age, abhisheik.nithinAddress, "18/02/2000", abhisheik.address, true, "devloper");
document.write(Aaradhya);