$(document).ready(function() {
$("#formone").submit(function(event){
    event.preventDefault();
    if($("input").val() ===""){
      alert('enter a valid data')
      return;
    }
      alert('your comment is received')
    this.reset();
  });
});
  