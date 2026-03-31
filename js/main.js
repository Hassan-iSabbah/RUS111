console.log("Connected to js");

jQuery(".hero__heading").html("A1 Russian Course");


let images = ["ezio", "Ratehekon"];
let path = "./img/";
const ext = ".jpg";
let img_index = 1;

/* jQuery(".img-display").prop("src",path + images[img_index]+ext); */

function change_image (){
    img_index++;
    if (img_index>images.length-1){
        img_index = 0;
    }
    let fade = 120;
    jQuery(".img-display").fadeOut(fade, function(){
        jQuery(this).prop("src",path + images[img_index]+ext).fadeIn(fade); }
);
}

jQuery(".img-display").click(change_image);

setInterval(change_image, 2700);


jQuery(document).ready(function(){
    let currentIndex = 0;
    const $container = jQuery('.carousel-container');
    const totalImages = $container.children().length;

    function showImage(index) {
        $container.css('transform', 'translateX(' + (-index * 20) + '%)');
    }

    jQuery('.next').click(function(){
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    jQuery('.prev').click(function(){
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    // Auto advance every 15 seconds
    setInterval(function(){
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }, 15000);
});


jQuery(".menu-burger").click(function(){
    jQuery(this).toggleClass("open");
    jQuery(".nav_header").toggleClass("open");
});

jQuery('.toggle-btn').click(function(){
    jQuery('.side-menu').toggleClass('closed');
    var icon = jQuery(this).find('i');
    if (jQuery('.side-menu').hasClass('closed')) {
        icon.removeClass('fa-bars').addClass('fa-times');
    } else {
        icon.removeClass('fa-times').addClass('fa-bars');
    }
});




/* DATABASOR FUNCTIONS */

jQuery("td").on("contextmenu",function(e){
    e.preventDefault();
    jQuery(this).toggleClass("eagle_vision");
    return false;
})

jQuery(".edit-td").click(function(){
    jQuery("#").toggleProp("content-editable");
})