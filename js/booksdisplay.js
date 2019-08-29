$(document).ready(function(){
    $.ajax({
      type:"GET",
      url:"books.json",
      beforeSend:function(){
        $("#loader1").show();
      },
      success:function(bkdata){
        
        $("#loader1").hide();
        
        var output = "";
        for(var i in bkdata){
          
          var bkid = bkdata[i].bkid;
          var urltoimg = bkdata[i].bkimage;
          var bktitle = bkdata[i].bktitle;
          var bkdescptn = bkdata[i].bkdescptn;
          var bkcategory = bkdata[i].bkcategory;
          var filterval = $("#filcat").val();
          console.log(filterval);
          if((filterval != "All") && (bkcategory != filterval)){
              continue;                  
          }
          
          output += "<div class='col col-sm-4' > <div class='card' style='width: 19rem;'>  <img class='card-img-top' src='./images/";
          output += urltoimg +" ' alt='";
          output += bktitle + " ' id='bimg'>   <div class='card-body'>   <h5 class='card-title'>";
          output += bktitle + "</h5>  <p class='card-text line-clamp'>'";
          output += bkdescptn + " </p> <button type='button' name='readmore' class='btn btn-link' id='readmore' value='Read more..'>Read more..</button> </div> </div> </div>"; 
         
        }
        $("#bookdetails").html(output);
      }
    });
    $("#filcat").change(function(){      
      $.ajax({
        type:"GET",
        url:"books.json",
        success:function(data){
          var output = "";
        for(var i in data){          
          var bkid = data[i].bkid;
          var urltoimg = data[i].bkimage;
          var bktitle = data[i].bktitle;
          var bkdescptn = data[i].bkdescptn;
          var bkcategory = data[i].bkcategory;
          var filterval = $("#filcat").val();
                    
          if((filterval != "All") && (bkcategory != filterval)){
              continue;                  
          }
          console.log(filterval);
          output += "<div class='col-sm-4'> <div class='card' style='width: 17rem;'>  <img class='card-img-top' src='./images/";
          output += urltoimg +" ' alt='";
          output += bktitle + " ' id='bimg'>   <div class='card-body'>   <h5 class='card-title'>";
          output += bktitle + "</h5>  <p class='card-text line-clamp'>'";
          output += bkdescptn + " </p><button type='button' name='readmore' class='btn btn-link' id='readmore' value='Read more..'>Read more..</button> </div> </div> </div>"; 
          
        }
        $("#bookdetails").html(output);
        console.log(output);
        }
      });
    });
      
    $(document).on('click','#readmore',function(){      
      $.ajax({
        context:this,
        type:"GET",
        url:"books.json",
       beforeSend:function(){
          $("#loader1").show();
       },
        success:function(bkdata){        
           var btn = $(this);
          
          if(btn.val()=="Read more.."){
            btn.attr("value","Read less..");
            btn.text("Read less..");
            $(this).parent().children('.card-text').css("overflow","scroll");
          }else if(btn.val()=="Read less.."){
            btn.attr("value","Read more..");
            btn.text("Read more..");
            $(this).parent().children('.card-text').css("overflow","hidden");
          }                          
                
          
        }
      });
      
      
      
    });
  });