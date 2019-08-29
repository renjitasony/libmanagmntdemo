$(document).ready(function(){
    $("#login").click(function(){
      console.log("valkeri");
    var uname = $("#uname").val();
    var pwd = $("#pwd").val();
    if(uname ==""){
      alert("Please enter username to continue");
      return false;
    }
    if(pwd == ""){
      alert("Please enter password to continue");
      return false;
    }

    window.location.replace("booksdisplay.html");
    });
  });