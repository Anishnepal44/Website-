var $ = jQuery;

$(".skill_progress").each(function () {
    $this = $(this);
    $percentage = $this.attr("percentage");
    $this.css("width", $percentage+"%");
});

$(".skillProfessional").on("click" , function () {
    $(".PerSkills").slideUp();
    setTimeout(() => {
        $(".ProSkills").slideDown();
    }, 700);
    $(this).addClass("active");
    $(".skillPersonal").removeClass("active");
})

$(".skillPersonal").on("click" , function () {
    $(".ProSkills").slideUp();
    setTimeout(() => {
        $(".PerSkills").slideDown();
    }, 700);
    $(this).addClass("active");
    $(".skillProfessional").removeClass("active");
})
$(function () {
    $(".typed").typed({
        strings : [ "Anish Nepal.", " Anish Nepal, A Web Designer." , "Anish Nepal, A Web Developer." ," Anish Nepal, A Front End Web Developer."],
        typeSpeed : 100,
        backSpeed : 60,
        backDelay: 1000,
        loop: true,
    })
})

$(".ChangeTheme").on("click" ,function () {
    $ThemeColor = "#"+Math.random().toString(16).substr(2,6);
    console.log($ThemeColor);
    $("body").css("--first-color" , $ThemeColor);
    $(".Themechanged").fadeIn();
    $(".Themechanged").css("background" , $ThemeColor);
    $(".CurrentColor").html($ThemeColor)
    setTimeout(() => {
        $(".Themechanged").fadeOut();
    }, 2000);
})