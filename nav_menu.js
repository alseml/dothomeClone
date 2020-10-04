let nav = $("nav");
let times = 300;

let mainMenuSelect = $(".hidden_menu ul > li");
let mainMenu = $(".nav_borde > ul > li");
let mainMenuMouseOver = false;

function menuOpen() {
  nav.mouseover(function () {
    $(this).stop().animate({ height: "620px" }, times);
  });

  nav.mouseout(function () {
    $(this).stop().animate({ height: "40px" }, times);
  });
}

menuOpen();
