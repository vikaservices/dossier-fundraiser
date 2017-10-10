class Menu {
  constructor() {
    // menu title
    this.menu = document.getElementsByClassName("menu__title")[0];
    // menu links box
    this.menuContent = document.getElementsByClassName("menu__links")[0];
    // mobile hamburger icon
    this.menuIcon = document.getElementsByClassName("menu__menu-icon")[0];
    // global menu close handler
    window.addEventListener("click", this.hideMenu);
    this.events();
  }

  events() {
    // click handler for sticky menu title
    this.menu.addEventListener("click", this.handleTitleClick.bind(this));
    // click handler for mobile
    this.menuIcon.addEventListener("click", this.handleTitleClick.bind(this));
  }

  handleTitleClick(e) {
    e.stopPropagation();
    // toggle menu visibility
    this.menuContent.classList.toggle("menu__links--is-visible");
    // change menu icon
    this.menuIcon.classList.toggle("menu__menu-icon--close-x");
  }

  hideMenu() {
    document.getElementsByClassName("menu__links")[0].classList.remove("menu__links--is-visible");
    document.getElementsByClassName("menu__menu-icon")[0].classList.remove("menu__menu-icon--close-x");
  }

}

export default Menu;
