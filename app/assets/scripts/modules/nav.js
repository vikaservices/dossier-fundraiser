class Nav {
  constructor() {
    // regular header links
    this.navLinks = document.getElementsByClassName("nav-link");
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
    // make clicked link active
    e.target.classList.toggle("header__links--active");
  }

}

export default Nav;
