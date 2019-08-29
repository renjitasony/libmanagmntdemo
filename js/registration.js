$(document).ready(function(){
    $("#register").click(function(){
      console.log("valkeri");
    var uname = $("#uname").val();
    var mob = $("#mob").val();
    var usname = $("#usname").val();
    var uemail = $("#uemail").val();
    var pwd = $("#pwd").val();
    var cpwd = $("#cpwd").val();
    if(uname =="" || mob == "" || usname=="" || uemail=="" || pwd == "" || cpwd == ""){
      alert("Please fill all the fields!");
      return false;
    }
    if(mob.toString().length != 10){
        alert("Enter a valid mobile no:");
        return false;
    }
    if(!uemail.includes("@") || !uemail.includes(".")){
        alert("Enter a valid email id");
        return false;
    }    
    if(cpwd!=pwd){
        alert("Passwords don't match!");
        return false;
    }   
    window.location.replace("booksdisplay.html");
    });
  });