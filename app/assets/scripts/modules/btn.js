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
    e.target.classList.add( this.my_class + "--pressed" );
    e.stopPropagation();
  }

  handleMouseUp(e) {
    e.target.classList.remove( this.my_class + "--pressed" );
  }
}

export default Btn;
