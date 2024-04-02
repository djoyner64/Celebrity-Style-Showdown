let celeb = [];

$(".add").click(function() {
    let newImage = $(".picture-url").val();
    celeb.push(newImage);
    $(".gallery").append("<img src= " + newImage + ">");
    $(".Unique").text(celeb.length);
    $(".picture-url").val("");
    $(".celb").show();
    $(".box").show();
});

$(".celebname").click(function() {
    let name = $(".celb-nom").val();
   $(".namelist").append("<li>"+name+"</li>");

});

//if (myArray.length > 0) {
            // Remove the last item from the array using pop()//
          //  myArray.pop();//

$(".erase").click(function() {
    let newpic = $(".gallery").val();
    celeb.pop(newpic);
    if (newpic.length > 0) {
          
            newpic.pop();
    }
   $(".celb").hide();
    $(".users li:last-child").remove();
   
    $(".Unique").text(celeb.length);
});
