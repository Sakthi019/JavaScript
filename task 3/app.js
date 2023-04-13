var sn1=document.getElementById("spn1");
var us;
var psw;
var cpsw;
function use(){
    us=document.getElementById("user").value;
    var use=document.getElementById("user");
    if(us.length<8)
    {
        sn1.innerHTML="username must contain 8 characters.";
        sn1.style.color="red";
        use.style.borderColor="red";
    }
    else{
        sn1.innerHTML="";
        use.style.borderColor="green";
    }
}

function mail(){
    var em=document.getElementById("email");
    if(em.length<8)
    {
        em.style.borderColor="red";
    }
    else{
        em.style.borderColor="green";
    }
}

var sn3=document.getElementById("spn3");
function pass(){
    psw=document.getElementById("password").value;
    var psw1=document.getElementById("password");
    if(psw.length<8)
    {
    sn3.innerHTML="Password must has atleast 8 characters that includes atleast 1 lowercase character, 1 uppercase character, 1 number and 1 spicial character in(!@#$%^&*)";
    sn3.style.color="red";
    psw1.style.borderColor="red";
    }
    else{
        sn3.innerHTML="";
        psw1.style.borderColor="green";
    }
}

var sn4=document.getElementById("spn4");
function word(){
    cpsw=document.getElementById("confirm_password").value;
    var cpsw1=document.getElementById("confirm_password");
    if(cpsw.length<8)
    {
    sn4.innerHTML="Please enter the password again";
    sn4.style.color="red";
    cpsw1.style.borderColor="red";
    }
    else{
        sn4.innerHTML="";
        cpsw1.style.borderColor="green";
    }
}

function signup(){
    if(psw==cpsw){
    alert("welcome "+us);
    }
    else{
        alert("Incorrect password")
    }
}