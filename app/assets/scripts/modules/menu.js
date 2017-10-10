class Menu {
  constructor() {
    // menu title
    this.menu = document.getElementsByClassName("menu__title")[0];
    // menu links box
    this.menuContent = document.getElementsByClassName("menu__links")[0];
    // mobile hamburger icon
    this.menuIcon = document.getElementsByClassName("menu__menu-icon")[0];
    // content wrapper
    this.contentWrapper = document.getElementsByClassName("wrapper")[0];
    this.events();
  }

  events() {
    // click handler for sticky menu title
    this.menu.addEventListener("click", this.handleTitleClick.bind(this));
    // click handler for mobile
    this.menuIcon.addEventListener("click", this.handleTitleClick.bind(this));
    // global menu close handler
    window.addEventListener("click", this.hideMenu.bind(this));
  }

  handleTitleClick(e) {
    e.stopPropagation();
    // toggle menu visibility
    this.menuContent.classList.toggle("menu__links--is-visible");
    // change menu icon
    this.menuIcon.classList.toggle("menu__menu-icon--close-x");
    // disable scroll
    document.body.classList.toggle("disable-scroll");
    // add opacity to rest of document
    this.contentWrapper.classList.toggle("opaque");
  }

  hideMenu() {
    document.getElementsByClassName("menu__links")[0].classList.remove("menu__links--is-visible");
    document.getElementsByClassName("menu__menu-icon")[0].classList.remove("menu__menu-icon--close-x");
    document.body.classList.remove("disable-scroll");
    this.contentWrapper.classList.remove("opaque");
  }

}

export default Menu;
