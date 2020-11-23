var openMenu = $(".header-right > a");
openMenu.click(
    function() {
        $(".hamburger-menu").addClass("active");
    }
);

var closeMenu = $("a.close");
closeMenu.click(
    function() {
        $(".hamburger-menu").removeClass("active");
    }
);
