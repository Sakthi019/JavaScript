// var st_name="Sakthi Kumar M"
// console.log("My name is",st_name);
// var dob="30/04/2001"
// console.log("I born in",dob);
// var mark=87
// console.log("I have scored in SSLC",mark);
// var mark1=65
// console.log("I have scored in HSC",mark1);
// var mark2=58
// console.log("I have scored in Unversity",mark2);

// var inp1=100;
// var inp2="200";
// console.log(inp1+inp2);

// var inp4="sakthi";
// var inp3=100;
// console.log(inp4/inp3);
// console.log(100/0);

// var a=null;
// console.log(a);

// var b;
// console.log(b);

// var a=100;
// var b=200;
// console.log(a>b);
// console.log(a<b);

// var student_name="pavithra";
// console.log(student_name);

// console.log(typeof(student_name));

// // non primitive datatype 
// // array

// var example =[10,20,"html","css",12.4,"A"];
// example.push("javascript");//add an element in end of an array
// console.log(example);

// example.unshift("100");//add an element in beginning of an array
// console.log(example);

// example.pop();//remove an element in end of an array
// console.log(example);

// example.shift();//remove an element in beginning of an array
// console.log(example);

// var a=10;
// var b=20;
// console.log(a%b);

// var a="10";
// var b=10;
// console.log(a===b);
// console.log(a==b);

// var user="kgisl";
// var psw="kgisl@2022";
// console.log((user=="kgisl")&&(psw=="pass@123"||psw=="kgisl@2022"));
// console.log((user=="kgisl")&&(psw=="pass@123"||psw=="kgisl@2023"));

// var user_name="kgisl@2023";
// var pwd="pass@123";
// var email_id="kgisl.microcollege.in";
// var mobile="9876543210";
// //relation operators
// console.log(user_name==pwd);
// console.log(email_id==pwd);
// console.log(mobile==pwd);
// console.log(user_name===pwd);
// console.log(email_id===pwd);
// console.log(mobile===pwd);
// console.log(user_name!=pwd);
// console.log(email_id!=pwd);
// console.log(mobile!=pwd);
// //logical operators
// console.log((user_name=="kgisl@2023")&&(pwd=="pass@123"||pwd=="pass@321"));
// console.log((email_id="kgisl.microcollege.in")&&(pwd=="pass@123"||pwd=="pass@321"));
// console.log((mobile="987654321")&&(pwd=="pass@123"||pwd=="pass@321"));
// console.log((user_name=="kgisl@2023"||pwd=="pass@123")&&(email_id=="kgisl.microcollege.in"&&mobile=="9876543210")||(mobile=="9876543210"&&user_name=="kgisl@2023")&&(user_name=="kgisl@2023"||mobile=="9876543210"));

// var a=100;
// var b="200";
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(a+b);
// b=parseInt(b);
// console.log(typeof(b));
// console.log(a+b);
// var temp=parseFloat(b);
// console.log(a+temp);
// console.log(typeof(temp));

// var a="js";
// var b=100;
// a=parseInt(a);
// console.log(a);
// console.log(typeof(a));

// var us="Sakthi";
// if(us=="Sakthi"){
//     alert("Welcome"+" "+us);
//     console.log("welcome",us);
// }
// alert("after if");

// var age=21;
// if(age>=18){
//     alert("you are eligible for vote");
// } 

// var us="kgisl";
// var pw="kgisl@2023";
// if((us=="kgisl")&&(pw=="kgisl@2023")) 
// {
//     alert("welcome to"+" "+us);
// }
// alert("invalid");

// var a=100;
// var b=200;
// if(a>=b){
//     alert(a+" "+"is greaterthan"+" "+b);
// }
// alert(b+" "+"is greaterthan"+" "+a);

// var a=100;
// var b=200;
// var c=300;
// if(a>b&&a>c)
// {
//     alert("A is greater");
// }
// else if(b>a&&b>c)
// {
//     alert("B is greater");
// }
// else if(c>a&&c>b)
// {
//     alert("C is greater");
// }
// else{
//     alert("A,B,C are equal");
// }

// var us="kgisl";
// var pw="pw@123";
// var mail="microcollege.in";
// if(us=="kgisl"&&pw=="pw@123")
// {
//     alert("valid user name");
// }
// else if(mail=="miceocollege.in"&&pw=="pw@123"){
//     alert("password is correct");
// }
// else{
//     alert("Is invalid password");
// }

// var a=100;
// var b=200;
// var total;
// console.log("1.add"+"\n"+"2.sub");
// var ch=2;
// switch(ch){
//     case 1:
//         total=a+b;
//         console.log("add"+total);
//     break;
//     case 2:
//         total=a-b;
//         console.log("sub"+total);
//     break;
//     default:
//         console.log("invalid choice");
//     break;
// }

// var a=100;
// var b=200;
// var total;
// console.log("1.add"+"\n"+"2.sub");
// var ch=1;
// switch(ch){
//     case 1:
//         total=a+b;
//         console.log("add"+total);

//     case 2:
//         total=a-b;
//         console.log("sub"+total);

//     default:
//         console.log("invalid choice");
//     break;
// }

// var a=100;
// var b=200;
// var total;
// console.log("1.add"+"\n"+"2.mul"+"\n"+"3.sub"+"\n"+"4.modles"+"\n"+"5.division");
// var ch='A';
// switch(ch){
//     case 'A':
//         total=a+b;
//         console.log("add"+total);
//         break;
//     case 'M':
//         total=a*b;
//         console.log("mul"+total);
//         break;
//     case 'S':
//         total=a-b;
//         console.log("sub"+total);
//         break;
//     case 'Mo':
//         total=a%b;
//         console.log("modules"+total);
//         break;
//     case 'D':
//         total=a/b;
//         console.log("divide"+total);
//         break;
//     default:
//         console.log("invalid choice");
//     break;
// }

// var ch='e';
// switch(ch){
//     case 'a':
//         console.log("a is an vowles");
//     break;
//     case 'e':
//         console.log("e is an vowles");
//     break;
//     case 'i':
//         console.log("i is an vowles");
//     break;
//     case 'o':
//         console.log("o is an vowles");
//     break;
//     case 'u':
//         console.log("u is an vowles");
//     break;
//     default:
//         console.log("not an vowles");
//     break;
// }

// var a="10";
// var b="20";
// if(a<b){
//     if(a%2==0)
//     {
//         console.log(a+" "+"is even number");
//     }
//     console.log(a+" "+"lessthan"+" "+b);
// }

// var a=10;
// if(a%2==0){
//     console.log(a+" "+"is an even number");
// }
// else{
//     console.log(a+" "+"is an odd number");
// }

// var year=2023;
// if(year%4==0){
//     console.log(year+" "+"is an leap year")
// }
// else{
//     console.log(year+" "+"is not an leap year")
// }  

// "for loop"
// var end=10;
// for(var st=1;st<=end;st++){
//     console.log(st);
// }

// var end=10;
// for(var st=1;end>=st;end--){
//     console.log(end);
// } 

// var end=10;
// for(var st=1;st<=end;st++){
//    if(st%2!=0)
//    {
//     console.log(st);
//    }
// }

// var end=10;
// for(var st=1;st<=end;st++){
//    if(st%2==0)
//    {
//     console.log(st);
//    }
// }

// var end=10;
// for(var st=1;end>=st;end--){
//    if(end%2==0)
//    {
//     console.log(end);
//    }
// }

// var end=10;
// for(var st=1;end>=st;end--){
//    if(end%2!=0)
//    {
//     console.log(end);
//    }
// }

// var end=5;
// var f=1;
// for(var st=1;st<=end;st++){
//    f=f*st;
//    console.log(f);
// }

// "factorial"
// var end=5;
// var f=1;
// for(var st=1;st<=end;st++){
//    f=f*st;
// }
// console.log("the factorial value is "+f);

// "sum of the series"
// var end=10;
// var f=0;
// for(var st=1;st<=end;st++){
//    f=f+st;
//    console.log(f);
// }
// console.log("the sum of the series is "+f);

// "fibonacci series using swaping"
// var end=10;
// var x=-1;
// var y=1;
// var z;
// for(var st=1;st<=end;st++){
//    z=x+y;
//    x=y;
//    y=z;
//    console.log(z);
// }

// "nexted loop"
// for(var fv=0;fv<2;fv++){
//     for(var sv=0;sv<2;sv++){
//         console.log(fv+","+sv);
//     }
// }

// "pattern loop"
// var string="";
// var n=3;
// for(var r=1;r<=n;r++)
// {
//     for(var c=1;c<=n;c++)
//     {
//         string+=n;
//     }
//     string+="\n";
// }
// console.log(string);

// "while loop"
// var st=1;
// while(st<=10){
//     console.log(st);
//     st++;
// }

// "Do while loop"
// var st=1;
// do
// {
//     console.log(st);
//     st++;
// }while(st<=3);

// "functions no agument no return value"
// function demo()
// {
//     console.log("welcome");
// }
// demo();

// "functions with agument no return value"
// function demo(a)
// {
//     console.log(a+" "+"welcome");
// }
// demo("sakthi");

// var data = document.getElementById("divid");//global variable
// function sample()
// {
//     var student_name =document.getElementById("user").value;//local variable
//    // data.innerText="My Name is"+student_name +"<br>"+"Name is"+student_name;

//    data.innerHTML="My Name is"+student_name +"<br>"+"Name is"+student_name;
// }

// var store_data = document.getElementById("divid");

// function sample()
// {
//     var user_name=document.getElementById("user").value;
//     var psw=document.getElementById("psw").value;    
// }

