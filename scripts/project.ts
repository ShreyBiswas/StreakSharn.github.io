$(document).ready(function() {
  $('.project_card').on("mouseover",function(event) {
    this.play();
  });
  .on("mouseout",function(event) {
    this.pause();
  })
});
