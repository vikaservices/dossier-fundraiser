class Nav {
  constructor() {
    // regular header links
    this.navLinks = document.getElementsByClassName("nav-link");
    // sticky menu title
    this.Menu = document.getElementsByClassName("menu__title")[0];
    // sticky menu links box
    this.menuContent = document.getElementsByClassName("menu__links")[0];
    // sticky header links
    this.menuLinks = document.getElementsByClassName("menu-link");
    this.events();
  }

  events() {
    for( let i=0; i < this.navLinks.length; i++ ) {
      this.navLinks[i].addEventListener("click", this.handleClick.bind(this))
    }
  }

  handleClick(e) {
    // remove active from all links
    for( let i=0; i  < this.navLinks.length; i++ ) {
      this.navLinks[i].classList.remove("header__links--active");
    }
    // remove active from all sticky header links
    for( let i=0; i  < this.menuLinks.length; i++ ) {
      this.menuLinks[i].classList.remove("menu__links--active");
    }
    // make clicked link active
    e.target.classList.toggle("header__links--active");
    // hide sticky menu if open and remove active state from it't title
    this.Menu.classList.remove("menu__title--is-active");
    this.menuContent.classList.remove("menu__links--is-visible");

  }

}

export default Nav;
