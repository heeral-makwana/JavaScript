function validation(){
           var fname=document.getElementById('fname').value;
           var lname=document.getElementById('lname').value;
           var mobile=document.getElementById('mobile').value;
           var email=document.getElementById('email').value;
           var gender=document.getElementById('gender').value;
            console.log("fname", fname);
            console.log("lname", lname);
            console.log("mobile", mobile);
            console.log("email", email);
            console.log("gender", gender);
                  valid=true;
                  var x= /^[A-Za-z]+$/;
                    if(fname == ""){
                      alert(" ** Please fill the username field");
                    valid= false;
                    }   
                    else if(!x.test(fname)){
                       alert("First Nmae:Please Enter only Characters");
                         return false;
                    }
                    else if(!x.test(lname)){
                      alert("Last Name:Please Enter only Characters");
                         return false;
                    }
                    else if(isNaN(mobile)){
                       alert(" ** user must write digits only not characters");
                       return false;
                    }
                    else if(mobile.length!=10){
                       alert(" ** Mobile Number must be 10 digits only");
                       return false;
                    }  
                    else if(email.indexOf('@') <= 0 ){
                       alert(" ** Invalid Email....");
                       return false;
                    }
                   else if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
                           alert(" Email:** . Invalid Position");
                            return false;
                    }
                   else {
                              passvalue();
                    }
                    }
                  
            function yesnoCheck() {
                             if (document.getElementById('yesCheck').checked) {
                                    document.getElementById('ifYes').style.visibility = 'visible';
                                    document.getElementById('sname').required=true;
                                     return false;
                                } else {
                                        document.getElementById('ifYes').style.visibility = 'hidden';
                                        document.getElementById('sname').required=false;
                                        }
                       
                                    }  
            function passvalue(){
                        var fname=document.getElementById('fname').value;
                        localStorage.setItem("textvalue1",fname);

                        var lname=document.getElementById('lname').value;
                        localStorage.setItem("textvalue2",lname);

                        var mobile=document.getElementById('mobile').value;
                        localStorage.setItem("textvalue3",mobile);

                        var email=document.getElementById('email').value;
                        localStorage.setItem("textvalue4",email);

                        var gender = document.querySelector('input[name = "gender"]:checked').value;
                        localStorage.setItem("radio1",gender);

                        var status= document.querySelector('input[name = "yesno"]:checked').value;
                        localStorage.setItem("radio2",status);

                        var sname=document.getElementById('sname').value;
                        localStorage.setItem("textvalue5",sname);

                        var msg =document.getElementById('msg').value;
                        localStorage.setItem("textvalue6",msg);

                        return false;
                        

                                }  
                                
                                