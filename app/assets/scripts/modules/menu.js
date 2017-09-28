class Menu {
  constructor() {
    // sticky menu title
    this.menu = document.getElementsByClassName("menu__title")[0];
    // sticky menu links box
    this.menuContent = document.getElementsByClassName("menu__links")[0];
    // sticky header links
    this.menuLinks = document.getElementsByClassName("menu-link");
    // mobile hamburger icon
    this.menuIcon = document.getElementsByClassName("menu__menu-icon")[0];
    // regular header links
    this.navLinks = document.getElementsByClassName("nav-link");
    this.events();
  }

  events() {
    // click handler for sticky menu title
    this.menu.addEventListener("click", this.handleTitleClick.bind(this));
    // click handler for mobile
    this.menuIcon.addEventListener("click", this.handleTitleClick.bind(this));
    // click handlers for sticky menu link items
    for( let i=0; i < this.menuLinks.length; i++ ) {
      this.menuLinks[i].addEventListener("click", this.handleLinkClick.bind(this))
    }
  }

  handleLinkClick(e) {
    // close menu
    this.menuContent.classList.remove("menu__links--is-visible");
    // remove active from all sticky header links
    for( let i=0; i  < this.menuLinks.length; i++ ) {
      this.menuLinks[i].classList.remove("menu__links--active");
    }
    // remove selected class from regular header nav links
    for( let i=0; i  < this.navLinks.length; i++ ) {
      this.navLinks[i].classList.remove("header__links--active");
    }
    e.target.classList.toggle("menu__links--active");
  }

  handleTitleClick(e) {
    // toggle active class from menu title
    this.menu.classList.toggle("menu__title--is-active");
    // toggle menu visibility
    this.menuContent.classList.toggle("menu__links--is-visible");

    this.menuIcon.classList.toggle("menu__menu-icon--close-x");
  }

}

export default Menu;
