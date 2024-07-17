$(document).ready(function () {
  var menuIcon = $(".toggle");
  var menuListItem = $(".pag");
  var user = $(".user-icon");
  $(menuIcon).on("click", function () {
    $(this).toggleClass("active");
    $(".navigation").toggleClass("active");
    $(".menu-anchr").toggleClass("active");
 
    $("body").toggleClass("active");
    $(".home-description").toggleClass("active");
  
  });
  $('.toggle-side').on("click", function(){
    $(this).toggleClass("toggl-act");
    $(".sidebar").toggleClass("side-active");
  });

  $(menuListItem).on("click", function () {
    $(menuIcon).removeClass("active");
    $(".navigation").removeClass("active");
    $(".menu-anchr").removeClass("active");
    $("body").removeClass("active");
    $(".home-description").removeClass("active");
  });
 
  $(user).on("click", function(){

    $(".account-box").toggleClass("active1");
  });
  // product card carousels
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    paginationSpeed: 4000,
    items: 1,
    dots: true,
    nav: false,
    margin: 10,
  });
  /* On click scroll function */
  $(function () {
    var navItem = ".nav-item";
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $(navItem).click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          ); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });
});
let menuToggle = document.querySelector('.side-list-items');
// let navigation = document.querySelector('.navigation');
// let main = document.querySelector('.main');
menuToggle.onclick = function(){
    menuToggle.classList.toggle("list-active")
    // navigation.classList.toggle("active")
    // main.classList.toggle("active")
}
let list = document.querySelectorAll('.side-list-items');
    for (let i=0; i<list.length; i++){
        list[i].onclick = function(){
                let j=0;
                while(j<list.length){
                    list[j++].className = 'side-list-items';
                }
                list[i].className = 'side-list-items list-active'
            }
        }