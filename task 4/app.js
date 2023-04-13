var final=document.getElementById("divid");
function reg(){
    var name_1=document.getElementById("name").value;
    var email_1=document.getElementById("email").value;
    var pass_1=document.getElementById("pass").value;
    var phon_1=document.getElementById("number").value;
    var zip_1=document.getElementById("zip").value;
    var area_1=document.getElementById("area").value;
    var gender_1=document.getElementById("radio_male").value;
    var gender_2=document.getElementById("radio_female").value;
    var gender_3=document.getElementById("radio_other").value;
    var tamil=document.getElementById("lan1").value;
    var english=document.getElementById("lan2").value;
    var spanesh=document.getElementById("lan3").value;

    final.innerHTML="Name: "+name_1 +"<br>"+"Your email: "+email_1+"<br>"+"Your Password: "+pass_1+"<br>"+"Phone Number: "+phon_1+"<br>"+"Gender: "+gender_1+"<br>"+"Known Language: "+tamil+english+spanesh+"  "+"<br>";
}  