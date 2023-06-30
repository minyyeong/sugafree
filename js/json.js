
$(function(){
$.ajax({
  url: "./json/hit.json",
  dataType: "json",
  success : function(data){
    if(data.length>0){
      for(var i in data){
  
        $("#product > .box > .img_box").eq(i).prepend( '<a href="sub.html" target="_self">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 
        $("#product > .box > h5").eq(i).prepend('<a href="#">'+data[i].title+'</a>');      
        $("#product > .box > .box1").eq(i).prepend('<p>'+data[i].price+'</p>');                             
      }
    }
  }
});
});

$(function(){
$.ajax({
  url: "./json/hitt.json",
  dataType: "json",
  success : function(data){
    if(data.length>0){
      for(var i in data){
  
        $("#story > .box3 > .box4").prepend("<img src='img/"+data[i].url+"'/>"); 
        $("#story > .box3 > .box4 > .box4text").prepend('<h3>'+data[i].title+'</h3>');      
        $("#story > .box3 > .box4 >.box4text > p").prepend(data[i].subtitle);   
        $("#story > .box3 > .box4 >.box4text").append('<button>'+data[i].button+'</button>');                             
      }
    }
  }
});
});

$(function(){
$.ajax({
  url: "./json/hittt.json",
  dataType: "json",
  success : function(data){
    if(data.length>0){
      for(var i in data){

        $("#review > .box4 > .box5").eq(i).prepend("<a href='#'><img src='img/"+data[i].url+"'/></a><p><a href='#'>"+data[i].title+"</a></p>").append("<pre>"+data[i].person+"</pre>"); 
        $("#review > .box4 > .box5 > .box6").eq(i).prepend("<a href='#'><img src='img/"+data[i].url2+"'/></a><h5><a href='#'>"+data[i].product+"</a></h5>").append("<h6>"+data[i].review+"</h6>");                      
      }
    }
  }
});
});

$(function(){
$.ajax({
  url: "./json/hitttt.json",
  dataType: "json",
  success : function(data){
    if(data.length>0){
      for(var i in data){
  
        $("#coupon > .box2").eq(i).prepend("<a href='#'><img src='img/"+data[i].url+"'></a>"); 
        $("#coupon > .box2").eq(i).append("<h5>"+data[i].title+"</h5>");      
      }
    }
  }
});
});