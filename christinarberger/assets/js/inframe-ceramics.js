
      $(document).ready( function() {
      	$('.my-slider').unslider();
      	$(".zero").click(function() {
      		console.log("clicked;")
      		$(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "vertical",
          closeButton: "X",
      		text: "Ceramic Bowls",
      		image:"images/ceramic_bowls.jpg",
      		date_info: "DATE OF COMPLETION: Oct. 2014",
      		body_info: "Mediums: ceramics "
      	});
      	$(".sidemenu").openMenu();
      });
      $(".one").click(function() {
      		console.log("clicked the second")
      		$(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
      		text: "Ceramic Art ",
      		image:"images/ceramics.jpg",
      		date_info: "DATE OF COMPLETION: Oct. 2014",
      		body_info: "Mediums: Watercolors "
      		});
      	$(".sidemenu").openMenu();
      });
      
});
