//After  & before ---------------------
// var mypara1 = $("<p></p>").text("This is a paragaraph 0")
// $("#p1").before(mypara1)

//Attribute manipulaton---------------------
// var myattr = document.querySelector("a").getAttribute("href");
// console.log(myattr)
//set atttr-----------

// var myattr = $("a").attr("href", "www.jakir.com ");
// console.log(myattr)

// $("h1").css("color", "red")
// $("h1").css("font-size", "3rem")
// $("h1").css("font-style", "italic")
//$("h1").css({"color":"green", "font-size":"2rem", "font-style":"italic"})
//$("h1").addClass("style1 style2")

//Even listener by javascript--------------------

// document.querySelector("button").addEventListener("click", function(){
//     document.querySelector("h1").innerHTML = "You have clicked the button"
//     })

    
//Even listener by jquery-----------

// $("button").click( function(){
//     $("h1").text("You have clicked the button")
// })

//Even listener by javascript--------------------

//  var totalButtons = document.querySelectorAll(".myButton").length;
//  for(i = 0; i < totalButtons ; i++){
//      document.querySelectorAll(".myButton")[i].addEventListener("click",function() {
//          var text = this.innerHTML;
//          document.querySelector("h1").innerHTML = text + "is clicked";
//      })

//  }

//Even listener by jquery-----------

// $(".myButton").on("click",function() {
//      var value = this.innerHTML;
//     $("h1").text(value + " is clicked")
// })


// $(".myButton").on("mouseover",function() {
//      var value = this.innerHTML;
//     $("h1").text(value + " is clicked")
// })


//login password----------------------------------------------

// $("#loginButton").click(function() {
//     var password1 = $("#pass1").val();
//     var password2 = $("#pass2").val();

//     if(password1 !="" && password2!="") {
//        if(password1 == password2){
//            alert("succesfully login")
//        } else {
//            alert("password mismatch")
//        }

//     } else {
//         alert("please enter password")
//     }

// })

// $("#btn").click(function(){
//     // $("#div1").hide(2000).show(2000);
//    // $("#div1").fadeOut(2000);
//    //$("#div1").fadeTo(2000, 0.7);
//    $("#div1").slideToggle(2000);
//    //$("#div1").fadeTo(2000, 0.7);
// })

// $("#btn").click(function(){
//     $("#div1").animate({
//         opacity:"0.5",
//         height:"400px",
//         width:"900px",
//         margin:"30px",
//         padding:"50px"
//     },2000);
// })

function insertNumber(number){
    var existingNumbers = $("#result").val();
    $("#result").val(existingNumbers + number)
}

function clearResult(){
    $("#result").val('')
}

function calculate(){
   var result = eval($("#result").val())
   $("#result").val(result)

}

function deleteNumber(){
    var presentValue = $("#result").val();
    if(presentValue !=''){
        $("#result").val(presentValue.slice(0,-1));
    }
}











