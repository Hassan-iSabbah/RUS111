console.log("Connected to js");

$(".hero__heading").html("A1 Russian Course");


let images = ["ezio", "Ratehekon"];
let path = "./img/";
const ext = ".jpg";
let img_index = 1;

/* $(".img-display").prop("src",path + images[img_index]+ext); */

function change_image (){
    img_index++;
    if (img_index>images.length-1){
        img_index = 0;
    }
    let fade = 120;
    $(".img-display").fadeOut(fade, function(){
        $(this).prop("src",path + images[img_index]+ext).fadeIn(fade); }
);
}

$(".img-display").click(change_image);

setInterval(change_image, 2700);


$(".menu-burger").click(function(){
    $(this).toggleClass("open");
    $(".nav_header").toggleClass("open");
});




/* DATABASOR FUNCTIONS */

$("td").on("contextmenu",function(e){
    e.preventDefault();
    $(this).toggleClass("eagle_vision");
    return false;
})

$(".edit-td").click(function(){
    $("#").toggleProp("content-editable");
})