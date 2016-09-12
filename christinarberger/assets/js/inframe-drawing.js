      $(document).ready( function() {
      	$('.my-slider').unslider();
      	$(".zero").click(function() {
      		console.log("clicked;")
      		$(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "vertical",
          closeButton: "X",
      		text: "Peppers",
      		image:"images/peppers.jpg",
      		date_info: "DATE OF COMPLETION: Oct. 2014",
      		body_info: "Mediums:  "
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
      		text: "Charcole Walker ",
      		image:"images/charcole_walker.jpg",
      		date_info: "DATE OF COMPLETION: Oct. 2014",
      		body_info: "Mediums: Watercolors "
      		});
      	$(".sidemenu").openMenu();
      });
      $(".two").click(function() {
          console.log("clicked the second")
          $(".sidemenu").square_menu({
          flyDirection: "bottom",
          button: "x See More x",
          animationStyle: "horizontal",
          closeButton: "X",
          text: "Skeleton Sketch ",
          image:"images/SkeletonSketch.jpg",
          date_info: "DATE OF COMPLETION: Oct. 2014",
          body_info: "Mediums: Watercolors "
          });
        $(".sidemenu").openMenu();
      });
      
});
