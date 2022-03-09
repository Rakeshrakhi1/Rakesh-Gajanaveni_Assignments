var str = '({"fname" : "sai", "lname" : "jaswanth"})';
var obj = eval(str);
obj.lname = "Dhoni";
alert(obj.fname + " , " + obj.lname);