class HeaderSticky {
  constructor() {
    // sticky menu title
    this.menu = document.getElementsByClassName("header-sticky__title")[0];
    // sticky menu links box
    this.menuContent = document.getElementsByClassName("header-sticky__links")[0];
    // sticky header links
    this.stickyLinks = document.getElementsByClassName("sticky-link");
    // mobile hamburger icon
    this.menuIcon = document.getElementsByClassName("header-sticky__menu-icon")[0];
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
    for( let i=0; i < this.stickyLinks.length; i++ ) {
      this.stickyLinks[i].addEventListener("click", this.handleLinkClick.bind(this))
    }
  }

  handleLinkClick(e) {
    // close menu
    this.menuContent.classList.remove("header-sticky__links--is-visible");
    // remove active from all sticky header links
    for( let i=0; i  < this.stickyLinks.length; i++ ) {
      this.stickyLinks[i].classList.remove("header-sticky__links--active");
    }
    // remove selected class from regular header nav links
    for( let i=0; i  < this.navLinks.length; i++ ) {
      this.navLinks[i].classList.remove("header__links--active");
    }
    e.target.classList.toggle("header-sticky__links--active");
  }

  handleTitleClick(e) {
    // toggle active class from menu title
    this.menu.classList.toggle("header-sticky__title--is-active");
    // toggle menu visibility
    this.menuContent.classList.toggle("header-sticky__links--is-visible");

    this.menuIcon.classList.toggle("header-sticky__menu-icon--close-x");
  }

}

export default HeaderSticky;
