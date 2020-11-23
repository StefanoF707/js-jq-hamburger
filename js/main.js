var hamburger = $(".header-right > a");
hamburger.click(
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
