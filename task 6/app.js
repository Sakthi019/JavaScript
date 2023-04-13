var d=document.getElementById("divid");
var a;
var b;
var c;
function demo()
{
    a=document.getElementById("val1").value;
    b=document.getElementById("val2").value;
    a=parseInt(a);
    b=parseInt(b);
    c=a+b;
    alert("total:"+c)
    if(a>b){
        d.innerHTML="A is greaterthan B";
    }
    else{
        d.innerHTML="B is greaterthan A";
    }
}