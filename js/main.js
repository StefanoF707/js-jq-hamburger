var openMenu = $(".header-right > a");
openMenu.click(
    function() {
        // $(".hamburger-menu").addClass("active");
        $(".hamburger-menu").fadeIn("slow");
    }
);

var closeMenu = $("a.close");
closeMenu.click(
    function() {
        // $(".hamburger-menu").removeClass("active");
        $(".hamburger-menu").fadeOut("slow");
    }
);
