$(document).ready(function () {
    $(".btn-open").click(function (e) { 
        $(".side-bar").css("display", "block");
        $(this).css("display", "none");
    });
    $(".btn-close").click(function (e) { 
        $(".side-bar").css("display", "none");
        $(".btn-open").css("display", "block");
    });
});