class Nav {
  constructor() {
    // regular header links
    this.navLinks = document.getElementsByClassName("nav-link");
    // sticky menu title
    this.stickyMenu = document.getElementsByClassName("header-sticky__title")[0];
    // sticky menu links box
    this.stickyMenuContent = document.getElementsByClassName("header-sticky__links")[0];
    // sticky header links
    this.stickyLinks = document.getElementsByClassName("sticky-link");
    this.events();
  }

  events() {
    console.log(this.navLinks);
    for( let i=0; i < this.navLinks.length; i++ ) {
      this.navLinks[i].addEventListener("click", this.handleClick.bind(this))
    }
  }

  handleClick(e) {
    console.log("click");
    console.log(e.target);
    // remove active from all links
    for( let i=0; i  < this.navLinks.length; i++ ) {
      this.navLinks[i].classList.remove("header__links--active");
    }
    // remove active from all sticky header links
    for( let i=0; i  < this.stickyLinks.length; i++ ) {
      this.stickyLinks[i].classList.remove("header-sticky__links--active");
    }
    // make clicked link active
    e.target.classList.toggle("header__links--active");
    // hide sticky menu if open and remove active state from it't title
    this.stickyMenu.classList.remove("header-sticky__title--is-active");
    this.stickyMenuContent.classList.remove("header-sticky__links--is-visible");

  }

}

export default Nav;
