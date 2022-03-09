
var str = '{"fname" : "Virat", "lname" : "Kohli"}';

//var obj = eval(str);
var obj=JSON.parse(str);

obj.lname="Dhoni"
alert(obj.fname + " , " + obj.lname);