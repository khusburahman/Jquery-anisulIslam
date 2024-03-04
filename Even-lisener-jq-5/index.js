/*js code*/
/*
document.querySelector("button").addEventListener("click",function(){
    document.querySelector("h1").innerHTML="you have click the button"
})
*/



/*jquary code*/
/*
$("button").click(function(){
    $("h2").text("khusbu rahman click here")
})



$("button").click(function(){
    $("h3").toggleClass("style1")
})

*/

/*multiple toggole added*/

/*js code*/

var totalbuttons=document.querySelectorAll(".btn1").length;
for(i = 0; i < totalbuttons; i++){
    document.querySelectorAll(".btn1")[i].addEventListener("click",function(){
        var text=this.innerHTML;
        document.querySelector("h5").innerHTML=text+ " is clicked";
    })

}


/*jQ code*/
/*
$(".btn1").click(function(){
    var value=this.innerHTML;
    $("h5").text(value+ " is clicked")
})
*/


$(".btn1").on("mouseover",function(){
    var value=this.innerHTML;
    $("h5").text(value+ " is clicked")
})





