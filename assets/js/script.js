// Loader 
var loading = setInterval(function () {
    var loadr = document.getElementById("loader");
    var root = document.getElementById("root");
    var body = document.getElementsByTagName("body");
    if (document.readyState !== "complete") return;
    clearInterval(loading);
    loadr.classList.add('hide');
    loader.remove();
    root.classList.remove('hide');
    body.classList.add('slide-fwd-center');
}, 3000);

// Email Input 
Splitting();
$('.signup').submit(function (event) {
    event.preventDefault();

    var emailText = $('.email').val();
    $(".field").append("<p data-splitting='chars'>" + emailText + "</p>");
    Splitting();
    $("#wrap").addClass("plunge");
    setTimeout(function () {
        $('.email').val('');
        $(".field p").remove();
        $("#wrap").removeClass("plunge");
    }, 4000);
});

// Parallex 
function scrollFooter(scrollY, heightFooter) {
    console.log(scrollY);
    console.log(heightFooter);

    if (scrollY >= heightFooter) {
        $('footer').css({
            'bottom': '0px'
        });
    }
    else {
        $('footer').css({
            'bottom': '-' + heightFooter + 'px'
        });
    }
}
