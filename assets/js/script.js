// Loader 
var loading = setInterval(function () {
    var loadr = document.getElementById("loader");
    var root = document.getElementById("root");
    var body = document.getElementsByTagName("body");
    if (document.readyState !== "complete") return;
    clearInterval(loading);
    loadr.classList.add('hide');
    // loader.remove();
    root.classList.remove('hide');
}, 3000);

// Email Input 

// Splitting();
// $('.signup').submit(function (event) {
//     event.preventDefault();
// // $("#contact").submit();
//     var emailText = $('.email').val();
//     $(".field").append("<p data-splitting='chars'>" + emailText + "</p>");
//     Splitting();
//     $("#wrap").addClass("plunge");
//     setTimeout(function () {

//         $(".field p").remove();
//         $("#wrap").removeClass("plunge");
//         $("#contact").submit();
//                 $('.email').val('');
//     }, 4000);

// });

//  action="myemailform.php" method="post"
function postmanAnimation(e) {
    $("#loader").removeClass("hide");
    $("#root").addClass("hide");
    console.log("Submitting here>>>>>")
    var emailText = $('.email').val() || "";
    if (emailText.trim().length === 0) {
        console.log("Error here>>>>>")
        return
    }
    console.log("Submitting text>>>>>", emailText)
    $(".field").append("<p data-splitting='chars'>" + emailText + "</p>");
    Splitting();
    $("#wrap").addClass("plunge");
    setTimeout(function () {
        $(".field p").remove();
        $("#wrap").removeClass("plunge");
        $('.email').val('');
        console.log("Removibg here>>>>>")
        $.ajax({
            type: "POST",  //type of method
            url: "myemailform.php",  //your page
            data: { email: emailText },// passing the values
            success: function (res) {
                $("#loader").addClass("hide");
                $("#root").removeClass("hide");
                setTimeout(function () { window.location.href = '.../thanks.html'; }, 1000);

                // alert("Thanks for subscribing!");
                console.log("Finished here>>>>>", res)
            }
        });
    }, 4000);
}
