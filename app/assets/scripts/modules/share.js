class Share {
  constructor() {
      this.shareBtns = document.getElementsByClassName("share__item");

      this.events();
  }

  events() {
    if( this.shareBtns === undefined ) { return false; }
    for( let i=0; i < this.shareBtns.length; i++ ) {
      this.shareBtns[i].addEventListener("mousedown", this.handleMouseDown.bind(this), false);
      this.shareBtns[i].addEventListener("mouseup", this.handleMouseUp.bind(this), false)
    }
  }

  handleMouseDown(e) {
    var el = e.target;
    while( el && !$(el).hasClass("share__item") ) {
      el = el.parentNode;
    }
    if( el.dataset.name === undefined ) { return false; }
    el.classList.add(el.dataset.name + "--pressed");
  }

  handleMouseUp(e) {
    var el = e.target;
    while( el && !$(el).hasClass("share__item") ) {
      el = el.parentNode;
    }
    if( el.dataset.name === undefined ) { return false; }
    el.classList.remove(el.dataset.name + "--pressed");
  }
}

export default Share;
