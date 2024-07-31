var count=0;
function user(form){
    if(form.mail.value=="hiral@12.com" && form.pw.value=="123")
    {
        alert("Login Succesfuly..");
        document.getElementById("mail").value="";
        document.getElementById("pw").value="";
    }
    else if(form.mail.value=="" && form.pw.value=="")
    {
        alert("Please Enter Email Or Password");
    }
    else if(form.mail.value=="" && form.pw.value!="")
    {
        alert("Please Enter Email");
    }
    else if(form.mail.value!="" && form.pw.value=="")
    {
        alert("Please Enter Password");
    }
    else if(form.mail.value!="hiral@12.com" && form.pw.value!="123"){
        count+=1;
        alert(`Invalid Email Or Password\n ${3-count} attempts left`);
    }
    else if(form.mail.value!="hiral@12.com" && form.pw.value=="123"){
        count+=1;
        alert(`Invalid Email\n ${3-count} attempts left`);
    }
    else if(form.mail.value=="hiral@12.com" && form.pw.value!="123"){
        count+=1;
        alert(`Invalid Password\n ${3-count} attempts left`);
    }
    else{
    }
    document.getElementById("mail").disabled=(count===3) ? true:false;
    document.getElementById("pw").disabled=(count===3) ? true:false;
    document.getElementById("btn").disabled=(count===3) ? true:false;
}
