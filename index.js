




$(document).ready(function () {
    var $menu = $("#menu"),
    $menulink = $(".menu-link");
    
    $menulink.click(function() {
      $menulink.toggleClass("open");
      $menu.toggleClass("open");
      return false;
    });
  });



$(document).ready(function() {
    $(".myvideos").on("mouseover", function(event) {
      this.play();
  
    }).on('mouseout', function(event) {
      this.pause();
  
    });
  })
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  
      
      
      
      
      
      
      
