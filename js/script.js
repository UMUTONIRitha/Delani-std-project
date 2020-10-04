$(document).ready(function() {
    $("#imgdesign").click(function() {
      $("#wedodesign").toggle();
    });
  });


  
  $("#formone").submit(function(event){
    event.preventDefault();
    if($("input").val() ===""){
      alert('enter a valid data')
      return;
    }
      alert('your comment is received')
    this.reset();
  });
 
  