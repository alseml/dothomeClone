let page = $(".page_main article > ul");
let pageBtn = $(".page_menu ul li");
let pageScreen = $(".page_main");

let imgCount = page.find("img").length;
let pageIndex = 0;
let interval = 7500;
let currentAni;

function pageAni() {
  page.stop().animate({ left: -1200 * pageIndex }, 500);
}

function pageBtnColor() {
  pageBtn.each(function (e) {
    $(this).index() % 2 == 0
      ? $(this).css("background", "white")
      : $(this).css("background", "#DDDDDD");
    $(this).css("color", "black");
  });
  pageBtn.eq(pageIndex).css("background", "#0070C0");
  pageBtn.eq(pageIndex).css("color", "white");
}

function setTimer() {
  currentAni = setInterval(() => {
    pageIndex > imgCount - 2 ? (pageIndex = 0) : pageIndex++;
    pageAni();
    pageBtnColor();
  }, interval);
}

function pageBtnClick() {
  pageBtn.on("click", function () {
    pageIndex = $(this).index();
    pageAni();
    pageBtnColor();
    console.log(currentAni);
    clearInterval(currentAni);
  });
}

function mouseOverAniStop() {
  pageScreen.mouseover(() => clearInterval(currentAni));
  pageScreen.mouseout(() => setTimer());
}

pageBtnColor();
setTimer();
pageBtnClick();
mouseOverAniStop();
