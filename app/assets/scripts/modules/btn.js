class Btn {
  constructor( my_class ) {
    this.my_class = my_class;
    this.btns = document.getElementsByClassName(my_class);
    this.events()
  }

  events() {
    for( let i=0; i < this.btns.length; i++ ) {
      this.btns[i].addEventListener("mousedown", this.handleMouseDown.bind(this))
      this.btns[i].addEventListener("mouseup", this.handleMouseUp.bind(this))
    }
  }

  handleMouseDown(e) {
    var el = e.target;
    while( el && !$(el).hasClass(this.my_class) ) {
      el = el.parentNode;
    }
    el.classList.add(this.my_class + "--pressed");
  }

  handleMouseUp(e) {
    var el = e.target;
    while( el && !$(el).hasClass(this.my_class) ) {
      el = el.parentNode;
    }
    el.classList.remove(this.my_class + "--pressed");
  }
}

export default Btn;
