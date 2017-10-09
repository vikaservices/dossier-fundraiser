class FluidVideo {
  constructor() {
    this.allVideos = $(".news-item__video iframe, .news-item__video object, .news-item__video embed"),
    this.fluidEl = $(".news-item__video");

    this.allVideos.each(function() {

      $(this)
        // jQuery .data does not work on object/embed elements
        .attr('data-aspectRatio', this.height / this.width)
        .removeAttr('height')
        .removeAttr('width');
    });

    this.events();
  }

  events() {
    var that = this;
    $(window).resize(function() {
      var newWidth = that.fluidEl.width();
      that.allVideos.each(function() {
        var $el = $(this);
        $el.width(newWidth);
        $el.height(newWidth * $el.attr('data-aspectRatio'));
      });
    }).resize();
  }
}

export default FluidVideo;
