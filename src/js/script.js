
// Toggle menu function
function toggleMenu() {
    var menuBox = document.getElementById('menu');
    if(menuBox.style.top == "0px") { // if is menuBox displayed, hide it
        menuBox.style.top = "-100%";
    }
    else { // if is menuBox hidden, display it
        menuBox.style.top = "0px";
    }
}

$( document ).ready(function() {

    // Settings rating stars
    var ratingArr = ['95%', '85%', '90%', '75%'];

    ratingArr.forEach(function(item, index) {
        $(function () {
            $("#rateYo"+index).rateYo({
                rating: item,
                normalFill: "#d9d7d8",
                ratedFill: "#F8C41C",
                readOnly: true,
                starWidth: "12px",
                starSvg: '<svg aria-hidden="true" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
            });
        });
    });


    // Scroll To Top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').click(function(){
        $('html, body').animate({scrollTop : 0},700);
        return false;
    });
});