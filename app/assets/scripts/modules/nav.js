class Nav {
  constructor() {
    this.events();
  }

  events() {
    let that = this;
    $(document).ready(function() {
      $(".menu__dropdown").click(function(event) {
        // show menu
        $(".menu__dropdown .menu__dropdown__links").toggleClass("menu--show-item");
        event.stopPropagation();
      });

      // mobile hamburger menu icon click handler
      $(".menu__dropdown .menu__menu-icon").click(function() {
        // change menu icon
        $(this).toggleClass("menu__menu-icon--close-x");
        // disable scroll
        $("body").toggleClass("disable-scroll");
        // add opacity to rest of document
        $(".wrapper").toggleClass("opaque");
      });

      that.setLinkVisibility();
    });

    $(window).resize(function() {
      that.setLinkVisibility();
    });

    $(window).click( that.hideMenu );
  }

  setLinkVisibility() {
    $(".menu .menu__link").show();
    $(".menu__dropdown__links").children("li").hide();

    var elem_cnt  = $(".menu .menu__link").length;
    for( var i=0; i < elem_cnt; i++ ) {

      var menu_box_w = $(".header--middle").width();
      var menu_w = $(".menu").width();
      if( menu_w > menu_box_w ) {
        // hide item in header
        $(".menu .menu__link:visible").last().hide();
        // show item in dropdown
        $(".menu__dropdown__links").children("li:hidden").last().css("display", "block");
      }
      else {
        break;
      }
    }
  }

  hideMenu() {
    $(".menu__dropdown .menu__dropdown__links").removeClass("menu--show-item");
    $(".menu__dropdown .menu__menu-icon").removeClass("menu__menu-icon--close-x");
    $("body").removeClass("disable-scroll");
    $(".wrapper").removeClass("opaque");
  }
}

export default Nav;
